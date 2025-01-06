import { array, number, object, string } from "yup";

export const storeSchema = object().shape({
    name: string().label("Store Name").required(),
    address: string().label("Store Address").required(),
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
    // coordinate2: object().shape({ lat: number(), long: number() }).oneOf([
    //     {
    //         label: "Delhi",
    //         value: 1
    //     },
    //     {
    //         label: "Jaipur",
    //         value: 2
    //     }
    // ] as any).label("Location").meta({ type: 'select' }).default(null),
}).label("Add").meta({ button: "Create" })