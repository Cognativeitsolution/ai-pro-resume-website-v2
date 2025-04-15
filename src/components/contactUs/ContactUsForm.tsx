'use client'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import AppInputField from '../custom/inpufield/inpufield';

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
            // email: formData?.email,
            // contact: formData?.contact,
            // message: formData?.message,
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegisterSubmit)}
            >
                <div className='grid grid-cols-2'>

                    {/* Name */}
                    <div className="flex flex-col">
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
                                        className="w-full"
                                        error={!!errors.name}
                                        errorMessage={errors.name?.message}
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...field}
                                    />

                                </>

                            )}
                        />
                    </div>

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
                                    className="w-full"
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    aria-label={errors?.email ? "Email error" : ""}
                                    {...field}
                                />

                            )}
                        />
                    </div>

                </div>


            </form >
        </>
    )
}
