'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { Badge, Checkbox } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults, injectMeta } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/store/store.service';
import { plantSchema } from '@/validators/plant.schema';
import { storeSchema } from '@/validators/store.schema';

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

  columnHelper.accessor('name', {
    id: 'name',
    size: 250,
    header: 'name',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.name}
        name={row.original.name}
        description={row.original?.code}
      />
    ),
  }),
  columnHelper.accessor('code', {
    id: 'code',
    size: 150,
    header: 'Code',
    cell: ({ row }) => row.original?.code,
  }),
  columnHelper.accessor('address', {
    id: 'lat',
    size: 200,
    header: 'Address',
    cell: ({ row }) => <div>
      <p>{row.original.address}</p>
    </div>,
  }),
  columnHelper.accessor('coordinate', {
    id: 'lat',
    size: 200,
    header: 'Lat/Long',
    cell: ({ row }) => <div>
      <p>{row.original.coordinate.lat}/{row.original.coordinate.long}</p>
    </div>,
  }),

  columnHelper.accessor('createdAt', {
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
        Edit={() => {
          return <ModalIconButton
            icon={
              <PencilIcon className="size-4" />
            }
            view={<GlobalSchemaForm onSubmitCb={useExampleStore.getState().add} schema={injectMeta(injectDefaults(storeSchema, row.original).label("Edit"), { button: "Update" })} />}
            customSize="600px"
            className="mt-0"
            onClickCustom={() => {
              useExampleStore
                .getState().select(row.original._id)
            }}
          />
        }}
        deletePopoverDescription={`Are you sure you want to delete this ${row.original.name} shipment?`}
      />
    ),
  }),
];
