import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
import { atomWithStorage } from 'jotai/utils';

// user
export const user = atomWithStorage('user', { privkey: '', pubkey: '' });

// dm
export const dmsListAtom = atom([]);
export const dmsAtom = atomWithReset([]);
export const sortedDMsAtom = atom((get) => {
  const messages = get(dmsAtom);
  return messages.sort((x: { created_at: number }, y: { created_at: number }) => x.created_at - y.created_at);
});

// channel
export const channelMessagesAtom = atomWithReset([]);
export const sortedChannelMessagesAtom = atom((get) => {
  const messages = get(channelMessagesAtom);
  return messages.sort((x: { created_at: number }, y: { created_at: number }) => x.created_at - y.created_at);
});
