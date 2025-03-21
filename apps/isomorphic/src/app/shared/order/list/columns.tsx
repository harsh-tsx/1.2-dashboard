'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { ActionIcon, Badge, Checkbox, Flex, Text, Tooltip } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/order/order.service';
import { plantSchema } from '@/validators/plant.schema';
import { PiEyeLight, PiSealCheckFill } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";
import { editOrderSchema } from '@/validators/order.schema';
import Main from '../detail/main';
import useOrderStoreScansStore from '@/store/plant/order/order-store-scans.service';
import useOrderStoreScansOutStore from '@/store/plant/order/order-store-scans-out.service';

const columnHelper = createColumnHelper<ListTableDataType>();
const OrderStatus = {
  PENDING: "warning",
  "OUT FOR DELIVERY": "secondary",
  "DELIVERED": "success",
  "COMPLETED": "success",
  get: (status: string) => (OrderStatus as any)[status],
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
  columnHelper.accessor('_id', {
    id: 'OrderId',
    header: 'Order Id',
    cell: ({ row }) => {
      return (
        <ModalIconButton
          icon={
            <PiEyeLight className="size-4" />
          }
          view={<Main />}
          customSize="90vw"
          className="mt-0"
          onClickCustom={() => {
            useExampleStore.getState().get.detail(row.original._id, row.original)
            useOrderStoreScansStore.getState().setOrderId(row.original._id)
            useOrderStoreScansOutStore.getState().setOrderId(row.original._id)
          }}
        />
      );
      <Link
        href={routes.order.details(row.original._id)}
        className="duration-200 hover:text-gray-900 hover:underline"
        target='_blank'
      >
        {row.original._id}
      </Link>
    },
  }),

  columnHelper.accessor('store._id', {
    id: 'store',
    header: 'Store',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.store?.name}
        name={row.original.store?.name}
      />
    ),
  }),
  columnHelper.accessor('date', {
    id: 'date',
    header: 'Scheduled on',
    cell: ({ row }) => <DateCell date={new Date(row.original.date)} timeClassName='hidden' />,
  }),

  columnHelper.accessor('out_at', {
    id: 'out_at',
    header: 'Out at',
    cell: ({ row }) => row.original?.out_at ? <DateCell date={new Date(row.original?.out_at)} /> : <></>,

  }),

  columnHelper.accessor('delivered_at', {
    id: 'date',
    header: 'Delivered at',
    cell: ({ row }) => row.original?.delivered_at ? <DateCell date={new Date(row.original?.delivered_at)} /> : <></>,

  }),



  columnHelper.accessor('watercans', {
    id: 'watercans',
    header: 'Can Count',
    cell: ({ row }) => {
      return (
        <Flex className='items-center' >
          <Text>
            {row.original.watercans}
          </Text>
          <ModalIconButton
            icon={
              <PencilIcon className="size-4" />
            }
            view={<GlobalSchemaForm onSubmitCb={useExampleStore.getState().add} schema={injectDefaults(editOrderSchema, row.original)} />}
            customSize="600px"
            className="mt-0"
            onClickCustom={() => {
              useExampleStore
                .getState().select(row.original._id)
            }}
          />
        </Flex>
      )
    },
  }),

  columnHelper.accessor('status', {
    id: 'status',
    // size: 150,
    header: 'Status',
    cell: ({ row }) => <Badge
      variant="outline"
      className="min-w-32 font-medium"
      color={OrderStatus.get(row.original.status)}
    >
      {row.original.status}
    </Badge>,
  }),

  columnHelper.accessor('createdAt', {
    id: 'date',
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
    }) => row.original.status == "PENDING" ? (
      <TableRowActionGroup
        deletePopoverTitle="Delete the shipment"
        onDelete={() => {
          meta?.handleDeleteRow?.(row.original);
        }}
        Edit={() => {
          return <></>
        }}
        deletePopoverDescription={`Are you sure you want to delete this ${row.original._id} ?`}
      />
    ) : <></>,
  }),
];
