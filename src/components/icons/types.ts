import { FunctionComponent } from 'react';

export interface SVGIconProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export type SVGIcon = FunctionComponent<SVGIconProps>;
