'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface TableProps {
  columns: Array<{
    header: string;
    accessor: string;
    render?: (value: any) => React.ReactNode;
  }>;
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            {columns.map((column, idx) => (
              <th
                key={idx}
                className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              {columns.map((column, colIdx) => (
                <td key={colIdx} className="px-4 py-3 text-gray-900 dark:text-white">
                  {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
