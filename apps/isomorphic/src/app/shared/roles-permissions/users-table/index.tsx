'use client';

import { usersData } from '@/data/users-data';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { usersColumns } from './columns';
import Table from '@core/components/table';
import TableFooter from '@core/components/table/footer';
import TablePagination from '@core/components/table/pagination';
import Filters from './filters';
import useAdminStore, { Admin } from '@/store/plant/admins/admins.service';
import { useEffect } from 'react';

export type UsersTableDataType = Admin;

export default function UsersTable() {
  const adminStore = useAdminStore();
  const { table, setData } = useTanStackTable<UsersTableDataType>({
    tableData: [],
    columnConfig: usersColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      meta: {
        handleDeleteRow: async (row) => {
          // setData((prev) => prev.filter((r) => r._id !== row._id));

          adminStore.select(row?._id)
          adminStore.delete()
          table.resetRowSelection();
        },
        handleMultipleDelete: (rows) => {
          setData((prev) => prev.filter((r) => !rows.includes(r)));
          table.resetRowSelection();
        },
      },
      enableColumnResizing: false,
    },
  });

  useEffect(() => {
    setData(adminStore.admin.list)
  }, [adminStore.admin.list])

  return (
    <div className="mt-14">
      <Filters table={table} />
      <Table
        table={table}
        variant="modern"
        classNames={{
          container: 'border border-muted rounded-md',
          rowClassName: 'last:border-0',
        }}
      />
      <TableFooter table={table} />
      <TablePagination table={table} className="py-4" />
    </div>
  );
}
