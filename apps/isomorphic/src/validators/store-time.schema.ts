import usePlantStore from '@/store/plant/plant/plant.service';
import { number, object, SchemaDescription, string } from 'yup'


export const storeTimeSchema = object().shape({
    from: number().label("From").meta({
        type: "time",
    }).default(null),
    to: number().label("To").meta({
        type: "time",
    }).default(null),
}).label("Store Time Slots").meta({ button: "Add" })