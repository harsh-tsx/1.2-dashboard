import useStoreStore from "@/store/plant/store/store.service";
import { array, date, number, object, SchemaDescription, string } from "yup";
import moment from 'moment'

export const citySchema = object().shape({
    name: string().trim().label("Name").required(),
}).label("Add").meta({ button: "Create" })