'use client';

import { RelayContext } from '@lib/relays';
import { dmsAtom } from '@lib/stores';
import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { Suspense, lazy, useContext, useEffect } from 'react';
import useSWRSubscription from 'swr/subscription';

const DMsMessages = lazy(() => import('@components/dms/messages'));

export default function DM({ params }: { params: any }) {
  const { pool, relays }: any = useContext(RelayContext);

  const setChatMessages: any = useSetAtom(dmsAtom);
  const resetChatMessages = useResetAtom(dmsAtom);

  useSWRSubscription(params.id ? ['dm', params.id] : null, ([, key], {}) => {
    const unsubscribe = pool.subscribe(
      [
        {
          kinds: [4],
          authors: [key],
          '#p': ['126103bfddc8df256b6e0abfd7f3797c80dcc4ea88f7c2f87dd4104220b4d65f'],
          limit: 20,
          since: 0,
        },
        {
          kinds: [4],
          authors: ['126103bfddc8df256b6e0abfd7f3797c80dcc4ea88f7c2f87dd4104220b4d65f'],
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
