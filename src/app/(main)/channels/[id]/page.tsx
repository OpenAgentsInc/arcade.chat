'use client';

import { dateToUnix, hoursAgo } from '@lib/date';
import { RelayContext } from '@lib/relays';
import { channelMessagesAtom } from '@lib/stores';
import { useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { Suspense, lazy, useContext, useEffect, useRef } from 'react';
import useSWRSubscription from 'swr/subscription';

const ChannelMessages = lazy(() => import('@components/channels/messages'));

export default function Channel({ params }: { params: any }) {
  const { pool, relays }: any = useContext(RelayContext);
  const now = useRef(new Date());

  const setChannelMessages: any = useSetAtom(channelMessagesAtom);
  const resetChannelMessages = useResetAtom(channelMessagesAtom);

  useSWRSubscription(params.id ? ['channel', params.id] : null, ([, key], {}: any) => {
    // subscribe to channel
    const unsubscribe = pool.subscribe(
      [
        {
          '#e': [key],
          kinds: [42],
          since: dateToUnix(hoursAgo(24, now.current)),
          limit: 20,
        },
      ],
      relays,
      (event: { id: string; pubkey: string }) => {
        setChannelMessages((prev: any) => [...prev, event]);
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
      resetChannelMessages();
    }

    return () => {
      ignore = true;
    };
  }, [resetChannelMessages]);

  return (
    <div className="h-full w-full">
      <Suspense fallback={<p>Loading...</p>}>
        <ChannelMessages />
      </Suspense>
    </div>
  );
}
