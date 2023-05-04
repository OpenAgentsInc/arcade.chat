'use client';

import { useChannelMetadata } from '@lib/hooks/useChannelMetadata';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export const ChannelSidebarItem = ({ id }: { id: string }) => {
  const segments = useSelectedLayoutSegments();
  const metadata = useChannelMetadata(id);

  return (
    <Link
      href={`/main/channels/${id}`}
      className={`relative aspect-square w-10 overflow-hidden rounded-md bg-gray-900 ring-1 ring-offset-2 ring-offset-gray-900 sm:w-full ${
        segments[1] === id ? 'ring-cyan-400' : 'ring-transparent'
      }`}
    >
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
