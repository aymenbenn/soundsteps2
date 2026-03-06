import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-dark">
          {label} {props.required && <span className="text-accent">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'} ${className}`}
          {...props} />

        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </div>);

  }
);
Input.displayName = 'Input';