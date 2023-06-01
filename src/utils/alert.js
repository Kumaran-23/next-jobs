import { writable } from 'svelte/store';

function alertStore() {
  const initial = { message: null, type: null }
  const { subscribe, set } = writable(initial);

  return {
    subscribe,
    setAlert: (message, type) => set({ message, type }),
    clearAlert: () => set({ message: null, type: null })
  };
}

export const alerts = alertStore();