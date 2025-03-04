import useStoreStore from "@/store/plant/store/store.service";
import { array, date, number, object, SchemaDescription, string } from "yup";
import moment from 'moment'
import useCityStore from "@/store/plant/city/city.service";
import { useEffect } from "react";

export const sectorSchema = object().shape({
    city: string().label("City").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true,
            onSearchChange: (search: string, field: SchemaDescription & {
                meta: any;
            }) => {
                useCityStore.getState().get.paginate({ search: search })
            }
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = useCityStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
    name: string().label("Name").required(),
}).label("Add").meta({
    button: "Create",
    InitState: () => {
        const cityStore = useCityStore();
        useEffect(() => {
            cityStore.get.paginate({})
        }, [])
    },
})