import React from 'react';

export type CustomPosition =
  | React.CSSProperties['position']
  | 'var(--header-position)'
  | 'var(--header-inner-position)';

export interface CustomCSSProperties extends Omit<React.CSSProperties, 'position'> {
  position?: CustomPosition;
}
