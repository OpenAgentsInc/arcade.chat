import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const dmsListAtom = atom([]);
export const dmsAtom = atomWithReset([]);
export const sortedDMsAtom = atom((get) => {
  const messages = get(dmsAtom);
  return messages.sort((x: { created_at: number }, y: { created_at: number }) => x.created_at - y.created_at);
});
