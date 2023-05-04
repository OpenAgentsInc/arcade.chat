'use client';

import { Separator } from '@components/separator';
import { ChannelSidebar } from '@components/channels/sidebar';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="h-screen sm:flex">
      <div className="hidden shrink-0 border-r border-gray-900 sm:block sm:w-[72px]">
        <div className="h-full px-4 pt-3">
          <Link
            href="/main/dms"
            className={`inline-flex aspect-square w-full items-center justify-center rounded-md bg-gray-900 ring-1 ring-offset-2 ring-offset-gray-900 ${
              segment === 'dms' ? 'ring-cyan-400' : 'ring-transparent'
            }`}
          >
            <MessageCircle className="h-4 w-4 text-gray-100" />
          </Link>
          <Separator className="my-2 h-px bg-gray-800" />
          <ChannelSidebar />
        </div>
      </div>
      {children}
    </div>
  );
}
