import useStoreStore from "@/store/plant/store/store.service";
import { array, date, number, object, SchemaDescription, string } from "yup";
import moment from 'moment'

export const complaintSchema = object().shape({
    status: string().label("Status").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            field.meta.oneOf = [
                { value: "PENDING", label: "PENDING" },
                { value: "RESOLVED", label: "RESOLVED" },
            ]
            return;
        }
    }).default(null).required(),
    remark: string().label("Remark").required(),
}).label("Add").meta({ button: "Update" })