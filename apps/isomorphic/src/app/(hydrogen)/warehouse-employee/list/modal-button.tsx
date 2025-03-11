"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import usePlantStore from '@/store/plant/employee/warehouse-employee.service'
import { employeeSchema } from '@/validators/employee.schema'
import { warehouseEmployeeSchema } from '@/validators/warehouse-employee.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = usePlantStore();

    return (
        <ModalButton
            label="Create Employee"
            view={<GlobalSchemaForm<InferType<typeof warehouseEmployeeSchema>> schema={warehouseEmployeeSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton