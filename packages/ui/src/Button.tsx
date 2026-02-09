import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const baseClassName =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition';
const variantClassName: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
};

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {
  const resolvedClassName = `${baseClassName} ${variantClassName[variant]} ${className ?? ''}`.trim();

  return <button className={resolvedClassName} {...props} />;
};
