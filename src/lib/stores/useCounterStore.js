import {create} from 'zustand';

/**
 * Simple counter store
 */
const useInclement = create((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 10 })),
  decrement: () => set(state => ({ count: state.count - 5 })),
  reset: () => set({ count: 0 }),
}));

export default useInclement