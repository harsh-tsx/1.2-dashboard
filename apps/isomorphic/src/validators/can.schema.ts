import usePlantStore from "@/store/plant/plant/plant.service";
import { useEffect } from "react";
import { array, number, object, SchemaDescription, string } from "yup";

export const waterCanSchema = object().shape({
    plant: string().trim().label("Plant").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = usePlantStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
}).label("Add").meta({ button: "Create" })

export const waterCanUpdateSchema = object().shape({
    plant: string().trim().label("Plant").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true,
            onSearchChange: (search: string, field: SchemaDescription & {
                meta: any;
            }) => {
                usePlantStore.getState().get.paginate({ search: search })
            }
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = usePlantStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
    status: string().trim().label("Status").meta({
        type: "select", selectProps: {
            disableDefaultFilter: false
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            field.meta.oneOf = [{
                value: "DECOMMISSIONED",
                label: "DECOMMISSIONED"
            }]
        }
    }).default(null),
}).label("Update").meta({
    button: "Update", InitState: () => {
        const cityStore = usePlantStore();
        useEffect(() => {
            cityStore.get.paginate({})
        }, [])
    },
} as any)