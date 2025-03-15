import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import usePlantStore from "@/store/plant/plant/plant.service";
import { array, number, object, SchemaDescription, string } from "yup";

export const driverSchema = object().shape({
    name: string().trim().label("Name").required(),
    phone: string().trim().label("Phone").required(),
    employment_type: string().trim().label("Employment Type").meta({
        type: "select", selectProps: {
            // disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            field.meta.oneOf = [{
                value: "salaried",
                label: "salaried",

            }, {
                value: "rented",
                label: "rented",

            }]
            return;
        }
    }).default(null),
    status: string().trim().trim().label("Status").required().meta({
        type: "select",
        oneOf: [
            SelectItem("ACTIVE", "ACTIVE"),
            SelectItem("INACTIVE", "INACTIVE"),
        ]
    })
}).label("Add").meta({ button: "Create" })