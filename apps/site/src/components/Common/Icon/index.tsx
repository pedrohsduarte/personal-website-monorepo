import React from 'react';
import { LucideIcon } from 'lucide-react';

export type IconType = LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  grayscale?: boolean;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  className = '',
  grayscale = false,
}) => {
  const isLucideIcon = 'displayName' in IconComponent;

  const grayscaleStyle: React.CSSProperties = grayscale
    ? {
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',
      }
    : {};

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...grayscaleStyle,
  };

  return (
    <div style={containerStyle} className={className}>
      {isLucideIcon ? (
        <IconComponent size={size} color={color} />
      ) : (
        <IconComponent width={size} height={size} fill={color} style={{ color: color }} />
      )}
    </div>
  );
};

export default Icon;
