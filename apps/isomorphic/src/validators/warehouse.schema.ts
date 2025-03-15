import { array, number, object, string } from "yup";

export const warehouseSchema = object().shape({
    name: string().trim().label("Warehouse Name").required(),
    address: string().trim().label("Warehouse Address").required(),
    lat: number().label("Latitude").meta({ className: "w-full" }).required(),
    long: number().label("Longitude").meta({ className: "w-full" }).required(),
}).label("Add").meta({ button: "Create" })