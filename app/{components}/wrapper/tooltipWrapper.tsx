'use client';

import { Tooltip } from 'react-tooltip';

type Props = {
  id: string;
  className: string;
  children: React.ReactNode;
};

function TooltipWrapper({ id, children, className }: Props) {
  return (
    <Tooltip id={id} className={className}>
      {children}
    </Tooltip>
  );
}

export default TooltipWrapper;
