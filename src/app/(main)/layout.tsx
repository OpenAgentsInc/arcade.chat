import { Separator } from '@components/separator';
import { ChannelSidebar } from '@components/channels/sidebar';
import { MessageCircle } from 'lucide-react';
import { DMsSidebar } from '@components/dms/sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full sm:grid-cols-12">
      <div className="hidden border-r border-zinc-900 sm:col-span-1 sm:block">
        <div className="h-full px-7 pt-6">
          <div className="inline-flex aspect-square w-full items-center justify-center rounded-md bg-zinc-900">
            <MessageCircle />
          </div>
          <Separator className="my-2 h-px bg-zinc-800" />
          <ChannelSidebar />
        </div>
      </div>
      <div className="m-3 mr-0 hidden rounded-lg border border-zinc-800 bg-zinc-900 sm:col-span-3 sm:block">
        <DMsSidebar />
      </div>
      <div className="col-span-12 m-3 rounded-lg border border-zinc-800 bg-zinc-900 sm:col-span-8">{children}</div>
    </div>
  );
}
