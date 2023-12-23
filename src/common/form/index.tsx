import { IEvent, IInput } from "Y/interfaces/common/form"
import InputField from "./input";

export interface IFormProps {
    index?: number;
    inputs:Array<IInput>;
    tailwindClass?: string;
    handleChange: (e: IEvent, index?: number) => void;
    formValues: {[key: string]: any};
    formErrors?: {[key: string]: any};
    handleSubmit?: () => void;
}

const FormComponent = ({
    inputs,
    index,
    handleChange,
    handleSubmit,
    formValues,
    formErrors,
    tailwindClass
}:IFormProps) => {
    return (
        <div className={`grid w-full ${tailwindClass ?? ""}`}>
            {inputs.map((input: IInput, key: number)=>(
                <InputField
                    key={key+ JSON.stringify(input)} 
                    input={input}
                    index={index}
                    formValues={formValues}
                    formErrors={formErrors}
                    handleChange={handleChange}
                />
            ))}
        </div>
    )
}

export default FormComponent;