'use client'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";
// ================
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineUpload } from "react-icons/ai";
// ================
import CTA from '../custom/CTA';
import AppInputField from '../custom/inpufield/inpufield';
import PhoneNumberField from '../custom/PhoneNumberField/PhoneNumberField';
import CustomSelect from '../custom/customSelect/CustomSelect';

export default function ApplyNowForm() {
    const [captchaError, setCaptchaError] = useState("");
    const [verified, setVerified] = useState<any>(false);
    const [fileData, setFileData] = useState<{ name: string; file: File | null }>({
        name: "",
        file: null,
    });
    const [experienceData, setExperienceData] = useState<any>([
        { id: "1", name: "1-2 years" },
        { id: "2", name: "3-5 years" },
        { id: "3", name: "6-10 years" },
        { id: "4", name: "10+ years" },
    ]);

    const [degreeData, setDegreeData] = useState<any>([
        { id: "1", name: "High School Diploma" },
        { id: "2", name: "Associate Degree" },
        { id: "3", name: "Bachelor's Degree" },
        { id: "4", name: "Master's Degree" },
        { id: "5", name: "Ph.D." },
    ]);
    const {
        handleSubmit,
        control,
        // getValues,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const handleCheckCaptcha = () => {
        setVerified(true);
        setCaptchaError("");
    };

    const resetRecaptchaValue = () => {
        setVerified(null);
    };

    const TIMEOUT_DURATION = 1 * 60 * 1000;
    let timeoutId: any;

    const handleRecaptchaTimeout = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(resetRecaptchaValue, TIMEOUT_DURATION);
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setFileData({
                name: file.name,
                file: file,
            });
        } else {
            setFileData({
                name: "",
                file: null,
            });
        }
    };

    const handleClick = () => {
        console.log("Creatimg account");
    };

    const handleRegisterSubmit = async (formData: any) => {
        // if (!verified) {
        //     setCaptchaError("Please verify the ReCAPTCHA.");
        //     return
        // }
        const credentials = {
            firstname: formData?.firstname,
            lastname: formData?.lastname,
            email: formData?.email,
            contact: formData?.contact,
            file: fileData.file,
            // experienceData: formData?.experienceData,
            // degreeData: formData?.degreeData,
            experienceData: formData?.experience,
            degreeData: formData?.degree,
            major: formData?.major,
            message: formData?.message,
        }

        console.log(credentials, "credentials")
    }



    return (
        <section className="py-5 xl:py-10">
            <div className="container">
                <div className="grid">
                    <div className='bg-indigo-200/20 border-2 border-white backdrop-blur-none rounded-xl px-4 md:px-6 lg:px-8 py-4 md:py-6'>
                        <h5 className='font-semibold text-[26px] text-zinc-950 mb-2 lg:mb-3'>Tell us about <span className='text-indigo-500'>Yourself.</span></h5>
                        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                            <div className='flex flex-wrap justify-between'>
                                {/*First Name */}
                                <div className="w-full lg:w-[49%] ">
                                    <Controller
                                        name='firstname'
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: "First Name is required" }}
                                        render={({ field }) => (
                                            <>
                                                <AppInputField
                                                    label="First Name*"
                                                    type="text"
                                                    className="w-full"
                                                    error={!!errors.firstname}
                                                    errorMessage={errors.firstname?.message}
                                                    aria-invalid={errors.firstname ? "true" : "false"}
                                                    {...field}
                                                />

                                            </>

                                        )}
                                    />
                                </div>

                                {/*Last Name */}
                                <div className="w-full lg:w-[49%] ">
                                    <Controller
                                        name='lastname'
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: "Last Name is required" }}
                                        render={({ field }) => (
                                            <>
                                                <AppInputField
                                                    label="Last Name*"
                                                    type="text"
                                                    className="w-full"
                                                    error={!!errors.lastname}
                                                    errorMessage={errors.lastname?.message}
                                                    aria-invalid={errors.lastname ? "true" : "false"}
                                                    {...field}
                                                />

                                            </>

                                        )}
                                    />
                                </div>

                                {/* Phone Number   */}
                                <div className="w-full lg:w-[49%]">
                                    <Controller
                                        name="contact"
                                        control={control}
                                        rules={{ required: "Phone Number is Required" }}
                                        render={({ field }) => (
                                            <PhoneNumberField
                                                field={field}
                                                className="w-full"
                                                error={!!errors.contact}
                                                errorMessage={errors.contact?.message}
                                            />
                                        )}
                                    />
                                </div>

                                {/* Email */}
                                <div className="w-full lg:w-[49%]">
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

                            <div className='flex w-full gap-4 my-3'>
                                {/* Upload */}
                                <label htmlFor="uploadFile1"
                                    className="bg-white border-[1.2px] border-dashed border-[#CBD5E1] font-semibold text-base rounded w-full h-52 flex 
                                    flex-col items-center justify-center cursor-pointer ">
                                    <div className='bg-hamzaPrimary/20 backdrop-blur-sm p-5 rounded-full mb-3'>
                                        <AiOutlineUpload size={30} className='text-indigo-600' />
                                    </div>
                                    <h5 className='font-semibold text-[18px] text-zinc-950'>Upload Resume</h5>

                                    <input
                                        type="file"
                                        id="uploadFile1"
                                        accept=".doc,.docx,.pdf"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <p className="text-xs font-medium text-slate-400 mt-2">{fileData.name ? `${fileData.name}` : "pdf, doc, docx"}</p>

                                </label>
                            </div>

                            <div className='flex flex-wrap justify-between'>
                                {/* Select Experience */}
                                <div className="w-full lg:w-[49%]">

                                    <Controller
                                        name="experience"
                                        defaultValue=""
                                        control={control}
                                        rules={{ required: "Experience is required" }}
                                        render={({ field }) => (
                                            <CustomSelect
                                                {...field}
                                                label="Experience"
                                                options={experienceData}
                                                className="w-full"
                                                error={!!errors.experience}
                                                errorMessage={errors?.experience?.message as string}
                                            />
                                        )}
                                    />
                                </div>
                                {/* Select Degree */}
                                <div className="w-full lg:w-[49%]">

                                    <Controller
                                        name="degree"
                                        defaultValue=""
                                        control={control}
                                        rules={{ required: "Degree is required" }}
                                        render={({ field }) => (
                                            <CustomSelect
                                                {...field}
                                                label="Degree"
                                                options={degreeData}
                                                className="w-full"
                                                error={!!errors.degree}
                                                errorMessage={errors?.degree?.message as string}
                                            />
                                        )}
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 mt-1 lg:mt-0'>
                                {/*Major */}
                                <div className="">
                                    <Controller
                                        name='major'
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: "Major is required" }}
                                        render={({ field }) => (
                                            <>
                                                <AppInputField
                                                    label="Major*"
                                                    type="text"
                                                    className="w-full "
                                                    error={!!errors.major}
                                                    errorMessage={errors.major?.message}
                                                    aria-invalid={errors.major ? "true" : "false"}
                                                    {...field}
                                                />

                                            </>

                                        )}
                                    />
                                </div>

                                {/* Message */}
                                <div className="">
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
                                                    className="w-full -mt-3 lg:-mt-2"
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

                            <div className='w-full lg:flex lg:justify-end mt-3 pb-2'>
                                <CTA
                                    btn
                                    text="Submit"
                                    bgColor="bg-transparent hover:bg-primary"
                                    txtColor="text-indigo-500 hover:text-white"
                                    border="border border-indigo-500 hover:border-white"
                                    width="w-full lg:w-max"
                                    // handleClick={handleClick}
                                    type="submit"
                                />
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </section>
    )
}
