'use client';

import { useEffect, useState } from 'react';
import { PiXBold } from 'react-icons/pi';
import { Controller, SubmitHandler } from 'react-hook-form';
import { YupForm } from '@core/ui/form-yup';
import { Input, Button, ActionIcon, Title, Select } from 'rizzui';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { ObjectSchema, SchemaDescription, AnyObject } from 'yup';
import { DatePicker } from '@core/ui/datepicker';
import moment from 'moment'

export const SelectItem = (label: string, value: any) => ({ label, value })

export default function GlobalSchemaForm<T>({ schema, onSubmitCb }: { schema: ObjectSchema<AnyObject>, onSubmitCb: (data: T) => Promise<void> }) {
    const describeSchema = schema.describe();
    const fields = Object.keys(describeSchema.fields);
    const defaultValues = schema.getDefault();
    console.log("🚀 ~ defaultValues:", defaultValues)

    const { closeModal } = useModal();
    const [isLoading, setLoading] = useState(false);


    const onSubmit: SubmitHandler<any> = async (data, event) => {
        // set timeout ony required to display loading state of the create category button
        console.log(data)
        const formattedData = {
            ...data,
            createdAt: new Date(),
        };
        setLoading(true);
        await onSubmitCb(data);
        setLoading(false);
        closeModal();
    };

    useEffect(() => {
        describeSchema.meta?.initState?.()
    }, [])

    return (
        <YupForm
            onSubmit={onSubmit}
            validationSchema={schema}
            className="grid grid-cols-1 gap-6 p-6 @container md:grid-cols-2 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900"
            useFormProps={{
                defaultValues: defaultValues
            }}
        >
            {({ register, control, watch, formState: { errors }, getFieldState, }) => {
                console.log("🚀 ~ errors:", errors)
                // console.log("createUserSchema.describe: ", sampleSchema.)
                return (
                    <>
                        {

                        }
                        <div className="col-span-full flex items-center justify-between">
                            <Title as="h4" className="font-semibold">
                                {
                                    describeSchema?.label || ""
                                }
                            </Title>
                            <ActionIcon size="sm" variant="text" onClick={closeModal}>
                                <PiXBold className="h-auto w-5" />
                            </ActionIcon>
                        </div>
                        {
                            fields.map((fieldName) => {
                                const field = describeSchema.fields[fieldName] as SchemaDescription & { meta: any };
                                field?.meta?.cb?.(field);
                                const label = field.label
                                const type = field?.meta?.type || inputType[field.type];
                                console.log("type: ", type)
                                const oneOf = field?.meta?.oneOf || field?.oneOf || [];
                                if (type == "text") {
                                    return (

                                        <Input
                                            key={fieldName}
                                            label={label}
                                            {...register(fieldName as any)}
                                            className="col-span-full"
                                            error={(errors as any)?.[fieldName]?.message}
                                        />
                                    )
                                }

                                if (type == "number") {
                                    return (

                                        <Input
                                            key={fieldName}
                                            label={label}
                                            type='number'
                                            {...register(fieldName as any)}
                                            className="col-span-full"
                                            error={(errors as any)?.[fieldName]?.message}
                                        />
                                    )
                                }

                                if (type == "select") {
                                    try {

                                        return (
                                            <Controller
                                                key={fieldName}
                                                name={fieldName as any}
                                                control={control}
                                                render={({ field: { name, onChange, value } }) => {
                                                    console.log("select value: ", value)
                                                    return (<Select
                                                        options={oneOf as any[]}
                                                        value={value}
                                                        onChange={(...e) => {

                                                            onChange(e[0])
                                                        }}
                                                        name={name}
                                                        label={label}
                                                        searchable
                                                        searchType='text'
                                                        disableDefaultFilter={field?.meta?.disableDefaultFilter || false}
                                                        className="col-span-full"
                                                        error={(errors as any)?.[fieldName]?.message}
                                                        getOptionValue={(option) => option?.value}
                                                        displayValue={(selected: string) => {
                                                            return (oneOf.find((option: any) => {
                                                                if (typeof option.value == "object") {
                                                                    return Object.keys(option.value).every(
                                                                        key => selected.hasOwnProperty(key) && (selected as any)[key] === option.value[key]
                                                                    )

                                                                }
                                                                return option.value === selected
                                                            }) as any)?.label || selected
                                                        }
                                                        }
                                                        dropdownClassName="!z-[1]"
                                                        inPortal={false}
                                                        multiple={false}
                                                    />
                                                    )
                                                }}
                                            />
                                        )
                                    } catch (error) {
                                        console.log(error)

                                    }
                                }

                                if (type == "date") {
                                    return <Controller
                                        key={fieldName}
                                        name={fieldName as any}
                                        control={control}
                                        render={({ field: { name, onChange, value } }) => {
                                            console.log("select value: ", value)
                                            return <div className='col-span-full' >
                                                <DatePicker
                                                    showTimeInput
                                                    title={label}
                                                    placeholderText={label}
                                                    value={moment(value).format("DD-MM-YYYY hh:mm A")}
                                                    onChange={onChange}
                                                    dateFormat={moment(value).creationData().format?.toString() || ""}
                                                />
                                            </div>
                                        }}
                                    />

                                }


                            })
                        }








                        <div className="col-span-full flex items-center justify-end gap-4">
                            <Button
                                variant="outline"
                                onClick={closeModal}
                                className="w-full @xl:w-auto"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                isLoading={isLoading}
                                className="w-full @xl:w-auto"
                            >
                                {

                                    describeSchema?.meta?.button || "Create"
                                }
                            </Button>
                        </div>
                    </>
                );
            }}
        </YupForm>
    );
}


export const inputType: Record<string, string> = {
    string: 'text',
    email: 'text',
    number: 'number',
    date: 'date',
    'datetime-local': 'datetime-local'
}
