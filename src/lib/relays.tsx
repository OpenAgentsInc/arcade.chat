import { RelayPool } from 'nostr-relaypool';
import { createContext } from 'react';

const relays = [
  'wss://welcome.nostr.wine',
  'wss://relay.nostr.band/all',
  'wss://nostr.mutinywallet.com',
  'wss://relay.damus.io',
];

export const RelayContext = createContext({});

const pool = new RelayPool(relays, {
  useEventCache: false,
  subscriptionCache: true,
  logErrorsAndNotices: false,
  logSubscriptions: false,
});

export default function RelayProvider({ children }: { children: React.ReactNode }) {
  return <RelayContext.Provider value={pool}>{children}</RelayContext.Provider>;
}
