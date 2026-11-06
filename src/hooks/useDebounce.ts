import { useEffect, useRef } from 'react';

type AnyFunction = (...args: any[]) => void;
type TimeoutId = ReturnType<typeof setTimeout>;

interface DebounceProps<T extends AnyFunction> {
  callback: T;
  delay?: number;
}

function useDebounce<T extends AnyFunction>(
  {
    callback,
    delay = 300,
  }: DebounceProps<T>) {
  const timeoutRef = useRef<TimeoutId | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
}

export { useDebounce };