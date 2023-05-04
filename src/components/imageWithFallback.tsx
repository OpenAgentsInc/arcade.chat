import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src'];
}

const fallbackImage = 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp';

export const ImageWithFallback = ({ fallback = fallbackImage, alt, src, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return <Image alt={alt} onError={setError} src={error ? fallbackImage : src} {...props} />;
};
