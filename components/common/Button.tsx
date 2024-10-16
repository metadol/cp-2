// src/components/common/Button.tsx
type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
  };
  
  export default function ActionButton({ label, onClick, variant = 'primary', className = '' }: ButtonProps) {
    const baseStyles = 'py-2 px-4 rounded-md font-semibold focus:outline-none text-base';
    const primaryStyles = 'bg-[#4d9fff] text-white ';
    const secondaryStyles = 'border bg-white text-grey-400';
  
    const variantStyles = variant === 'primary' ? primaryStyles : secondaryStyles;
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
        {label}
      </button>
    );
  }
  