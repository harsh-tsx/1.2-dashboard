'use client';

import { shipmentData } from '@/data/shipment-data';
import Table from '@core/components/table';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import TableFooter from '@core/components/table/footer';
import TablePagination from '@core/components/table/pagination';
import Filters from './filters';
import { ListColumns } from './columns';
import { Box } from 'rizzui';
import { exportToCSV } from '@core/utils/export-to-csv';
import useStore, { Forecast } from '@/store/plant/forecast/forecast.service';
import { useEffect } from 'react';
export type ListTableDataType = Forecast;

export default function TableComponent({ list }: { list: ListTableDataType[] }) {
  const store = useStore();

  const { table, setData } = useTanStackTable<ListTableDataType>({
    tableData: list,
    columnConfig: ListColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
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

  useEffect(() => {
    setData(list);
  }, [list])

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
      <Filters table={table} />
      <Table
        table={table}
        variant="modern"
        classNames={{
          container: 'border border-muted rounded-md',
          rowClassName: 'last:border-0',
        }}
      />
      <TableFooter table={table} onExport={handleExportData} />
      <TablePagination table={table} className="py-4" />
    </Box>
  );
}
