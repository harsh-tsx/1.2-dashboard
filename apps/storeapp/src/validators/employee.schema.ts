import { SelectItem } from "@/app/shared/common/GlobalSchemaForm";
import usePlantStore from "@/store/plant/store/store.service";
import { array, number, object, SchemaDescription, string } from "yup";

export const employeeSchema = object().shape({
    name: string().label("Name").required(),
    password: string().label("Password").required(),
    store: string().label("Store").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = usePlantStore.getState();
            field.meta.oneOf = store.store.list.map((item) => ({ value: item._id, label: item?.name }))
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