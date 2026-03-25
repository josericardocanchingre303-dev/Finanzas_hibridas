interface AdSpaceProps {
  slot?: string;
  format?: string;
  layout?: string;
  className?: string;
  label?: string;
}

export const AdSpace = ({ 
  slot = '', 
  format = 'auto',
  layout = 'display',
  className = ''
}: AdSpaceProps) => {
  // MODO DESACTIVADO - Activar cuando tengas códigos reales de AdSense
  const ADSENSE_ENABLED = false;

  if (!ADSENSE_ENABLED) {
    return (
      <div className={`my-6 flex justify-center items-center ${className}`}>
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-center">
          <p className="text-gray-500 text-xs">🔜 Espacio para publicidad</p>
          <p className="text-gray-600 text-[10px] mt-1">Apoya el contenido gratuito</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-6 flex justify-center items-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  );
};
