export const getLocal = (name: string) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const ls = window.localStorage.getItem(name);
      return ls ? JSON.parse(ls) : null;
    }
};