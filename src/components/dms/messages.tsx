import { sortedDMsAtom } from '@lib/stores';
import { useAtomValue } from 'jotai';
import { useCallback, useRef } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { DMsMessage } from './message';

export default function DMsMessages() {
  const virtuosoRef = useRef(null);
  const data: any = useAtomValue(sortedDMsAtom);

  const itemContent: any = useCallback(
    (index: string | number) => {
      return <DMsMessage data={data[index]} />;
    },
    [data]
  );

  const computeItemKey = useCallback(
    (index: string | number) => {
      return data[index].id;
    },
    [data]
  );

  return (
    <div className="h-full w-full">
      <Virtuoso
        ref={virtuosoRef}
        data={data}
        itemContent={itemContent}
        computeItemKey={computeItemKey}
        initialTopMostItemIndex={data.length - 1}
        alignToBottom={true}
        followOutput={true}
        overscan={50}
        increaseViewportBy={{ top: 200, bottom: 200 }}
        className="scrollbar-hide h-full w-full overflow-y-auto"
      />
    </div>
  );
}
