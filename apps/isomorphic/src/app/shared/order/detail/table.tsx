'use client';

import { shipmentData } from '@/data/shipment-data';
import Table from '@core/components/table';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import TableFooter from '@core/components/table/footer';
import TablePagination from '@core/components/table/pagination';
import { ListColumns } from '../list/columns';
import { Box } from 'rizzui';
import { exportToCSV } from '@core/utils/export-to-csv';
import useStore, { Order } from '@/store/plant/order/order.service';
import { useEffect } from 'react';
export type ListTableDataType = Order;

export default function DetailTableComponent() {
  const store = useStore();

  const { table, setData } = useTanStackTable<ListTableDataType>({
    tableData: [],
    columnConfig: ListColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },

      manualPagination: true,
      pageCount: store.example.pages,
      meta: {
        handleDeleteRow: async (row) => {
          store.select(row._id)
          await store.delete();
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

  const state = table.getState();

  useEffect(() => {
    store.get.paginate({ page: state.pagination.pageIndex, size: state.pagination.pageSize })
  }, [state.pagination]);

  useEffect(() => {
    setData([store.example?.detail as any]);
  }, [store.example?.detail])

  const selectedData = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);

  function handleExportData() {
    exportToCSV(
      selectedData,
      'ID,TrackingNumber,CustomerName,CustomerEmail,ShippingDate,Status,Cost,CreatedAt',
      `shipment_data_${selectedData.length}`
    );
  }

  return (
    <Box>
      <Table
        table={table}
        variant="modern"
        classNames={{
          container: 'border border-muted rounded-md',
          rowClassName: 'last:border-0',
        }}
      />
    </Box>
  );
}
