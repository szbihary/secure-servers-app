import { Server, ServerData, Sorting } from './types';
import { getSortedData } from './utils';

describe('getSortedData', () => {
  const testData: Server[] = [
    {
      name: 'apple',
      distance: 1231,
    },
    {
      name: 'pear',
      distance: 23,
    },
    {
      name: 'banana',
      distance: 3215,
    },
  ];

  it('should order the data ascending by distance', () => {
    const sorting: Sorting = {
      id: ServerData.DISTANCE,
      desc: false,
    };
    const expectedResult: Server[] = [
      {
        name: 'pear',
        distance: 23,
      },
      {
        name: 'apple',
        distance: 1231,
      },
      {
        name: 'banana',
        distance: 3215,
      },
    ];

    const sortedData = getSortedData(testData, sorting);

    expect(sortedData).toEqual(expectedResult);
  });

  it('should order the data descending by distance', () => {
    const sorting: Sorting = {
      id: ServerData.DISTANCE,
      desc: true,
    };
    const expectedResult: Server[] = [
      {
        name: 'banana',
        distance: 3215,
      },
      {
        name: 'apple',
        distance: 1231,
      },
      {
        name: 'pear',
        distance: 23,
      },
    ];

    const sortedData = getSortedData(testData, sorting);

    expect(sortedData).toEqual(expectedResult);
  });

  it('should order the data ascending by name', () => {
    const sorting: Sorting = {
      id: ServerData.NAME,
      desc: false,
    };
    const expectedResult: Server[] = [
      {
        name: 'apple',
        distance: 1231,
      },
      {
        name: 'banana',
        distance: 3215,
      },
      {
        name: 'pear',
        distance: 23,
      },
    ];

    const sortedData = getSortedData(testData, sorting);

    expect(sortedData).toEqual(expectedResult);
  });

  it('should order the data descending by name', () => {
    const sorting: Sorting = {
      id: ServerData.NAME,
      desc: true,
    };
    const expectedResult: Server[] = [
      {
        name: 'pear',
        distance: 23,
      },
      {
        name: 'banana',
        distance: 3215,
      },
      {
        name: 'apple',
        distance: 1231,
      },
    ];

    const sortedData = getSortedData(testData, sorting);

    expect(sortedData).toEqual(expectedResult);
  });
});
