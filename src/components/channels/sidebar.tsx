import { ChannelSidebarItem } from './sidebarItem';

const DEFAULT_CHANNELS = [
  '1abf8948d2fd05dd1836b33b324dca65138b2e80c77b27eeeed4323246efba4d',
  '42224859763652914db53052103f0b744df79dfc4efef7e950fc0802fc3df3c5',
  '25e5c82273a271cb1a840d0060391a0bf4965cafeb029d5ab55350b418953fbb',
];

export const ChannelSidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      {DEFAULT_CHANNELS.map((id) => (
        <ChannelSidebarItem key={id} id={id} />
      ))}
    </div>
  );
};
