import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import usePlantStore from "@/store/plant/plant/plant.service";
import { array, number, object, SchemaDescription, string } from "yup";

export const employeeSchema = object().shape({
    name: string().trim().label("Name").required(),
    password: string().trim().label("Password").required(),
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
    status: string().trim().label("Status").required().meta({
        type: "select",
        oneOf: [
            SelectItem("ACTIVE", "ACTIVE"),
            SelectItem("INACTIVE", "INACTIVE"),
        ]
    })
}).label("Add").meta({ button: "Create" })