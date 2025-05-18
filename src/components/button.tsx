import { useEffect } from 'react';
import './button.css';

interface ButtonProps {
  label?: string;
  variant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
}

const Button = ({ label = 'Text', variant = 'contained', disabled = false }: ButtonProps) => {
  useEffect(() => {
    console.log(`Button mounted with variant: ${variant}, disabled: ${disabled}`);
  }, [variant, disabled]);

  return (
    <button
      className={`text-variant-button ${variant} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
