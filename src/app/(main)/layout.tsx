import { Separator } from '@components/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-12">
      <div className="hidden border-r border-accent sm:col-span-1 sm:block">
        <div className="h-full px-6 pt-6">
          <div className="aspect-square w-full rounded-md bg-secondary"></div>
          <Separator className="my-2 h-px bg-muted" />
          <div className="flex flex-col gap-4">
            <div className="aspect-square w-full rounded-md bg-secondary"></div>
            <div className="aspect-square w-full rounded-md bg-secondary"></div>
            <div className="aspect-square w-full rounded-md bg-secondary"></div>
            <div className="aspect-square w-full rounded-md bg-secondary"></div>
          </div>
        </div>
      </div>
      <div className="hidden sm:col-span-3 sm:block">
        <div className="space-y-4 py-4">
          <div className="px-2 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Messages</h2>
            <div className="space-y-1">
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
              <div className="group inline-flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-accent">
                <Avatar className="h-11 w-11 overflow-hidden rounded-md">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <h5 className="font-semibold leading-none">Ren Amamiya</h5>
                  <p className="text-sm leading-none text-accent group-hover:text-accent-foreground">Message...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 bg-secondary sm:col-span-8">{children}</div>
    </div>
  );
}
