'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { Badge, Checkbox } from 'rizzui';
import { table } from 'console';
import PencilIcon from '@core/components/icons/pencil';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/admin-plant-relation/admin-plant-relation.service';
import { plantSchema } from '@/validators/plant.schema';
import { ListTableDataType } from './store-time-sots';
import ModalIconButton from '../modal-icon-button';
import GlobalSchemaForm from '../common/GlobalSchemaForm';
import { adminWarehouseRelationSchema } from '@/validators/admin-warehouse-relation.schema';
import moment from 'moment';

const columnHelper = createColumnHelper<ListTableDataType>();

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

  columnHelper.accessor('from', {
    id: 'From',
    // size: 250,
    header: 'From',
    enableSorting: false,
    cell: ({ row }) => moment().startOf('day').add(row.original.from, 'minutes').format("h:mm a"),
  }),

  columnHelper.accessor('to', {
    id: 'To',
    // size: 250,
    header: 'To',
    enableSorting: false,
    cell: ({ row }) => moment().startOf('day').add(row.original.to, 'minutes').format("h:mm a"),
  }),


  // columnHelper.accessor('createdAt', {
  //   id: 'date',
  //   size: 150,
  //   header: 'Created At',
  //   cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  // }),
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
        deletePopoverDescription={`Are you sure you want to delete this #${row.original._id} ?`}
        editUrl={""}
      />
    ),
  }),
];
