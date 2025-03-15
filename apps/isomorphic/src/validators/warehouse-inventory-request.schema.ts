import useStoreStore from "@/store/plant/store/store.service";
import { array, date, number, object, SchemaDescription, string } from "yup";
import moment from 'moment'
import useWarehouseStore from "@/store/plant/warehouse/warehouse.service";
import { useEffect } from "react";

export const warhouseInventoryRequestSchema = object().shape({
    watercans: number().label("Can Count").required(),
    date: date().label("Date").default(moment().format('DD-MM-YYYY hh:mm A') as any).required(),
    warehouse: string().trim().label("Warehouse").meta({
        type: "select",
        selectProps: {
            disableDefaultFilter: true,
            onSearchChange: (search: string, field: SchemaDescription & {
                meta: any;
            }) => {
                useWarehouseStore.getState().get.paginate({ search: search })
            }
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = useWarehouseStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
}).label("Add").meta({
    button: "Create",
    InitState: () => {
        const store = useWarehouseStore();
        useEffect(() => {
            store.get.paginate({})
        }, [])
    }
})