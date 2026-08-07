declare module 'react-hook-form' {
  export function useForm<T>(options?: unknown): {
    register: (name: keyof T) => Record<string, unknown>;
    handleSubmit: (fn: (data: T) => Promise<void> | void) => (event: unknown) => void;
    formState: { errors: Partial<Record<keyof T, {message?: string}>>; isSubmitting: boolean };
    watch: (callback: (values: Partial<T>) => void) => { unsubscribe: () => void };
    reset: () => void;
    setValue: (name: keyof T, value: T[keyof T]) => void;
  };
}
