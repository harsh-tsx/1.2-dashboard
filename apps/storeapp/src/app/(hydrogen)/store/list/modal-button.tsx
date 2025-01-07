"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import usestoreStore from '@/store/plant/store/store.service'
import { storeSchema } from '@/validators/store.schema'
import React from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = usestoreStore();

    return (
        <ModalButton
            label="Create Store"
            view={<GlobalSchemaForm<InferType<typeof storeSchema>> schema={storeSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton