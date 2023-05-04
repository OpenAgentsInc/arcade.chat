'use client';

import { generatePrivateKey, getEventHash, getPublicKey, signEvent } from 'nostr-tools';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { useContext, useMemo, useState } from 'react';
import { useSetAtom } from 'jotai';
import { user } from '@lib/stores';
import { useRouter } from 'next/navigation';

import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import { RelayContext } from '@lib/relays';
import Link from 'next/link';

const config: Config = {
  dictionaries: [names],
};

export default function CreateAccount() {
  const { pool, relays }: any = useContext(RelayContext);

  const router = useRouter();
  const setUser = useSetAtom(user);

  const privkey = useMemo(() => generatePrivateKey(), []);
  const pubkey = useMemo(() => getPublicKey(privkey), [privkey]);
  const name = uniqueNamesGenerator(config);

  const create = () => {
    const metadata = {
      name: name,
      display_name: name,
      picture: 'https://void.cat/d/KmypFh2fBdYCEvyJrPiN89.webp',
    };

    // build event
    const event: any = {
      content: JSON.stringify(metadata),
      created_at: Math.floor(Date.now() / 1000),
      kind: 0,
      pubkey: pubkey,
      tags: [],
    };
    event.id = getEventHash(event);
    event.sig = signEvent(event, privkey);
    // broadcast
    pool.publish(event, relays);
    // update local state
    setUser({ privkey: privkey, pubkey: pubkey });
    // redirect
    router.push('/main/dms');
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full flex-col gap-4 sm:max-w-xs">
        <h1 className="text-center text-lg font-semibold text-gray-100">Create account</h1>
        <div className="flex flex-col gap-2">
          <Input readOnly type="text" defaultValue={name} />
          <Input readOnly type="text" defaultValue={pubkey} />
          <Input readOnly type="password" defaultValue={privkey} />
          <Button type="button" onClick={create}>
            Continue
          </Button>
          <Link href="/auth/login" className="text-center text-sm text-gray-400">
            Login with private key
          </Link>
        </div>
      </div>
    </div>
  );
}
