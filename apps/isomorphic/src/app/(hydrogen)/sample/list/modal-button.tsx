"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useExampleStore from '@/store/plant/example/example.service'
import { createExampleSchema } from '@/validators/create-example'
import React from 'react'
import { InferType, number, object, string } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useExampleStore();

    return (
        <ModalButton
            label="Create Sample"
            view={<GlobalSchemaForm<InferType<typeof createExampleSchema>> schema={createExampleSchema} onSubmitCb={async (data) => {
                await store.add(data);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton