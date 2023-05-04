import { ImageWithFallback } from '@components/imageWithFallback';
import { useProfile } from '@lib/hooks/useProfile';
import { shortenPub } from '@lib/shortenPub';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const ChannelUser = ({ pubkey, time }: { pubkey: string; time: number }) => {
  const { user, isError, isLoading } = useProfile(pubkey);

  return (
    <div className="group flex items-start gap-3">
      {isError || isLoading ? (
        <>
          <div className="relative h-9 w-9 shrink animate-pulse rounded-md bg-gray-800"></div>
          <div className="flex w-full flex-1 items-start justify-between">
            <div className="flex items-baseline gap-2 text-sm">
              <div className="h-4 w-20 animate-pulse rounded bg-gray-800"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative h-9 w-9 shrink rounded-md">
            <ImageWithFallback
              src={user?.picture}
              alt={pubkey}
              fill={true}
              className="h-9 w-9 rounded-md object-cover"
            />
          </div>
          <div className="flex w-full flex-1 items-start justify-between">
            <div className="flex items-baseline gap-2 text-sm">
              <span className="font-semibold leading-none text-gray-200 group-hover:underline">
                {user?.display_name || user?.name || shortenPub(pubkey)}
              </span>
              <span className="leading-none text-gray-500">·</span>
              <span className="leading-none text-gray-500">{dayjs().to(dayjs.unix(time))}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
