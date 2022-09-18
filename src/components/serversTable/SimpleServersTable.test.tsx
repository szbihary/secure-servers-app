import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleServersTable from './SimpleServersTable';
import { Server } from './types';

const testData: Server[] = [
  {
    name: 'APPLE',
    distance: 1231,
  },
  {
    name: 'pear',
    distance: 23,
  },
  {
    name: 'Banana',
    distance: 3215,
  },
];

describe('SimpleServersTable component', () => {
  it('Should render a table component', () => {
    render(<SimpleServersTable data={testData} />);
  });

  it('Should have a Name and a Distance columns', () => {
    render(<SimpleServersTable data={testData} />);

    expect(screen.getByText('Distance')).toBeTruthy();
    expect(screen.getByText('Server Name')).toBeTruthy();
  });

  it('Should have 3 table data rows', () => {
    render(<SimpleServersTable data={testData} />);

    const rows = screen.getAllByTestId('tr');

    expect(rows).toHaveLength(3);
  });

  it('Should ccontain data sorted by distance by default', async () => {
    render(<SimpleServersTable data={testData} />);

    const rows = screen.getAllByTestId('tr');

    expect(rows[0].textContent?.includes('pear')).toBeTruthy();
    expect(rows[1].textContent?.includes('APPLE')).toBeTruthy();
    expect(rows[2].textContent?.includes('Banana')).toBeTruthy();
  });

  it('Should sort the table data by name when table header is clicked', async () => {
    render(<SimpleServersTable data={testData} />);

    await userEvent.click(screen.getByText('Server Name'));

    const rows = screen.getAllByTestId('tr');

    expect(rows[0].textContent?.includes('APPLE')).toBeTruthy();
    expect(rows[1].textContent?.includes('Banana')).toBeTruthy();
    expect(rows[2].textContent?.includes('pear')).toBeTruthy();
  });
  it('Should sort the table data by name ascending when table header is clicked', async () => {
    render(<SimpleServersTable data={testData} />);

    await userEvent.click(screen.getByText('Server Name'));

    const rows = screen.getAllByTestId('tr');

    expect(rows[0].textContent?.includes('APPLE')).toBeTruthy();
    expect(rows[1].textContent?.includes('Banana')).toBeTruthy();
    expect(rows[2].textContent?.includes('pear')).toBeTruthy();
  });
});
