import { dateToUnix } from '@lib/date';
import { RelayContext } from '@lib/relays';
import { user } from '@lib/stores';
import { useAtomValue } from 'jotai';
import { getEventHash, signEvent } from 'nostr-tools';
import { useContext, useState } from 'react';

export const ChannelForm = ({ id }: { id: string | string[] }) => {
  const { pool, relays }: any = useContext(RelayContext);
  const [value, setValue] = useState('');
  const currentUser = useAtomValue(user);

  const submitEvent = () => {
    const event: any = {
      content: value,
      created_at: dateToUnix(),
      kind: 42,
      pubkey: currentUser.pubkey,
      tags: [['e', id, '', 'root']],
    };
    event.id = getEventHash(event);
    event.sig = signEvent(event, currentUser.privkey);

    // publish note
    pool.publish(event, relays);
    // reset state
    setValue('');
  };

  const handleEnterPress = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitEvent();
    }
  };

  return (
    <div className="relative h-24 w-full">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnterPress}
        spellCheck={false}
        placeholder="Message"
        className="relative h-24 w-full resize-none rounded-lg px-3.5 pb-3 pt-3 text-sm !outline-none ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-cyan-500 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
      />
      <div className="absolute bottom-2 w-full px-2">
        <div className="flex w-full items-center justify-between bg-gray-800">
          <div className="flex items-center gap-2 divide-x divide-gray-700"></div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => submitEvent()}
              disabled={value.length === 0 ? true : false}
              className="inline-flex h-8 w-16 items-center justify-center rounded-md bg-cyan-400 px-4 text-sm font-medium hover:bg-cyan-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
