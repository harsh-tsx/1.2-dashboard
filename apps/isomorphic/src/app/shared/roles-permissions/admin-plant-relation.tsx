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
import useAdminStore, { AdminWarehouseRelation as AdminPlantRelationData } from '@/store/plant/admin-plant-relation/admin-plant-relation.service';
import GlobalSchemaForm from '../common/GlobalSchemaForm';
import { adminWarehouseRelationSchema } from '@/validators/admin-warehouse-relation.schema';
import { Admin } from '@/store/plant/admins/admins.service';
import useWarehouseRelationStore from '@/store/plant/admin-plant-relation/admin-plant-relation.service';
import usePlantStore from '@/store/plant/plant/plant.service';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { ListColumns } from './admin-plant-relation-columns';
import { adminPlantRelationSchema } from '@/validators/admin-plant-relation.schema copy';
import TablePagination from '@core/components/table/pagination';

export type ListTableDataType = AdminPlantRelationData;


export default function AdminPlantRelation({ admin }: { admin?: Admin }) {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);
  const store = useWarehouseRelationStore();
  const plantStore = usePlantStore();

  const { table, setData } = useTanStackTable<ListTableDataType>({
    tableData: store.example.list,
    columnConfig: ListColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      manualPagination: true,

      pageCount: store.example.pages,
      meta: {
        handleDeleteRow: async (row) => {
          store.select(row._id)
          await store.delete();
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
      admin: admin?._id,
    };
    setLoading(true);
    const request = await store.add({ ...formattedData })
    setLoading(false);
    closeModal();
  };

  useEffect(() => {
    store.get.paginate({ admin: admin?._id as any });
    plantStore.get.paginate({});
  }, []);

  useEffect(() => {
    setData(store.example.list);
  }, [store.example.list])

  return (
    <>
      <Box  >
        <GlobalSchemaForm schema={adminPlantRelationSchema} onSubmitCb={onSubmit} closeOnSubmit={false} />
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
