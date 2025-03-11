"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import usePlantStore from '@/store/plant/warehouse/warehouse.service'
import { warehouseSchema } from '@/validators/warehouse.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = usePlantStore();

    return (
        <ModalButton
            label="Create Warehouse"
            view={<GlobalSchemaForm<InferType<typeof warehouseSchema>> schema={warehouseSchema} onSubmitCb={async (data) => {
                (data as any).coordinate = { lat: data.lat, long: data.long }

                delete (data as any).lat;
                delete (data as any).long;

                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton