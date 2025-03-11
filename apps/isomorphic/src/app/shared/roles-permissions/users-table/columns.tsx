'use client';

import AvatarCard from '@core/ui/avatar-card';
import DateCell from '@core/ui/date-cell';
import { createColumnHelper } from '@tanstack/react-table';
import { ActionIcon, Badge, Checkbox, Flex, Text, Tooltip } from 'rizzui';
import { UsersTableDataType } from '.';
import { getStatusBadge } from '@core/components/table-utils/get-status-badge';
import TableRowActionGroup from '@core/components/table-utils/table-row-action-group';
import { getRandomArrayElement } from '@core/utils/get-random-array-element';
import { avatarIds } from '@core/utils/get-avatar';
import cn from '@core/utils/class-names';
import DeletePopover from '@core/components/delete-popover';
import EyeIcon from '@core/components/icons/eye';
import PencilIcon from '@core/components/icons/pencil';
import ModalButton from '../../modal-button';
import CreateUser from '../create-user';
import ModalIconButton from '../../modal-icon-button';
import useAdminStore from '@/store/plant/admins/admins.service';
import AdminPlantRelation from '../admin-plant-relation';

const columnHelper = createColumnHelper<UsersTableDataType>();

export const usersColumns = [
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
  columnHelper.display({
    id: 'id',
    size: 100,
    header: 'User ID',
    cell: ({ row }) => <>#{row.original._id?.substring(0, 5)}</>,
  }),
  columnHelper.accessor('name', {
    id: 'fullName',
    size: 200,
    header: 'Name',
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={`https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
          avatarIds
        )}.webp`}
        name={row.original.name}
        description={row.original.phone}
      />
    ),
  }),
  columnHelper.accessor('role.name', {
    id: 'role',
    size: 150,
    header: 'Role',
    cell: ({ row }) => row.original.role?.name,
  }),
  columnHelper.accessor('plants', {
    id: 'plants',
    size: 50,
    header: 'Plants',
    cell: ({ row }) => {
      return (
        <Flex
          align="center"
          justify="center"
        // className={cn("pe-3")}
        >
          <Text>
            {row.original.plants || 0}
          </Text>
          <Tooltip
            size="sm"
            content="Edit Item"
            placement="top"
            color="invert"
          >
            <ModalIconButton
              // label="Add New User"
              icon={
                <PencilIcon className="size-4" />
              }
              view={<AdminPlantRelation admin={row.original} />}
              customSize="600px"
              className="mt-0"
              onClickCustom={() => {
                useAdminStore.getState().select(row.original._id)
              }}

            />
          </Tooltip>

        </Flex>
      )
    },
  }),
  columnHelper.accessor('createdAt', {
    id: 'createdAt',
    size: 200,
    header: 'Created',
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />,
  }),

  // // columnHelper.accessor('status', {
  // //   id: 'status',
  // //   size: 150,
  // //   header: 'Status',
  // //   enableSorting: false,
  // //   cell: ({ row }) => getStatusBadge(row.original.status),
  // // }),
  columnHelper.display({
    id: 'action',
    size: 140,
    cell: ({
      row,
      table: {
        options: { meta },
      },
    }) => (

      <Flex
        align="center"
        justify="end"
        gap="3"
        className={cn("pe-3")}
      >
        <Tooltip
          size="sm"
          content="Edit Item"
          placement="top"
          color="invert"
        >
          <ModalIconButton
            // label="Add New User"
            icon={
              <PencilIcon className="size-4" />
            }
            view={<CreateUser admin={row.original} />}
            customSize="600px"
            className="mt-0"
            onClickCustom={() => {
              useAdminStore.getState().select(row.original._id)
            }}
          />
        </Tooltip>
        {/* <Tooltip
          size="sm"
          content="View Item"
          placement="top"
          color="invert"
        >
          <ActionIcon
            as="span"
            size="sm"
            variant="outline"
            aria-label="View item"
          >
            <EyeIcon className="size-4" />
          </ActionIcon>
        </Tooltip> */}
        <DeletePopover
          title={`Delete this user`}
          description={`Are you sure you want to delete this ${row.original.name}?`}
          onDelete={() => meta?.handleDeleteRow?.(row.original)}
        />
      </Flex>


    ),
  }),
];
