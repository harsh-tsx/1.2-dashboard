import useStoreStore from "@/store/plant/store/store.service";
import { array, date, number, object, SchemaDescription, string } from "yup";
import moment from 'moment'

export const forecastSchema = object().shape({
    watercans: number().label("Can Count").required(),
    date: date().label("Date").default(moment().format('DD-MM-YYYY hh:mm A') as any).required(),
    store: string().trim().label("Store").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = useStoreStore.getState();
            field.meta.oneOf = store.store.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
}).label("Add").meta({ button: "Create" })