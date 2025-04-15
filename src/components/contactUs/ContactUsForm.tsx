'use client'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import AppInputField from '../custom/inpufield/inpufield';
import CTA from '../custom/CTA';

export default function ContactUsForm() {
    const {
        handleSubmit,
        control,
        // getValues,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleRegisterSubmit = async (formData: any) => {
        const credentials = {
            name: formData?.name,
            email: formData?.email,
            phone: formData?.phone,
            message: formData?.message,
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegisterSubmit)}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-6'>
                    {/* Name */}
                    <div className="flex flex-col ">
                        <Controller
                            name='name'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <>
                                    <AppInputField
                                        label="Name*"
                                        type="text"
                                        className="w-full lg:mt-2"
                                        error={!!errors.name}
                                        errorMessage={errors.name?.message}
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...field}
                                    />

                                </>

                            )}
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col ">
                        <Controller
                            name='phone'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Phone is required" }}
                            render={({ field }) => (
                                <>
                                    <AppInputField
                                        label="Phone*"
                                        type="text"
                                        className="w-full lg:mt-2"
                                        error={!!errors.phone}
                                        errorMessage={errors.phone?.message}
                                        aria-invalid={errors.phone ? "true" : "false"}
                                        {...field}
                                    />

                                </>

                            )}
                        />
                    </div>


                </div>

                <div className='grid grid-cols-1'>

                    {/* Email */}
                    <div className="flex flex-col">
                        <Controller
                            name='email'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Email is required" }}
                            render={({ field }) => (
                                <AppInputField
                                    label="Email*"
                                    type="text"
                                    className="w-full lg:mt-2"
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    aria-label={errors?.email ? "Email error" : ""}
                                    {...field}
                                />

                            )}
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col ">
                        <Controller
                            name='message'
                            control={control}
                            defaultValue=""
                            rules={{ required: "Message is required" }}
                            render={({ field }) => (
                                <>
                                    <AppInputField
                                        label="Message*"
                                        type="textarea"
                                        className="w-full lg:mt-2"
                                        error={!!errors.message}
                                        errorMessage={errors.message?.message}
                                        aria-invalid={errors.message ? "true" : "false"}
                                        {...field}
                                    />

                                </>

                            )}
                        />
                    </div>
                </div>

                <div className='w-full lg:flex lg:justify-end mt-2'>
                    <CTA
                        btn
                        text="Submit"
                        bgColor="bg-transparent hover:bg-primary"
                        txtColor="text-indigo-500 hover:text-white"
                        border="border border-indigo-500 hover:border-white"
                        width="w-full lg:w-max"
                    />
                </div>


            </form >
        </>
    )
}
