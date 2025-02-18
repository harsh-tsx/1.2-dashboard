'use client';

import { useState } from 'react';
import { PiCheckBold, PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { permissions, permisssionsList, roles } from '@/app/shared/roles-permissions/utils';
import { useModal } from '@/app/shared/modal-views/use-modal';
import {
  ActionIcon,
  AdvancedCheckbox,
  Title,
  Button,
  CheckboxGroup,
} from 'rizzui';
import { PERMISSIONS } from '@/data/users-data';
import { Form } from '@core/ui/form';
import {
  RolePermissionInput,
  rolePermissionSchema,
} from '@/validators/edit-role.schema';
import useRoleStore, { Permission, WarehouseRole } from '@/store/plant/roles-warehouse/roles-warehouse.service';
import useModuleStore from '@/store/plant/modules/module.service';

export default function EditRole({ role }: { role?: WarehouseRole }) {
  const moduleStore = useModuleStore();
  const roleStore = useRoleStore()
  const { closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);
  const [permission, setPermission] = useState<Permission>({})

  const onSubmit: SubmitHandler<RolePermissionInput> = async (data) => {
    // set timeout ony required to display loading state of the create category button
    setLoading(true);
    for (let key in data.permissions) {
      if (data.permissions?.[key]?.ability?.length) {
        data.permissions[key].ability = data.permissions[key].ability.map(Number)
      }
    }

    const request = await roleStore.add({ ...data, order: role?.order as any })

    setLoading(false);
    closeModal();
  };

  return (
    <Form<RolePermissionInput>
      onSubmit={onSubmit}
      validationSchema={rolePermissionSchema}
      useFormProps={{
        defaultValues: {
          permissions: () => {
            for (let key in role?.permissions) {
              // @ts-ignore
              if (role.permissions?.[key]?.ability?.length) {
                // @ts-ignore
                role.permissions[key].ability = role.permissions[key].ability.map(String)
              }
            }
            return role?.permissions || {}
          },
          color: role?.color,
          name: role?.name,
          super_admin: role?.super_admin || false,
        },
      }}
      className="grid grid-cols-1 gap-6 p-6 @container [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
    >
      {({ register, control, watch, formState: { errors }, setValue }) => {
        return (
          <>
            <div className="col-span-full flex items-center justify-between">
              <Title as="h4" className="font-semibold">
                Edit Role - {role?.name}
              </Title>
              <ActionIcon size="sm" variant="text" onClick={closeModal}>
                <PiXBold className="h-auto w-5" />
              </ActionIcon>
            </div>

            <div className="grid gap-4 divide-y divide-y-reverse divide-gray-200">
              <Title as="h5" className="mb-2 text-base font-semibold">
                Role Access
              </Title>

              <Controller
                // @ts-ignore
                name={'permissions'}
                control={control}
                render={({ field: { value } }) => {
                  return (
                    <>
                      {
                        moduleStore.module.list?.length ? moduleStore.module.list.map(({ _id, name }) => {
                          let ability = value?.[_id]?.ability || []
                          return (
                            <div
                              key={_id}
                              className="flex flex-col gap-3 pb-4 md:flex-row md:items-center md:justify-between"
                            >
                              <Title
                                as="h6"
                                className="font-medium text-gray-700 2xl:text-sm"
                              >
                                {name}
                              </Title>
                              <CheckboxGroup
                                values={ability as any}
                                setValues={(_value) => {
                                  if (!value?.[_id]) {
                                    value[_id] = {
                                      ability: []
                                    } as any
                                  }

                                  ability = [..._value as any] as any

                                  value[_id].ability = ability;

                                  setValue("permissions", { ...value })


                                }}
                                className="grid grid-cols-3 gap-4 md:flex"
                              >
                                {permisssionsList.map(({ value, label }) => (
                                  <AdvancedCheckbox
                                    key={value}
                                    name={`${parent}.${value}`}
                                    value={value.toString()}
                                    inputClassName="[&:checked~span>.icon]:block"
                                    contentClassName="flex items-center justify-center"
                                  >
                                    <PiCheckBold className="icon me-1 hidden h-[14px] w-[14px] md:h-4 md:w-4" />
                                    <span className="font-medium">{label}</span>
                                  </AdvancedCheckbox>
                                ))}
                              </CheckboxGroup>


                            </div>
                          );
                        }) : <></>
                      }
                    </>
                  )
                }
                }
              />


            </div>

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
                Save
              </Button>
            </div>
          </>
        );
      }}
    </Form>
  );
}
