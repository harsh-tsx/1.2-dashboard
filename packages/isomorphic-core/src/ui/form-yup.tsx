import type { Schema, ObjectShape, ObjectSchema } from 'yup';
import { useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: any;
  fieldErrors?: any[] | null;
  formError?: string | string[] | null | any;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
};

export const YupForm = <
  TFormValues extends Record<string, any> = Record<string, any>,
>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  fieldErrors,
  formError,
  resetValues,
  className,
  ...formProps
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...useFormProps,
    ...(validationSchema && { resolver: yupResolver(validationSchema) }),
  });

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues);
    }
  }, [resetValues, methods]);

  return (
    <form
      noValidate
      onSubmit={methods.handleSubmit(onSubmit)}
      {...formProps}
      className={className}
    >
      {children(methods)}
    </form>
  );
};
