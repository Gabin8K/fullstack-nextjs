import { useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {

  const [value, setValue] = useState<T>((() => {
    try {
      if (getCookie(key)) {
        return JSON.parse(getCookie(key) as string)
      }
      setCookie(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }));

  const setValueCookie = (newValue: T) => {
    setCookie(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setValueCookie];
}
