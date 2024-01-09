import { IEvent, IInput } from 'Y/interfaces/common/form';
import { classNames } from 'Y/utils/helpers';
import React from 'react'

export interface IInputProps {
    input: IInput;
    handleChange: (e: IEvent, index?: number) => void;
    handlePhoneChange?: (
        name: string,
        value: string,
        index?: number
    ) => void | undefined;
    formValues?: { [key: string]: any };
    index?: number;
    formErrors?: { [key: string]: any };
    setFormErrors?: any;
    validation?: any;
    disabled?: boolean;
    tailwindClass?: string;
    checked?: boolean;
}

const InputField = ({
    input,
    handleChange,
    handlePhoneChange = () => { },
    formValues,
    index,
    formErrors,
    setFormErrors,
    validation,
    disabled,
    tailwindClass,
    checked,
}:IInputProps) => {
    const {label, type, name, required, options} = input;
  return (
    <div
        key={name}
        className={classNames(tailwindClass? tailwindClass: "", "mb-2")}
    >
        <label
            className='block text-sm font-normal leading-6'
            htmlFor={name}
              style={{ pointerEvents: "none" }}
        >
            {label}
            {required && <span className='text-red-500 font-bold'>*</span>}
        </label>
          <input
              className={`border ${formErrors?.[name]
                  ? "border-red-500"
                  : "border-gray-300 focus:border-primary-blue"
                  } w-full appearance-none rounded px-3 py-2 leading-tight focus:outline-none focus:border-[3px]`}
              id={name}
              type={type}
              name={name}
              value={formValues?.[name] === "0" ? "0" : formValues?.[name] || ""}
              required={required && !formValues?.[name]}
              onChange={(e) => {
                  e.target.value = e.target.value.startsWith(" ")
                      ? e.target.value.trim()
                      : e.target.value;
                  handleChange(e, index ?? 0);
              }}
              disabled={disabled ? disabled : false}
          />
          {(formErrors?.[name] || false) && (
              <p className="mt-2 text-sm text-red-600">{formErrors[name]}</p>
          )}
    </div>
  )
}

export default InputField;