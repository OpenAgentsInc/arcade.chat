'use client';

import { RelayContext } from '@lib/relays';
import { useContext } from 'react';
import useSWRSubscription from 'swr/subscription';

export const useChannelMetadata = (id: string) => {
  const { pool, relays }: any = useContext(RelayContext);

  const { data, error } = useSWRSubscription(['channel-metadata', id], ([, key], { next }) => {
    const unsubscribe = pool.subscribe(
      [
        {
          ids: [key],
          kinds: [40],
        },
      ],
      relays,
      (event: { content: string }) => {
        next(null, JSON.parse(event.content));
      },
      undefined,
      undefined,
      {
        unsubscribeOnEose: true,
      }
    );

    return () => {
      unsubscribe();
    };
  });

  if (!data || error) {
    return null;
  } else {
    return data;
  }
};
