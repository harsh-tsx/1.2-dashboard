import { object } from "yup";

export function injectDefaults(schema: any, defaults: any): any {
    if (schema.fields) {
        const obj = object(
            Object.fromEntries(
                Object.entries(schema.fields).map(([key, field]: any) => {
                    const value = defaults[key];
                    // if (field.type === 'object' && typeof value === 'object') {
                    //     console.log("🚀 ~ Object.entries ~ field:", field)
                    //     return [key, injectDefaults(field, value)];
                    // }
                    return [key, field.default(value)];
                })
            )
        )
        return obj;
    }
    return schema;
}

export function injectMeta(schema: any, meta: any): any {
    if (schema.fields) {
        return object(
            Object.fromEntries(
                Object.entries(schema.fields).map(([key, field]: any) => {
                    const value = meta[key];
                    if (field.type === 'object' && typeof value === 'object') {
                        return [key, injectMeta(field, value)];
                    }
                    return [key, field.meta(value)];
                })
            )
        );
    }
    return schema;
}
