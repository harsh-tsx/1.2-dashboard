import usePlantStore from '@/store/plant/plant/plant.service';
import { object, SchemaDescription, string } from 'yup'


export const adminPlantRelationSchema = object().shape({
    plant: string().label("Plant/Warehouse").meta({
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