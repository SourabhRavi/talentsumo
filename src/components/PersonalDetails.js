import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import * as Yup from 'yup';

function PersonalDetails() {

    const [edit, setEdit] = useState(null);

    useEffect(() => {
        setEdit(true);
    }, []);

    let handleEdit = () => {
        console.log(edit);
        setEdit(!edit)
    }


    const validate = Yup.object({
        phone: Yup.string().required('This field is required'),
        email: Yup.string().required('This field is required'),
        company: Yup.string().required('This field is required'),
        country: Yup.string().required('This field is required'),
        linkedin: Yup.string().required('This field is required'),
        facebook: Yup.string().required('This field is required'),
        twitter: Yup.string().required('This field is required'),
        instagram: Yup.string().required('This field is required')
    })

    return (
        <>
            <div className="content-wrap">

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        company: '',
                        country: '',
                        linkedin: '',
                        facebook: '',
                        twitter: '',
                        instagram: ''
                    }} validationSchema={validate} onSubmit={values => {
                        console.clear();
                        console.log(values);
                    }}
                >
                    {formik => (
                        <Form>
                            <div className="header-wrap">
                                <h2 className="heading">Personal Details:</h2>
                                <div className="button-wrap" style={{ textAlign: 'right' }}>
                                    <button className='black-btn' onClick={handleEdit} style={{ background: edit ? '#212529' : '#6C757D' }} type='button'>Edit</button>
                                    {edit ? <p style={{ color: 'red' }}>Click to update details*</p> : null}
                                </div>
                            </div>
                            <div className="inputs-wrap details">
                                <InputField name="firstName" type="text" label="First Name" variant="outlined" disabled={edit} />
                                <InputField name="lastName" type="text" label="Last Name" variant="outlined" disabled={edit} />

                                <InputField name="email" type="text" label='Email Address' className='input-item' disabled={edit} />
                                <InputField name="phone" type="text" label='Phone Number' className='input-item' disabled={edit} />
                                <InputField name="company" type="text" label='Company Name' className='input-item' disabled={edit} />
                                <InputField name="country" type="text" label='Select Country' className='input-item' disabled={edit} />
                            </div>
                            <h2 style={{ marginBottom: '15px' }}>Social Links:</h2>
                            <div className="inputs-wrap socials">
                                <InputField name="linkedin" type="text" label='LinkedIn' className='input-item' disabled={edit} />
                                <InputField name="facebook" type="text" label='Facebook' className='input-item' disabled={edit} />
                                <InputField name="twitter" type="text" label='Twitter' className='input-item' disabled={edit} />
                                <InputField name="instagram" type="text" label='Instagram' className='input-item' disabled={edit} />
                            </div>

                            <button className='black-btn' type="submit">Submit Details</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default PersonalDetails