import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import useWarehouseStore from "@/store/plant/warehouse/warehouse.service";
import { useEffect } from "react";
import { array, number, object, SchemaDescription, string } from "yup";

export const warehouseEmployeeSchema = object().shape({
    name: string().trim().label("Name").required(),
    password: string().trim().label("Password").required(),
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
    status: string().trim().label("Status").required().meta({
        type: "select",
        oneOf: [
            SelectItem("ACTIVE", "ACTIVE"),
            SelectItem("INACTIVE", "INACTIVE"),
        ]
    })
}).label("Add").meta({
    button: "Create", InitState: () => {
        const store = useWarehouseStore();
        useEffect(() => {
            store.get.paginate({})
        }, [])
    }
})