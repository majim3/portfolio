import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React from 'react';

function ContactScreen() {
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    };

    console.log("Form errors:", errors);

    return (
        <form 
            onSubmit={onSubmit} 
            action='https://formsubmit.co/f2729bf9f8a855538815e433d4cf5608' 
            method='POST'
        >
            <Row>
            <input 
                type="text" 
                placeholder="Name"  
                {...register("name", { 
                    required: true, 
                    maxLength: 100, 

                })} 
            />
            {errors.name && (
                <p className='text-primary'>
                    {errors.name.type === 'required' && 'This field is required'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                </p>
            )}
            
            <input 
                type="text" 
                placeholder="Email"
                {...register("email", { 
                    required: true, 
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,

                })} 
            />
            {errors.email && (
                <p className='text-primary'>
                    {errors.email.type === 'required' && 'This field is required'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
            )}
            
            <textarea
                type="text" 
                placeholder="Message"
                rows="4"
                cols="50"
                {...register("Message", { 
                    required: true, 
                   maxLength: 2000,
                 })} 
               
            />
             {errors.email && (
                <p className='text-primary'>
                    {errors.Message.type === 'required' && 'This field is required'}
                    {errors.Message.type === 'maxLenght' && 'Invalid email address.'}
                </p>
            )}
            
            <Button type="submit">Submit</Button>
            </Row>
        </form>
    );
}

export default ContactScreen;