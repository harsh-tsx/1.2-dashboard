"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/delivery-vehicle/delivery-vehicle.service'
import { deliveryVehicleSchema } from '@/validators/delivery-vehicle.schema'
import { driverSchema } from '@/validators/driver.schema'
import { employeeSchema } from '@/validators/employee.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();

    return (
        <ModalButton
            label="Create Delivery Vehicle"
            view={<GlobalSchemaForm<InferType<typeof deliveryVehicleSchema>> schema={deliveryVehicleSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton