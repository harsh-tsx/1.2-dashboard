'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { Badge, Checkbox, Flex, Text } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/employee/employee.service';
import { employeeSchema } from '@/validators/employee.schema';
import cn from '@core/utils/class-names';
import useDriverStore from '@/store/plant/driver/driver.service';
import { driverSchema } from '@/validators/driver.schema';

const columnHelper = createColumnHelper<ListTableDataType>();

const statusColors = {
  "ACTIVE": ['text-green-700', 'bg-green-700'], // #228B22 (Forest Green - Available at Store)
  "INACTIVE": ['text-red-700', 'bg-red-700'], // #B22222 (Firebrick - Permanently Removed)
  get: (status: string) => (statusColors as any)[status] || ['text-gray-400', 'bg-gray-400'],
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

  columnHelper.accessor('name', {
    id: 'name',
    size: 250,
    header: 'name',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.name}
        name={row.original.name}
      />
    ),
  }),
  columnHelper.accessor('phone', {
    id: 'phone',
    size: 200,
    header: 'phone',
    cell: ({ row }) => <div>
      <p>{row.original.phone}</p>
    </div>,
  }),


  columnHelper.accessor('employment_type', {
    id: 'employment_type',
    header: 'employment type',
    cell: ({ row }) => row.original.employment_type,
  }),

  columnHelper.accessor('status', {
    id: 'status',
    header: 'status',
    cell: ({ row }) => {
      const color = statusColors.get(row.original.status);

      return <>
        <Flex align="center" gap="2" className="w-auto">
          <Badge renderAsDot className={color?.[1]} />
          <Text
            className={cn('font-medium capitalize', color?.[0])}
          >
            {row.original.status}
          </Text>

        </Flex>
      </>
    },
  }),

  columnHelper.accessor('createdAt', {
    id: 'date',
    size: 150,
    header: 'Created At',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  columnHelper.accessor('plant.name', {
    id: 'lat',
    header: 'Plant',
    cell: ({ row }) => row.original.plant?.name,
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
        Edit={() => {
          return <ModalIconButton
            icon={
              <PencilIcon className="size-4" />
            }
            view={<GlobalSchemaForm onSubmitCb={useDriverStore.getState().add} schema={injectDefaults(driverSchema, row.original).label("Edit").meta({ button: "Update" })} />}
            customSize="600px"
            className="mt-0"
            onClickCustom={() => {
              useExampleStore
                .getState().select(row.original._id)
            }}
          />
        }}
        deletePopoverDescription={`Are you sure you want to delete this ${row.original.name} ?`}
      />
    ),
  }),
];
