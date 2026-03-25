import { useEffect, useState } from 'react';

export const AdblockDetector = () => {
  const [adblockDetected, setAdblockDetected] = useState(false);

  useEffect(() => {
    // Detección simple mediante elemento de prueba
    const testAd = document.createElement('div');
    testAd.className = 'adsbox';
    testAd.style.display = 'block';
    testAd.style.position = 'absolute';
    testAd.style.height = '1px';
    testAd.style.width = '1px';
    document.body.appendChild(testAd);
    
    setTimeout(() => {
      if (testAd.offsetHeight === 0) {
        setAdblockDetected(true);
      }
      testAd.remove();
    }, 100);
  }, []);

  if (!adblockDetected) return null;

  return (
    <div className="bg-amber-900/30 border border-amber-500/50 rounded-lg p-4 my-4 text-center">
      <p className="text-amber-300 text-sm">
        📢 Este sitio es gratuito gracias a la publicidad. 
        Si te gusta nuestro contenido, considera desactivar tu bloqueador de anuncios.
        ¡Gracias por apoyarnos!
      </p>
    </div>
  );
};
