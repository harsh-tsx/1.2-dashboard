import useSectorStore from "@/store/plant/sector/sector.service";
import { useEffect } from "react";
import { array, number, object, SchemaDescription, string } from "yup";

export const storeSchema = object().shape({
    name: string().trim().label("Store Name").required(),
    address: string().trim().label("Store Address").required(),
    lat: number().label("Latitude").meta({ className: "w-full" }).required(),
    long: number().label("Longitude").meta({ className: "w-full" }).required(),
    // coordinate: object().shape({ lat: number(), long: number() }).label("Location").meta({
    //     type: 'select', oneOf: [
    //         {
    //             label: "Delhi",
    //             value: {
    //                 lat: 1,
    //                 long: 2
    //             }
    //         },
    //         {
    //             label: "Jaipur",
    //             value: {
    //                 lat: 1,
    //                 long: 1
    //             }
    //         }
    //     ] as any
    // }).default(null),
    sector: string().trim().label("Sector").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true,
            onSearchChange: (search: string, field: SchemaDescription & {
                meta: any;
            }) => {
                useSectorStore.getState().get.paginate({ search: search })
            }
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = useSectorStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: `${item?.name} (${item.city?.name})` }))
            return;
        }
    }).default(null),


}).label("Add").meta({
    button: "Create",
    InitState: () => {
        const sectorStore = useSectorStore();
        useEffect(() => {
            sectorStore.get.paginate({})
        }, [])
    },

} as any)