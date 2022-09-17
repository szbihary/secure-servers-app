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

const SimpleServersTable: React.FC<ServersTableProps> = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              className={classNames(styles.th, {
                [styles.leftAlign]: column.align === ColumnAlign.LEFT,
                [styles.rightAlign]: column.align === ColumnAlign.RIGHT,
              })}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((serverData) => (
          <tr
            key={`${serverData.distance}${serverData.name}`}
            className={styles.tr}
          >
            {columns.map((column) => (
              <td
                key={column.id}
                className={classNames(styles.td, {
                  [styles.leftAlign]: column.align === ColumnAlign.LEFT,
                  [styles.rightAlign]: column.align === ColumnAlign.RIGHT,
                })}
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
