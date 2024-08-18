import { CustomCSSProperties } from '@/types/style';

export const applyCustomStyle = (style: CustomCSSProperties): React.CSSProperties => {
  return style as React.CSSProperties;
};
