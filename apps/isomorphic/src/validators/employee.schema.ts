import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import usePlantStore from "@/store/plant/plant/plant.service";
import { array, number, object, SchemaDescription, string } from "yup";

export const employeeSchema = object().shape({
    name: string().label("Name").required(),
    password: string().label("Password").required(),
    plant: string().label("Plant").meta({
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
    status: string().label("Status").required().meta({
        type: "select",
        oneOf: [
            SelectItem("ACTIVE", "ACTIVE"),
            SelectItem("INACTIVE", "INACTIVE"),
        ]
    })
}).label("Add").meta({ button: "Create" })