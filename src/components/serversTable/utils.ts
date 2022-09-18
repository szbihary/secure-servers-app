import { Server, ServerData, Sorting } from './types';

export const getSortedData = (data: Server[], sorting: Sorting) => {
  if (sorting.id === ServerData.NAME) {
    return [...data].sort((a, b) =>
      sorting.desc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
  } else if (sorting.id === ServerData.DISTANCE) {
    return [...data].sort((a, b) =>
      sorting.desc ? b.distance - a.distance : a.distance - b.distance
    );
  } else {
    return data;
  }
};
