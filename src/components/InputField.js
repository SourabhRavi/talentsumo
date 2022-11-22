import React from 'react';
import { ErrorMessage, useField } from 'formik';

function InputField({ label, ...props }) {

    const [field, meta] = useField(props);
    console.log(field);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', color: 'red' }}>
            <input disabled={props.disabled} name={props.name} style={{ border: meta.touched && meta.error && '1px solid red' }} type="text" placeholder={label} className='input-item' {...field} {...props} autoComplete='off' />
            <ErrorMessage name={field.name} />
        </div>
    )
}

export default InputField;