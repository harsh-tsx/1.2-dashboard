import { array, number, object, string } from "yup";

export const warehouseSchema = object().shape({
    name: string().label("Warehouse Name").required(),
    address: string().label("Warehouse Address").required(),
    coordinate: object().shape({ lat: number(), long: number() }).label("Location").meta({
        type: 'select', oneOf: [
            {
                label: "Delhi",
                value: {
                    lat: 1,
                    long: 2
                }
            },
            {
                label: "Jaipur",
                value: {
                    lat: 1,
                    long: 1
                }
            }
        ] as any
    }).default(null),
}).label("Add").meta({ button: "Create" })