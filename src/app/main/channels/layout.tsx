import { ChannelInfo } from '@components/channels/info';

export default function ChannelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full grid-cols-4">
      <div className="m-3 mr-0 hidden rounded-lg border border-gray-800 bg-gray-900 sm:col-span-1 sm:block">
        <ChannelInfo />
      </div>
      <div className="col-span-4 m-3 rounded-lg border border-gray-800 bg-gray-900 sm:col-span-3">{children}</div>
    </div>
  );
}
