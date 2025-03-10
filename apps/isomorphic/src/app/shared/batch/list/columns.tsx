'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { Badge, Box, Checkbox, Flex, Text } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/plant/plant.service';
import { plantSchema } from '@/validators/plant.schema';
import { PiPrinterFill } from 'react-icons/pi';
import QRCodePDFViewer from '../pdf/pdf';
import QRCodePDFMain from '../pdf/pdf-main';
import useWaterCanBatchStore from '@/store/plant/batch/batch.service';
import { batchSchema } from '@/validators/batch.schema';
import cn from '@core/utils/class-names';

const columnHelper = createColumnHelper<ListTableDataType>();

const statusColors = {
  COMPLETED: ['text-green-dark', 'bg-green-dark'],
  PENDING: ['text-orange-dark', 'bg-orange-dark'],
  FAILED: ['text-red-dark', 'bg-red-dark'],
  "IN PROGRESS": ['text-gray-600', 'bg-gray-600'],
  get: (status: string) => (statusColors as any)[status],
};

export const ListColumns = [
  // columnHelper.display({
  //   id: 'select',
  //   size: 50,
  //   header: ({ table }) => (
  //     <Checkbox
  //       className="ps-3.5"
  //       aria-label="Select all Rows"
  //       checked={table.getIsAllPageRowsSelected()}
  //       onChange={() => table.toggleAllPageRowsSelected()}
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       className="ps-3.5"
  //       aria-label="Select Row"
  //       checked={row.getIsSelected()}
  //       onChange={row.getToggleSelectedHandler()}
  //     />
  //   ),
  // }),
  // columnHelper.accessor('trackingId', {
  //   id: 'trackingId',
  //   size: 150,
  //   header: 'Tracking ID',
  //   cell: ({ row }) => (
  //     <Link
  //       href={routes.logistics.shipmentDetails(row.original.id)}
  //       className="duration-200 hover:text-gray-900 hover:underline"
  //     >
  //       {row.original.trackingId}
  //     </Link>
  //   ),
  // }),

  columnHelper.accessor('id', {
    id: 'id',
    size: 250,
    header: 'id',
    enableSorting: false,
    cell: ({ row }) => (
      row.original.id
    ),
  }),
  columnHelper.accessor('watercans', {
    id: 'can count',
    size: 200,
    header: 'Can Count',
    cell: ({ row }) => <div>
      <p>{row.original.watercans}</p>
    </div>,
  }),
  columnHelper.accessor('status', {
    id: 'status',
    size: 200,
    header: 'status',
    cell: ({ row }) => {
      const color = statusColors.get(row.original.status);

      return <>
        <Flex align="center" gap="2" className="w-auto">
          <Badge renderAsDot className={color[1]} />
          <Text
            className={cn('font-medium capitalize', color[0])}
          >
            {row.original.status}
          </Text>

        </Flex>
      </>
    },
  }),

  columnHelper.accessor('plant', {
    id: 'date',
    size: 150,
    header: 'Created At',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.display({
    id: 'actions',
    size: 120,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (
      <TableRowActionGroup
        deletePopoverTitle="Delete the shipment"
        onDelete={() => {
          meta?.handleDeleteRow?.(row.original);
        }}
        // Edit={() => {
        //   return <ModalIconButton
        //     icon={
        //       <PencilIcon className="size-4" />
        //     }
        //     view={<GlobalSchemaForm onSubmitCb={useWaterCanBatchStore.getState().add} schema={injectDefaults(batchSchema, row.original).label("Edit").meta({ button: "Update" })} />}
        //     customSize="600px"
        //     className="mt-0"
        //     onClickCustom={() => {
        //       useExampleStore
        //         .getState().select(row.original._id)
        //     }}
        //   />
        // }}
        editUrl=''
        hideDelete={true}
        deletePopoverDescription={`Are you sure you want to delete this #${row.original.id} ?`}
        Additional={() => {
          return <>
            <ModalIconButton
              icon={
                <PiPrinterFill className="size-4" />
              }
              view={<QRCodePDFMain />}
              customSize="90vw"
              className="mt-0"
              onClickCustom={() => {
                useWaterCanBatchStore.getState().select(row.original._id)
              }}
            />
          </>
        }}
      />
    ),
  }),
];
