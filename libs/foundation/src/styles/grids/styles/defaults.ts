export type BreakpointKeys = '$xs' | '$s' | '$m' | '$ml' | '$l' | '$xl';

export type Breakpoint = {
  'min-width': number;
  'max-width'?: number;
  margin: number;
  columnGap: number;
  fullWidth: number;
};

export const bentoBreakpoints: Record<BreakpointKeys, Breakpoint> = {
  $xs: {
    'min-width': 0,
    'max-width': 599,
    margin: 16,
    columnGap: 8,
    fullWidth: 16,
  },
  $s: {
    'min-width': 600,
    'max-width': 904,
    margin: 22,
    columnGap: 8,
    fullWidth: 16,
  },
  $m: {
    'min-width': 905,
    'max-width': 1239,
    margin: 36,
    columnGap: 12,
    fullWidth: 32,
  },
  $ml: {
    'min-width': 1240,
    'max-width': 1439,
    margin: 40,
    columnGap: 12,
    fullWidth: 40,
  },
  $l: {
    'min-width': 1400,
    'max-width': 1919,
    margin: 42,
    columnGap: 12,
    fullWidth: 40,
  },
  $xl: {
    'min-width': 1920,
    margin: 56,
    columnGap: 16,
    fullWidth: 80,
  },
};

export const breakpoints: Record<BreakpointKeys, Breakpoint> = {
  $xs: {
    'min-width': 0,
    'max-width': 599,
    margin: 16,
    columnGap: 16,
    fullWidth: 16,
  },
  $s: {
    'min-width': 600,
    'max-width': 904,
    margin: 32,
    columnGap: 16,
    fullWidth: 16,
  },
  $m: {
    'min-width': 905,
    'max-width': 1239,
    margin: 120,
    columnGap: 12,
    fullWidth: 32,
  },
  $ml: {
    'min-width': 1240,
    'max-width': 1439,
    margin: 200,
    columnGap: 24,
    fullWidth: 40,
  },
  $l: {
    'min-width': 1400,
    'max-width': 1919,
    margin: 200,
    columnGap: 24,
    fullWidth: 40,
  },
  $xl: {
    'min-width': 1920,
    margin: 200,
    columnGap: 24,
    fullWidth: 80,
  },
};

export type Breakpoints = typeof breakpoints;

export const colCount = 12;
