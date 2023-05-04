'use client';

import { Skeleton } from '@components/skeleton';
import { useProfile } from '@lib/hooks/useProfile';
import { shortenPub } from '@lib/shortenPub';
import Image from 'next/image';
import Link from 'next/link';

export const DMsSidebarItem = ({ pubkey }: { pubkey: string }) => {
  const { user, isLoading, isError } = useProfile(pubkey);

  return (
    <Link
      href={`/dms/${pubkey}`}
      className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-zinc-900"
    >
      {isLoading && isError && !user ? (
        <Skeleton className="h-[20px] w-full rounded-md" />
      ) : (
        <>
          <div className="relative h-9 w-9 overflow-hidden rounded-md">
            <Image
              src={user?.picture || 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp'}
              alt={pubkey}
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-sm font-medium leading-none">{user?.display_name || user?.name || 'Pleb'}</h5>
            <p className="text-sm leading-none text-zinc-500 group-hover:text-zinc-400">{shortenPub(pubkey)}</p>
          </div>
        </>
      )}
    </Link>
  );
};
