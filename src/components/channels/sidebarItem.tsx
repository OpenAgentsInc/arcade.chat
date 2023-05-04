'use client';

import { useChannelMetadata } from '@lib/hooks/useChannelMetadata';
import Image from 'next/image';
import Link from 'next/link';

export const ChannelSidebarItem = ({ id }: { id: string }) => {
  const metadata = useChannelMetadata(id);

  return (
    <Link href={`/channels/${id}`} className="relative aspect-square w-full overflow-hidden rounded-md bg-white">
      {!metadata ? (
        <></>
      ) : (
        <Image
          src={metadata.picture || 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp'}
          alt={metadata.name}
          fill={true}
          className="object-contain"
        />
      )}
    </Link>
  );
};
