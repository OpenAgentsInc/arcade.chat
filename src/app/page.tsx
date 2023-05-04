'use client';

import { user } from '@lib/stores';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const currentUser = useAtomValue(user);

  useEffect(() => {
    if (!currentUser.privkey && !currentUser.pubkey) {
      router.push('/login');
    } else {
      router.push('/dms');
    }
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-lg font-bold uppercase tracking-wider text-zinc-100">Arcade Chat</h1>
        <p className="text-sm uppercase">Launching MAY 2023</p>
      </div>
    </div>
  );
}
