'use client';

import { Separator } from '@components/separator';
import { ChannelSidebar } from '@components/channels/sidebar';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex h-screen flex-col sm:flex-row">
      <div className="h-12 w-full shrink-0 border-r border-gray-900 sm:block sm:h-auto sm:w-[72px]">
        <div className="flex h-full flex-row gap-4 px-4 pt-3 sm:flex-col sm:gap-0">
          <Link
            href="/main/dms"
            className={`inline-flex aspect-square w-10 items-center justify-center rounded-md bg-gray-900 ring-1 ring-offset-2 ring-offset-gray-900 sm:w-full ${
              segment === 'dms' ? 'ring-cyan-400' : 'ring-transparent'
            }`}
          >
            <MessageCircle className="h-4 w-4 text-gray-100" />
          </Link>
          <Separator className="my-2 hidden h-px bg-gray-800 sm:block" />
          <ChannelSidebar />
        </div>
      </div>
      {children}
    </div>
  );
}
