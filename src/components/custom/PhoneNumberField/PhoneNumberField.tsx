import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from './PhoneNumberField.module.css'
const PhoneNumberField = ({ field, error, errorMessage, className }: any) => {
  return (
    <>
      <div className={`${className}`}>
        <div className={`relative flex flex-col ${styles.floatLabelInput}`}>
          <PhoneInput
            {...field}
            value={field.value}
            onChange={(value: any) => field.onChange(value)}
            defaultCountry="US"
            placeholder=""
            autoComplete="on"
            className={`w-full leading-3 py-[15px] bg-white ${styles.PhoneInputRimsha} focus:outline-none rounded-md px-[14px] border
                ${error ? "border-red-500" : "border-slate-300"}
            `}
          />
          {error && errorMessage && <p className="text-red-500 text-xs text-start mt-1 mb-3">{errorMessage}</p>}

          <label
            htmlFor="input-field"
            className={`absolute bg-transparent top-3 left-14 pointer-events-none transition-all duration-200 px-2
                        ${error ? 'text-red-500' : 'text-gray-400 peer-placeholder-shown:text-gray-400 peer-focus:text-primaryBlue'}`}
          >
            phone number
          </label>
        </div>
      </div>
    </>
  );
};

export default PhoneNumberField;
