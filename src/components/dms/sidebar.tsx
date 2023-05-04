'use client';

import { useFetchDM } from '@lib/hooks/useFetchDM';
import { DMsSidebarItem } from './sidebarItem';

export const DMsSidebar = () => {
  const data = useFetchDM('126103bfddc8df256b6e0abfd7f3797c80dcc4ea88f7c2f87dd4104220b4d65f');
  let dms = null;

  if (data) {
    dms = [...new Map(data.map((item: any) => [item['pubkey'], item])).values()];
  }

  return (
    <div className="h-full space-y-2 py-4">
      <div className="px-2 py-2">
        <h2 className="px-2 text-lg font-semibold tracking-tight text-zinc-100">Messages</h2>
      </div>
      <div className="px-2">
        {!dms ? <></> : dms.map((dm: any) => <DMsSidebarItem key={dm.id} pubkey={dm.pubkey} />)}
      </div>
    </div>
  );
};
