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
import ModalIconButton from '../../../modal-icon-button';
import PencilIcon from '@core/components/icons/pencil';
import GlobalSchemaForm from '../../../common/GlobalSchemaForm';
import { number, object, string } from 'yup';
import { createExampleSchema } from '@/validators/create-example';
import { injectDefaults } from '@core/utils/yup-helper'
import useExampleStore from '@/store/plant/order/order.service';
import { plantSchema } from '@/validators/plant.schema';
import { PiSealCheckFill } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";
import cn from '@core/utils/class-names';

const columnHelper = createColumnHelper<ListTableDataType>();

const statusColors = {
  "EMPTY": ['text-gray-600', 'bg-gray-600'], // #808080 (Gray - Neutral Idle State)
  "AT PLANT": ['text-blue-500', 'bg-blue-500'], // #1E90FF (Dodger Blue - Processing at Plant)
  "RESERVED": ['text-yellow-400', 'bg-yellow-400'], // #FFD700 (Gold - Reserved for Order)
  "SCANNED IN TO STORE": ['text-lime-500', 'bg-lime-500'], // #32CD32 (Lime Green - Successfully Scanned into Store)
  "IN TRANSIST": ['text-orange-600', 'bg-orange-600'], // #FF8C00 (Dark Orange - In Transit)
  "OUT FOR RETURN": ['text-purple-600', 'bg-purple-600'], // #8A2BE2 (Blue Violet - Out for Return)
  "SCANNED OUT FOR RETURN": ['text-purple-500', 'bg-purple-500'], // #9932CC (Dark Orchid - Scanned for Return)
  "AT STORE": ['text-green-700', 'bg-green-700'], // #228B22 (Forest Green - Available at Store)
  "DELIVERED": ['text-green-600', 'bg-green-600'], // #008000 (Green - Delivered Successfully)
  "INACTIVE": ['text-gray-700', 'bg-gray-700'], // #A9A9A9 (Dark Gray - Inactive)
  "DAMAGED": ['text-red-600', 'bg-red-600'], // #DC143C (Crimson - Damaged - Critical)
  "DECOMMISSIONED": ['text-red-700', 'bg-red-700'], // #B22222 (Firebrick - Permanently Removed)
  get: (status: string) => (statusColors as any)[status] || ['text-gray-400', 'bg-gray-400'],
};

export const ListColumns = [

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

  columnHelper.accessor('watercan.qr_url', {
    id: 'name',
    header: 'name',
    // enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.watercan.qr_url}
        name={row.original.watercan.id.toString()}
      />
    ),
  }),
  columnHelper.accessor('store.name', {
    id: 'store.name',
    header: 'Store',
    cell: ({ row }) => <AvatarCard
      src={row.original.store?.name}
      name={row.original.store?.name}
      description={row.original.store?.code}
    />,
  }),

  columnHelper.accessor('status', {
    id: 'status',
    header: 'Status',
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
    header: 'Scanned At',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),
  // columnHelper.display({
  //   id: 'actions',
  //   size: 120,
  //   cell: ({
  //     row,
  //     table: {
  //       options: { meta },
  //     },
  //   }) => <></>
  //   (
  //   <TableRowActionGroup
  //     deletePopoverTitle="Delete the shipment"
  //     onDelete={() => {
  //       meta?.handleDeleteRow?.(row.original);
  //     }}
  //     Edit={() => {
  //       return <ModalIconButton
  //         icon={
  //           <PencilIcon className="size-4" />
  //         }
  //         view={<GlobalSchemaForm onSubmitCb={useWaterCanStore.getState().add} schema={injectDefaults(waterCanUpdateSchema, row.original).label("Edit").meta({ button: "Update" })} />}
  //         customSize="600px"
  //         className="mt-0"
  //         onClickCustom={() => {
  //           useWaterCanStore
  //             .getState().select(row.original._id)
  //         }}
  //       />
  //     }}
  //     deletePopoverDescription={`Are you sure you want to delete this #${row.original.id} ?`}
  //     hideDelete={true}
  //   />
  // ),
  // }),
];
