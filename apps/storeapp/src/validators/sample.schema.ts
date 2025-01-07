import { object, string } from 'yup'


export const sampleSchema = object().shape({
    name: string().label("Name").required()
})