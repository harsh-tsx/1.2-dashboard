"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/warehouse-inventory-request/warehouse-inventory-request.service'
import { warhouseInventoryRequestSchema } from '@/validators/warehouse-inventory-request.schema'
import React, { useEffect } from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();


    return (
        <ModalButton
            label="Request WaterCans"
            view={<GlobalSchemaForm<InferType<typeof warhouseInventoryRequestSchema>> schema={warhouseInventoryRequestSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton