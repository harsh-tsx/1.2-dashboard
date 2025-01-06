'use client';

import { useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { Form } from '@core/ui/form';
import { Input, Button, ActionIcon, Title, Select } from 'rizzui';
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
import useAdminStore, { Admin } from '@/store/plant/admins/admins.service';
export default function CreateUser({ admin }: { admin?: Admin }) {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);
  const adminStore = useAdminStore();
  const roleStore = useRoleStore();
  const roleList = (roleStore?.role?.list || []).map(({ _id, name }) => ({ value: _id, label: name }))

  const onSubmit: SubmitHandler<CreateUserInput> = async (data) => {
    // set timeout ony required to display loading state of the create category button
    const formattedData = {
      ...data,
      createdAt: new Date(),
    };
    setLoading(true);
    const request = await adminStore.add({ ...data })
    setLoading(false);
    setReset({
      fullName: '',
      email: '',
      role: '',
      permissions: '',
      status: '',
    });
    closeModal();
  };

  return (
    <Form<CreateUserInput>
      resetValues={reset}
      onSubmit={onSubmit}
      validationSchema={createUserSchema}
      className="grid grid-cols-1 gap-6 p-6 @container md:grid-cols-2 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
      useFormProps={{
        defaultValues: {
          email: admin?.email || "",
          name: admin?.name || "",
          password_unhashed: admin?.password_unhashed || "",
          phone: admin?.phone || "",
          role: admin?.role?._id || ""
        }
      }}
    >
      {({ register, control, watch, formState: { errors } }) => {
        return (
          <>
            <div className="col-span-full flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                {
                  adminStore?.admin?.id ?
                    "Edit User"
                    :
                    "Add a new User"
                }
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>
            <Input
              label="Full Name"
              placeholder="Enter user's full name"
              {...register('name')}
              className="col-span-full"
              error={errors.name?.message}
            />


            <Input
              label="Phone"
              placeholder="Enter user's Phone"
              className="col-span-full"
              {...register('phone')}
              error={errors.phone?.message}
            />

            <Input
              label="Email"
              placeholder="Enter user's Email Address"
              className="col-span-full"
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              placeholder="Enter user's Password"
              className="col-span-full"
              {...register('password_unhashed')}
              error={errors.password_unhashed?.message}
            />

            <Controller
              name="role"
              control={control}
              render={({ field: { name, onChange, value } }) => (
                <Select
                  options={roleList}
                  value={value}
                  onChange={onChange}
                  name={name}
                  label="Role"
                  className="col-span-full"
                  error={errors?.role?.message}
                  getOptionValue={(option) => option.value}
                  displayValue={(selected: string) =>
                    roleList.find((option) => option.value === selected)?.label ??
                    selected
                  }
                  dropdownClassName="!z-[1]"
                  inPortal={false}
                />
              )}
            />



            <div className="col-span-full flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full @xl:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full @xl:w-auto"
              >
                {
                  adminStore?.admin?.id ?
                    "Update "
                    :
                    "Create "
                }
                User
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
