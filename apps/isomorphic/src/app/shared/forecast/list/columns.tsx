'use client';

import { getStatusColors } from '@core/components/table-utils/get-status-color';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { routes } from '@/config/routes';
import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { ActionIcon, Badge, Checkbox, Tooltip } from 'rizzui';
import { ListTableDataType } from './table';
import { table } from 'console';
import ModalIconButton from '../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/forecast/forecast.service';
import { plantSchema } from '@/validators/plant.schema';
import { PiSealCheckFill } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";

const columnHelper = createColumnHelper<ListTableDataType>();
//
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

  columnHelper.accessor('store._id', {
    id: 'store',
    size: 250,
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
    size: 150,
    header: 'Date',
    cell: ({ row }) => <DateCell date={new Date(row.original.date)} />,
  }),

  columnHelper.accessor('watercans', {
    id: 'watercans',
    size: 150,
    header: 'Can Count',
    cell: ({ row }) => row.original.watercans,
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
        // Edit={() => {
        //   return <ModalIconButton
        //     icon={
        //       <PencilIcon className="size-4" />
        //     }
        //     view={<GlobalSchemaForm onSubmitCb={useExampleStore.getState().add} schema={injectDefaults(plantSchema, row.original).label("Edit").meta({ button: "Update" })} />}
        //     customSize="600px"
        //     className="mt-0"
        //     onClickCustom={() => {
        //       useExampleStore
        //         .getState().select(row.original._id)
        //     }}
        //   />
        // }}
        editUrl=''
        deletePopoverDescription={`Are you sure you want to delete this ${row.original._id} ?`}
        hideDelete={true}
        Additional={() => {
          return <Tooltip
            size="sm"
            content="Acknowledged Forecast"
            placement="top"
            color="invert"
          >
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              onClick={() => {
                if (row.original.status == "ACKNOWLEDGED") {
                  return;
                }
                useExampleStore.getState().select(row.original._id);
                useExampleStore.getState().order();
              }}
              disabled={row.original.status == "ACKNOWLEDGED"}
            >
              {
                row.original.status == "ACKNOWLEDGED" ?

                  <PiSealCheckFill className="size-4" color='#008000' />
                  :
                  <PiSealCheckLight className="size-4" />
              }
            </ActionIcon>
          </Tooltip>
        }}
      />
    ),
  }),
];
