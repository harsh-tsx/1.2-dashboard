"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import usePlantStore from '@/store/plant/plant/plant.service'
import { plantSchema } from '@/validators/plant.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = usePlantStore();

    return (
        <ModalButton
            label="Create Plant"
            view={<GlobalSchemaForm<InferType<typeof plantSchema>> schema={plantSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton