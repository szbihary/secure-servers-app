import React from 'react';
import styles from './ServersTable.module.scss';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export interface Server {
  name: string;
  distance: number;
}

export interface ServersTableProps {
  data: Server[];
}

const columnHelper = createColumnHelper<Server>();

const columns = [
  columnHelper.accessor('name', {
    header: () => <div className={styles.leftAlign}>Server Name</div>,
    cell: (props) => <div className={styles.leftAlign}>{props.getValue()}</div>,
  }),
  columnHelper.accessor('distance', {
    header: () => <div className={styles.rightAlign}>Distance</div>,
    cell: (props) => (
      <div className={styles.rightAlign}>{props.getValue()}</div>
    ),
  }),
];

const ServersTable: React.FC<ServersTableProps> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={styles.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={styles.th}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
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
