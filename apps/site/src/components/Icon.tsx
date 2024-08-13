import React from 'react';
import { LucideIcon } from 'lucide-react';

export type IconType = LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  className = '',
}) => {
  const isLucideIcon = 'displayName' in IconComponent;

  return (
    <div style={{ width: size, height: size }} className={className}>
      {isLucideIcon ? (
        <IconComponent size={size} color={color} />
      ) : (
        <IconComponent width={size} height={size} fill={color} style={{ color: color }} />
      )}
    </div>
  );
};

export default Icon;
