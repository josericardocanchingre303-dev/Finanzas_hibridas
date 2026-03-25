import fs from 'fs';
import path from 'path';

const articlesDir = path.join(process.cwd(), 'data', 'articulos');

function validateHeadings() {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx');
  let totalErrors = 0;

  console.log(`🔍 Validating headings in ${files.length} articles...\n`);

  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const errors: string[] = [];

    // 1. Check for exactly one <h1> (title property)
    const hasTitle = /title:\s*["']|titulo:\s*["']/.test(content);
    const h1Matches = content.match(/<h1[^>]*>/g) || [];
    
    if (!hasTitle) {
      errors.push('Missing "title" or "titulo" property (H1 equivalent).');
    }
    if (h1Matches.length > 0) {
      errors.push(`Found ${h1Matches.length} <h1> tags in content (H1 should only be the title property).`);
    }

    // 2. Extract headings in order from content
    // We use a regex to find all h2 and h3 tags
    const headingRegex = /<(h2|h3)[^>]*>(.*?)<\/\1>/g;
    let match;
    const headings: { level: number; text: string }[] = [];
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: parseInt(match[1][1]),
        text: match[2].replace(/<[^>]*>/g, '').trim()
      });
    }

    // 3. Check hierarchy
    // Rules:
    // - First heading in content should be H2 (since H1 is the title)
    // - H3 must be preceded by an H2 (at some point before it in the current section)
    // Actually, the standard rule is that you can't skip levels.
    // So H1 -> H2 -> H3 is fine. H1 -> H3 is NOT fine.
    
    let lastLevel = 1; // Start with H1 (the title)
    
    headings.forEach((h, index) => {
      if (h.level === 3 && lastLevel === 1) {
        errors.push(`Hierarchy error: H3 "${h.text}" found before any H2.`);
      }
      // If we want to be strict about skipping levels:
      // if (h.level > lastLevel + 1) {
      //   errors.push(`Hierarchy error: Skipped level from H${lastLevel} to H${h.level} ("${h.text}")`);
      // }
      lastLevel = h.level;
    });

    if (errors.length > 0) {
      console.log(`❌ ${file}:`);
      errors.forEach(err => console.log(`   - ${err}`));
      totalErrors += errors.length;
    } else {
      // console.log(`✅ ${file}`);
    }
  });

  console.log(`\nValidation complete. Total errors found: ${totalErrors}`);
  if (totalErrors > 0) {
    process.exit(1);
  }
}

validateHeadings();
