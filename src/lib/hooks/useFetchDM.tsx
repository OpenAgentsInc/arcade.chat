'use client';

import { RelayContext } from '@lib/relays';
import { useContext } from 'react';
import useSWRSubscription from 'swr/subscription';

export const useFetchDM = (pubkey: string) => {
  const { pool, relays }: any = useContext(RelayContext);

  const { data, error } = useSWRSubscription(['dms', pubkey], ([, key], { next }) => {
    const unsubscribe = pool.subscribe(
      [
        {
          kinds: [4],
          '#p': [key],
          since: 0,
        },
      ],
      relays,
      (event: any) => {
        next(null, (prev: any) => (prev ? [...prev, event] : [event]));
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
