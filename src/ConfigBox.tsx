import { FC } from 'react';
import FormRender, { useForm } from 'form-render';
import { schemaTemplate } from './schema';

interface ConfigBoxProps {}
export const ConfigBox: FC<ConfigBoxProps> = () => {
    const form = useForm();
    return <FormRender schema={schemaTemplate} form={form} onChange={(e) => {
        console.log(e)
    }}/>
}
