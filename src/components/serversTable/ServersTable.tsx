import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import IconArrowUp24 from '../icons/IconArrowUp24';
import IconArrowDown24 from '../icons/IconArrowDown24';
import { Server, ServerData, ServersTableProps } from './types';
import styles from './ServersTable.module.scss';

const columnHelper = createColumnHelper<Server>();

const columns = [
  columnHelper.accessor(ServerData.NAME, {
    header: () => <div className={styles.leftAlign}>Server Name</div>,
    cell: (props) => <div className={styles.leftAlign}>{props.getValue()}</div>,
  }),
  columnHelper.accessor(ServerData.DISTANCE, {
    header: () => <div className={styles.rightAlignHeader}>Distance</div>,
    cell: (props) => (
      <div className={styles.rightAlign}>{props.getValue()}</div>
    ),
  }),
];

const defaultSorting = [
  {
    id: ServerData.DISTANCE,
    desc: false,
  },
];

const ServersTable: React.FC<ServersTableProps> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>(defaultSorting);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className={styles.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={styles.th}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? header.column.id === ServerData.DISTANCE
                          ? styles.sortingHeaderRight
                          : styles.sortingHeaderLeft
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <IconArrowUp24 />,
                      desc: <IconArrowDown24 />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className={styles.tr}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={styles.td}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServersTable;
