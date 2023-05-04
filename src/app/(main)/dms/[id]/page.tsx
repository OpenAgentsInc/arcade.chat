'use client';

import { RelayContext } from '@lib/relays';
import { dmsAtom, user } from '@lib/stores';
import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { Suspense, lazy, useContext, useEffect } from 'react';
import useSWRSubscription from 'swr/subscription';

const DMsMessages = lazy(() => import('@components/dms/messages'));

export default function DM({ params }: { params: any }) {
  const { pool, relays }: any = useContext(RelayContext);

  const currentUser = useAtomValue(user);
  const setChatMessages: any = useSetAtom(dmsAtom);
  const resetChatMessages = useResetAtom(dmsAtom);

  useSWRSubscription(params.id ? ['dm', params.id] : null, ([, key], {}) => {
    const unsubscribe = pool.subscribe(
      [
        {
          kinds: [4],
          authors: [key],
          '#p': [currentUser.pubkey],
          limit: 20,
          since: 0,
        },
        {
          kinds: [4],
          authors: [currentUser.pubkey],
          '#p': [key],
          limit: 20,
          since: 0,
        },
      ],
      relays,
      (event: any) => {
        setChatMessages((prev: any) => [...prev, event]);
      }
    );

    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      // reset chat messages
      resetChatMessages();
    }

    return () => {
      ignore = true;
    };
  }, [resetChatMessages]);

  return (
    <div className="h-full w-full">
      <Suspense fallback={<p>Loading...</p>}>
        <DMsMessages />
      </Suspense>
    </div>
  );
}
