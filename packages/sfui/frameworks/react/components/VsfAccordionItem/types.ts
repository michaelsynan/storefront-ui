import { ReactNode, SyntheticEvent } from 'react';

export interface VsfAccordionItemProps {
  open?: boolean;
  title?: string;
  chevronLeft?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  children?: ReactNode;
  onToggle?: (e: SyntheticEvent) => void;
}
