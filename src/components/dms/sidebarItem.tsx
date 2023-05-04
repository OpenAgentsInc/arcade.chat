'use client';

import { ImageWithFallback } from '@components/imageWithFallback';
import { Skeleton } from '@components/skeleton';
import { useProfile } from '@lib/hooks/useProfile';
import { shortenPub } from '@lib/shortenPub';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const DMsSidebarItem = ({ pubkey }: { pubkey: string }) => {
  const segment = useSelectedLayoutSegment();
  const { user, isLoading, isError } = useProfile(pubkey);

  return (
    <Link
      href={`/main/dms/${pubkey}`}
      className={`group inline-flex w-full items-center gap-2 px-4 py-2 ${
        segment === pubkey ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-gray-800'
      }`}
    >
      {isLoading && isError && !user ? (
        <Skeleton className="h-[20px] w-full rounded-md bg-gray-800" />
      ) : (
        <>
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
            <ImageWithFallback
              src={user?.picture || 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp'}
              alt={pubkey}
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-sm font-medium leading-none">{user?.display_name || user?.name || 'Pleb'}</h5>
            <p className="text-sm leading-none text-gray-500 group-hover:text-gray-400">{shortenPub(pubkey)}</p>
          </div>
        </>
      )}
    </Link>
  );
};
