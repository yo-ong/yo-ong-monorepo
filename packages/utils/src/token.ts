const TOKEN_KEY = 'auth_token';
let memoryToken: string | null = null;

const canUseStorage = () => {
  try {
    return typeof window !== 'undefined' && !!window.localStorage;
  } catch {
    return false;
  }
};

export const getToken = (): string | null => {
  if (canUseStorage()) {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  return memoryToken;
};

export const setToken = (token: string) => {
  memoryToken = token;
  if (canUseStorage()) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }
};

export const clearToken = () => {
  memoryToken = null;
  if (canUseStorage()) {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};
