import { number, object, string } from "yup";

export const createExampleSchema = object().shape({
    name: string().label("Name").required(),
    age: number().label("Age").required(),
}).label("Add").meta({ button: "Create" })