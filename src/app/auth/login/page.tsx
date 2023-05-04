'use client';
import { getPublicKey, nip19 } from 'nostr-tools';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { user } from '@lib/stores';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [value, setValue] = useState('');
  const router = useRouter();
  const setUser = useSetAtom(user);

  const login = () => {
    let privkey: any = value;

    if (privkey.substring(0, 4) === 'nsec') {
      privkey = nip19.decode(privkey).data;
    }

    if (typeof getPublicKey(privkey) === 'string') {
      setUser({ privkey: privkey, pubkey: getPublicKey(privkey) });
      router.push('/main/dms');
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full flex-col gap-4 sm:max-w-xs">
        <h1 className="text-center text-lg font-semibold text-gray-100">Login with private key</h1>
        <div className="flex flex-col gap-2">
          <Input
            type="password"
            placeholder="Private key"
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="button" onClick={login}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
