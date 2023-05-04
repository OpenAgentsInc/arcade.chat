'use client';

import { useFetchDM } from '@lib/hooks/useFetchDM';
import { DMsSidebarItem } from './sidebarItem';
import { useAtomValue } from 'jotai';
import { user } from '@lib/stores';

export const DMsSidebar = () => {
  const currentUser = useAtomValue(user);
  const data = useFetchDM(currentUser.pubkey);

  let dms = null;
  if (data) {
    dms = [...new Map(data.map((item: any) => [item['pubkey'], item])).values()];
  }

  return (
    <div className="h-full">
      <div className="mb-2 inline-flex h-14 w-full items-center border-b border-gray-800 px-4">
        <h2 className="text-lg font-semibold leading-none tracking-tight text-gray-100">Messages</h2>
      </div>
      <div>{!dms ? <></> : dms.map((dm: any) => <DMsSidebarItem key={dm.id} pubkey={dm.pubkey} />)}</div>
    </div>
  );
};
