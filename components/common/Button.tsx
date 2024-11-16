interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  calendly?: boolean;
}

export default function ActionButton({
  label,
  onClick,
  variant = 'primary',
  className = '',
  calendly = false
}: ButtonProps) {
  const baseStyles = 'py-2 px-4 rounded-md font-semibold focus:outline-none text-base';
  const styles = {
    primary: 'bg-[#4d9fff] text-white',
    secondary: 'border bg-white text-grey-400',
  };

  const handleClick = () => {
    console.log("clicked", variant, calendly)
    if (variant === 'primary' && calendly) {
      window.open('https://calendly.com/abrahamkevinabraham/cp-demo', '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${styles[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
