import usePlantStore from "@/store/plant/plant/plant.service";
import { array, number, object, SchemaDescription, string } from "yup";

export const batchSchema = object().shape({
    watercans: number().label("Can Count"),
    // status: string().label("").optional(),
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
}).label("Add").meta({
    button: "Create", initState: async () => {
    }
})