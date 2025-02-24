"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/city/city.service'
import { citySchema } from '@/validators/city.schema'
import React, { useEffect } from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();

    return (
        <>
            <ModalButton
                label="Create City"
                view={<GlobalSchemaForm<InferType<typeof citySchema>> schema={citySchema} onSubmitCb={async (data) => {
                    await store.add(data as any);
                }} />}
                customSize="600px"
                className="mt-0"
            />


        </>
    )
}

export default Modalbutton