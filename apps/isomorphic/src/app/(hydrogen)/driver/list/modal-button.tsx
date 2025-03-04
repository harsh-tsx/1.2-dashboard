"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/driver/driver.service'
import { driverSchema } from '@/validators/driver.schema'
import { employeeSchema } from '@/validators/employee.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();

    return (
        <ModalButton
            label="Create Driver"
            view={<GlobalSchemaForm<InferType<typeof driverSchema>> schema={driverSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton