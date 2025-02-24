"use client"
import GlobalSchemaForm from '@/app/shared/common/GlobalSchemaForm'
import ModalButton from '@/app/shared/modal-button'
import useStore from '@/store/plant/sector/sector.service'
import useStoreStore from '@/store/plant/store/store.service'
import { forecastSchema } from '@/validators/forecast.schema'
import { sectorSchema } from '@/validators/sector.schema'
import React, { useEffect } from 'react'
import { InferType } from 'yup'

type Props = {}

const Modalbutton = (props: Props) => {
    const store = useStore();
    const storeStore = useStoreStore();

    useEffect(() => {
        storeStore.get.paginate({})
    }, []);


    return (
        <>
            <ModalButton
                label="Create Sector"
                view={<GlobalSchemaForm<InferType<typeof sectorSchema>> schema={sectorSchema} onSubmitCb={async (data) => {
                    await store.add(data as any);
                }} />}
                customSize="600px"
                className="mt-0"
            />


        </>
    )
}

export default Modalbutton