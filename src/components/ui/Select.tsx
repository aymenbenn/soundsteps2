import React, { forwardRef } from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  error?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className = '', id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={selectId} className="text-sm font-semibold text-dark">
          {label} {props.required && <span className="text-accent">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`px-4 py-3 rounded-xl border bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'} ${className}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem'
          }}
          {...props}>

          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) =>
          <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )}
        </select>
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </div>);

  }
);
Select.displayName = 'Select';