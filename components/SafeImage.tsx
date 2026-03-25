
interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const SafeImage = ({ src, alt, className = '' }: SafeImageProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
    />
  );
};
