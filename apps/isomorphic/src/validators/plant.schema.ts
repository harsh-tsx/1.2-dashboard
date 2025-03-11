import { array, number, object, string } from "yup";

export const plantSchema = object().shape({
    name: string().label("Plant Name").required(),
    address: string().label("Plant Address").required(),
    lat: number().label("Latitude").meta({ className: "w-full" }).required(),
    long: number().label("Longitude").meta({ className: "w-full" }).required(),
}).label("Add").meta({ button: "Create" })
