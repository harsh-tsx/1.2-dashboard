"use client"
import RoleCard from '@/app/shared/roles-permissions/role-card';
import { rolesList } from '@/data/roles-permissions';
import useAdminStore from '@/store/plant/admins-warehouse/admins-warehouse.service';
import useModuleStore from '@/store/plant/modules/module.service';
import useRoleStore from '@/store/plant/roles-warehouse/roles-warehouse.service';
import cn from '@core/utils/class-names';
import { useEffect } from 'react';

interface RolesGridProps {
  className?: string;
  gridClassName?: string;
}

export default function RolesGrid({
  className,
  gridClassName,
}: RolesGridProps) {
  const store = useRoleStore();
  const moduleStore = useModuleStore();
  const adminStore = useAdminStore();

  useEffect(() => {
    store.get.paginate({})
    moduleStore.get.paginate({})
    adminStore.get.paginate({})
  }, [])

  const handleRoleEditClick = (id: string) => {
    store.select(id)
  }
  return (
    <div className={cn('@container', className)}>
      <div
        className={cn(
          'grid grid-cols-1 gap-6 @[36.65rem]:grid-cols-2 @[56rem]:grid-cols-3 @[78.5rem]:grid-cols-4 @[100rem]:grid-cols-5',
          gridClassName
        )}
      >
        {
          store.role.list.length ?
            store.role.list.map((role) => {
              return (
                <RoleCard key={role.name} role={role} onEditClick={handleRoleEditClick} />
              )
            })
            : <></>
        }
        {/* {rolesList.map((role) => (
          <RoleCard key={role.name} role={role} />
        ))} */}
      </div>
    </div>
  );
}
