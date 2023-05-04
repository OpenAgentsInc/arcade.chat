'use client';

import RelayProvider from '@lib/relays';

export function Providers({ children }: { children: React.ReactNode }) {
  return <RelayProvider>{children}</RelayProvider>;
}
