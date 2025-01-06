"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import usePlantStore from '@/store/plant/can/can.service'
import { waterCanSchema } from '@/validators/can.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = usePlantStore();

    return (
        <ModalButton
            label="Create Cans"
            view={<GlobalSchemaForm<InferType<typeof waterCanSchema>> schema={waterCanSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton