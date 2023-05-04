'use client';

import { useChannelMetadata } from '@lib/hooks/useChannelMetadata';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import { nip19 } from 'nostr-tools';

export const ChannelInfo = () => {
  const segment = useSelectedLayoutSegment();
  const metadata = useChannelMetadata(segment ? segment : '');
  const noteID = segment ? nip19.noteEncode(segment) : null;

  return (
    <div className="h-full">
      <div className="mb-2 inline-flex h-14 w-full items-center border-b border-gray-800 px-4">
        <div className="inline-flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-md bg-gray-800">
            <Image
              src={metadata?.picture || 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp'}
              alt={'Channel Picture'}
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-sm font-semibold leading-none">{metadata?.name}</h3>
            <p className="text-xs font-medium leading-none text-gray-500">
              {metadata?.about || (noteID && noteID.substring(0, 24) + '...')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
