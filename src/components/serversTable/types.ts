export enum ServerData {
  NAME = 'name',
  DISTANCE = 'distance',
}

export interface Server {
  [ServerData.NAME]: string;
  [ServerData.DISTANCE]: number;
}

export interface ServersTableProps {
  data: Server[];
}

export interface Sorting {
  id: ServerData;
  desc: boolean;
}

export enum ColumnAlign {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ColumnDef {
  id: ServerData;
  title: string;
  align: ColumnAlign;
}
