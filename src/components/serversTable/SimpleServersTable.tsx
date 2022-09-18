import classNames from 'classnames';
import styles from './ServersTable.module.scss';
import { ServerData, ServersTableProps } from './types';

enum ColumnAlign {
  LEFT = 'left',
  RIGHT = 'right',
}

const columns = [
  { title: 'Server Name', id: ServerData.NAME, align: ColumnAlign.LEFT },
  { title: 'Distance', id: ServerData.DISTANCE, align: ColumnAlign.RIGHT },
];

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
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              className={classNames(styles.th, getAlignClass(column.align))}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((serverData) => (
          <tr key={serverData.name} className={styles.tr}>
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
