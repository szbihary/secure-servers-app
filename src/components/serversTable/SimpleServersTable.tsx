import classNames from 'classnames';
import { useState } from 'react';
import IconArrowDown24 from '../icons/IconArrowDown24';
import IconArrowUp24 from '../icons/IconArrowUp24';
import {
  ColumnAlign,
  ColumnDef,
  ServerData,
  ServersTableProps,
  Sorting,
} from './types';
import styles from './ServersTable.module.scss';
import { getSortedData } from './utils';

const columns: ColumnDef[] = [
  { title: 'Server Name', id: ServerData.NAME, align: ColumnAlign.LEFT },
  { title: 'Distance', id: ServerData.DISTANCE, align: ColumnAlign.RIGHT },
];

const defaultSorting = {
  id: ServerData.DISTANCE,
  desc: false,
};

const getAlignClass = (align: ColumnAlign) => {
  switch (align) {
    case ColumnAlign.LEFT:
      return styles.leftAlign;
    case ColumnAlign.RIGHT:
      return styles.rightAlign;
    default:
      return '';
  }
};

const SimpleServersTable: React.FC<ServersTableProps> = ({ data }) => {
  const [sorting, setSorting] = useState<Sorting>(defaultSorting);

  const tableData = getSortedData(data, sorting);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              className={classNames(styles.th, getAlignClass(column.align))}
              onClick={() =>
                setSorting({
                  id: column.id,
                  desc: sorting.id === column.id ? !sorting.desc : false,
                })
              }
            >
              <div
                className={
                  column.align === ColumnAlign.LEFT
                    ? styles.sortingHeaderLeft
                    : styles.sortingHeaderRight
                }
              >
                <div className={styles.sortingHeaderTitle}>{column.title}</div>
                {sorting.id === column.id &&
                  (sorting.desc ? <IconArrowDown24 /> : <IconArrowUp24 />)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((serverData) => (
          <tr
            key={`${serverData.name}${serverData.distance}`}
            className={styles.tr}
            data-testid="tr"
          >
            {columns.map((column) => (
              <td
                key={column.id}
                className={classNames(styles.td, getAlignClass(column.align))}
              >
                {serverData[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleServersTable;
