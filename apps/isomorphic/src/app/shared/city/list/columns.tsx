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
import { forecastSchema } from '@/validators/forecast.schema';
import { sectorSchema } from '@/validators/sector.schema';
import useCityStore from '@/store/plant/city/city.service';
import { citySchema } from '@/validators/city.schema';

const columnHelper = createColumnHelper<ListTableDataType>();



export const ListColumns = [



  columnHelper.accessor('name', {
    id: 'watercans',
    size: 150,
    header: 'Can Count',
    cell: ({ row }) => row.original.name,
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
            view={<GlobalSchemaForm onSubmitCb={useCityStore.getState().add} schema={injectDefaults(citySchema, row.original).label("Edit").meta({ button: "Update" })} />}
            customSize="600px"
            className="mt-0"
            onClickCustom={() => {
              useCityStore
                .getState().select(row.original._id)
            }}
          />
        }}
        deletePopoverDescription={`Are you sure you want to delete this ${row.original.name}?`}
      />
    ),
  }),
];
