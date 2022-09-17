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
