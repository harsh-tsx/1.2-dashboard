import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import useDriverStore from "@/store/plant/driver/driver.service";
import usePlantStore from "@/store/plant/plant/plant.service";
import { useEffect } from "react";
import { array, number, object, SchemaDescription, string } from "yup";

export const deliveryVehicleSchema = object().shape({
    name: string().label("Name").required(),
    type: string().label("Vehicle Type").meta({
        type: "select", selectProps: {
            // disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            field.meta.oneOf = [{
                value: "TRUCK",
                label: "TRUCK",
            },
            {
                value: "VAN",
                label: "VAN",
            },
            {
                value: "TANKER",
                label: "TANKER",
            },
            ]
            return;
        }
    }).default(null),
    capacity_ltr: number().label("Capacity in ltr").required(),
    capacity_cans: number().label("Can Capacity").required(),
    driver: string().label("Driver").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true,
            onSearchChange: (search: string, field: SchemaDescription & {
                meta: any;
            }) => {
                useDriverStore.getState().get.paginate({ search: search })
            }
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = useDriverStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),

}).label("Add").meta({
    button: "Create",
    InitState: () => {
        const store = useDriverStore();
        useEffect(() => {
            store.get.paginate({})
        }, [])
    },
} as any)