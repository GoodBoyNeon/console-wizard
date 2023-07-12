export type TableBorder = {
  readonly cornerTL: string;
  readonly cornerTR: string;
  readonly cornerBL: string;
  readonly cornerBR: string;
  readonly edgeVertical: string;
  readonly edgeHorizontal: string;
  readonly intersectionTLR: string;
  readonly intersectionBLR: string;
  readonly intersectionTBL: string;
  readonly intersectionTBR: string;
  readonly intersectionCenter: string;
};

export const defaultTableBorder: TableBorder = {
  cornerTL: '┌',
  cornerTR: '┐',
  cornerBL: '└',
  cornerBR: '┘',
  edgeVertical: '│',
  edgeHorizontal: '─',
  intersectionTLR: '┴',
  intersectionBLR: '┬',
  intersectionTBL: '├',
  intersectionTBR: '┤',
  intersectionCenter: '┼',
} as const;
