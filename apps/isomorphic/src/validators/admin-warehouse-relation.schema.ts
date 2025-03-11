import usePlantStore from '@/store/plant/warehouse/warehouse.service';
import { object, SchemaDescription, string } from 'yup'


export const adminWarehouseRelationSchema = object().shape({
    warehouse: string().label("Warehouse").meta({
        type: "select", selectProps: {
            disableDefaultFilter: true
        },
        cb: (field: SchemaDescription & {
            meta: any;
        }
        ) => {
            const store = usePlantStore.getState();
            field.meta.oneOf = store.example.list.map((item) => ({ value: item._id, label: item?.name }))
            return;
        }
    }).default(null),
})