import { HTMLAttributes } from 'react';

export interface StandardContainerProps extends HTMLAttributes<HTMLDivElement> {
  $isFullWidth?: boolean;
}

export interface StandardRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Switches margins and gaps to Bento grid.
   * @default false
   */
  $isBento?: boolean;
}

export interface ColWidths {
  $xs: number;
  $s?: number;
  $m?: number;
  $ml?: number;
  $l?: number;
  $xl?: number;
}

export interface ColOffsets {
  $xsOffset?: number;
  $sOffset?: number;
  $mOffset?: number;
  $mlOffset?: number;
  $lOffset?: number;
  $xlOffset?: number;
}

export interface ColMediaNames {
  $xs?: number;
  $s?: number;
  $m?: number;
  $ml?: number;
  $l?: number;
  $xl?: number;
}

export interface StandardColProps extends ColWidths, ColOffsets, HTMLAttributes<HTMLDivElement> {}
