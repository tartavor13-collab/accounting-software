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
  isLoading?: boolean;
  onRowClick?: (row: any) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, isLoading = false, onRowClick }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                No data found
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  'border-b border-gray-200 dark:border-gray-800 transition-colors duration-200',
                  onRowClick && 'hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer'
                )}
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-6 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {col.render ? col.render(row[col.accessor]) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
