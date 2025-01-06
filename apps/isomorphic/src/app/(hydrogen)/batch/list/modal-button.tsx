"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/batch/batch.service'
import usePlantStore from '@/store/plant/plant/plant.service'
import { batchSchema } from '@/validators/batch.schema'
import React, { useEffect } from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();
    const plantStore = usePlantStore();
    useEffect(() => {
        plantStore.get.paginate({});
    }, [])
    return (
        <ModalButton
            label="Create Batch"
            view={<GlobalSchemaForm<InferType<typeof batchSchema>> schema={batchSchema} onSubmitCb={async (data) => {
                await store.add(data as any);
            }} />}
            customSize="600px"
            className="mt-0"
        />
    )
}

export default Modalbutton