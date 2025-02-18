import PageHeader from '@/app/shared/page-header';
import ModalButton from '@/app/shared/modal-button';
import RolesGrid from '@/app/shared/roles-permissions-warehouse/roles-grid';
import UsersTable from '@/app/shared/roles-permissions-warehouse/users-table';
import CreateRole from '@/app/shared/roles-permissions-warehouse/create-role';

const pageHeader = {
  title: 'Roles and Permissions ',
  breadcrumb: [
    {
      href: '/warehouse/list',
      name: 'Warehouse',
    },
    {
      name: 'Role Management & Permission',
    },
  ],
};

export default function BlankPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ModalButton label="Add New Role" view={<CreateRole />} />
      </PageHeader>
      <RolesGrid />
      <UsersTable />
    </>
  );
}
