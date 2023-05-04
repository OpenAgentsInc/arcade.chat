'use client';

import { useDecryptMessage } from '@lib/hooks/useDecryptMessage';
import { DMsUser } from './user';

export const DMsMessage = ({ userPriv, userPub, data }: { userPriv: string; userPub: string; data: any }) => {
  const content = useDecryptMessage(userPub, userPriv, data);

  return (
    <div className="flex h-min min-h-min w-full select-text flex-col px-5 py-2.5 hover:bg-black/20">
      <div className="flex flex-col">
        <DMsUser pubkey={data.pubkey} time={data.created_at} />
        <div className="-mt-[17px] pl-[48px]">
          <div className="whitespace-pre-line break-words text-sm leading-tight">
            {content ? content : 'Decrypting...'}
          </div>
        </div>
      </div>
    </div>
  );
};
