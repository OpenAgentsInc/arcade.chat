import { DMsSidebar } from '@components/dms/sidebar';

export default function DMsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-full w-full grid-cols-4 sm:h-auto">
      <div className="absolute left-0 top-0 z-10 h-[300px] w-[250px] overflow-y-auto rounded-lg border border-gray-800 bg-gray-900 sm:relative sm:col-span-1 sm:m-3 sm:mr-0 sm:block sm:h-auto sm:w-auto">
        <DMsSidebar />
      </div>
      <div className="col-span-4 m-3 rounded-lg border border-gray-800 bg-gray-900 sm:col-span-3">{children}</div>
    </div>
  );
}
