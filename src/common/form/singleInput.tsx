import { cn } from 'Y/utils/util';
import React from 'react'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const SingleInput = React.forwardRef<HTMLInputElement, InputProps>(({className, type, ...props},ref)=>{
    return <input
        type={type}
        className={cn('border-input bg-popover text-popover-foreground ring-offset-background placeholder:text-popover-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50')}
        ref={ref}
        {...props} />;
})

SingleInput.displayName = 'SingleInput';

export {SingleInput};