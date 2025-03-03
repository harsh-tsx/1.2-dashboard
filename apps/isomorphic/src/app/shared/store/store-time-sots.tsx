'use client';

import { useEffect, useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@core/ui/form';
import { Input, Button, ActionIcon, Title, Select, Box } from 'rizzui';
import Table from '@core/components/table';
import {
  CreateUserInput,
  createUserSchema,
} from '@/validators/create-user.schema';
import { useModal } from '@/app/shared/modal-views/use-modal';
import {
  permissions,
  roles,
  statuses,
} from '@/app/shared/roles-permissions/utils';
import useRoleStore from '@/store/plant/roles/role.service';
import useAdminStore, { AdminPlantRelation as AdminPlantRelationData } from '@/store/plant/admin-plant-relation/admin-plant-relation.service';
import GlobalSchemaForm from '../common/GlobalSchemaForm';
import { adminWarehouseRelationSchema } from '@/validators/admin-warehouse-relation.schema';
import { Admin } from '@/store/plant/admins/admins.service';
import useAdminPlantRelationStore from '@/store/plant/admin-plant-relation/admin-plant-relation.service';
import usePlantStore from '@/store/plant/plant/plant.service';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { ListColumns } from './store-time-slots-columns';
import { adminPlantRelationSchema } from '@/validators/admin-plant-relation.schema copy';
import TablePagination from '@core/components/table/pagination';
import { Store } from '@/store/plant/store/store.service';
import useStoreTimeStore, { StoreTime } from '@/store/plant/store/store-time.service';
import { storeTimeSchema } from '@/validators/store-time.schema';

export type ListTableDataType = StoreTime;


export default function StoreTimeSlot({ store }: { store?: Store }) {
  const { closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);
  const relationStore = useStoreTimeStore();
  const plantStore = usePlantStore();

  const { table, setData } = useTanStackTable<ListTableDataType>({
    tableData: relationStore.example.list,
    columnConfig: ListColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      manualPagination: true,

      pageCount: relationStore.example.pages,
      meta: {
        handleDeleteRow: async (row) => {
          relationStore.select(row._id)
          await relationStore.delete();
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

  const onSubmit = async (data: any) => {
    // set timeout ony required to display loading state of the create category button
    const formattedData = {
      ...data,
      admin: store?._id,
    };
    setLoading(true);
    const request = await relationStore.add({ ...formattedData })
    setLoading(false);
    closeModal();
  };

  useEffect(() => {
    relationStore.get.paginate({ store: store?._id });
    plantStore.get.paginate({});
  }, []);

  useEffect(() => {
    setData(relationStore.example.list);
  }, [relationStore.example.list])

  return (
    <>
      <Box>
        <GlobalSchemaForm schema={storeTimeSchema} onSubmitCb={onSubmit} />
        <Table
          table={table}
          variant="modern"
          classNames={{
            container: 'border border-muted rounded-md',
            rowClassName: 'last:border-0',
          }}
        />
        <TablePagination table={table} className="py-4" />

      </Box>
    </>
  );
}
