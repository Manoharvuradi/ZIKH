import Button from 'Y/common/buttons/filledButton';
import SecondaryButton from 'Y/common/buttons/secondaryButton';
import FormComponent from 'Y/common/form';
import InputField from 'Y/common/form/input';
import { IEvent } from 'Y/interfaces/common/form';
import { crimeTypeDetailInputs } from 'Y/utils/constants/inputs';
import React, { useState } from 'react'
interface IModal {
    locationDetails:any,
    addDataModel: boolean;
    setAddDataModel: (open: boolean) => void;
}
function ShowDataAddModel({
    locationDetails,
    addDataModel,
    setAddDataModel
}: IModal) {
    const [formValues, setFormValues] = useState<any>();
    const handleChange = (e: IEvent) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    return (
        <>
            {addDataModel && (
                <div className={`${addDataModel ? "w-[40%] p-2" : "w-0"
                    } overflow-hidden transition-all duration-500`}>
                    <p>{locationDetails?.country}</p>
                    <p>{locationDetails?.city}</p>
                    <form className='w-full'>
                    <FormComponent 
                        inputs={crimeTypeDetailInputs}
                        formValues={formValues}
                        // formErrors={}
                        handleChange={handleChange}
                    />
                    <div className='flex w-full justify-end'>
                    <SecondaryButton 
                        text={"close"}
                        onClick={()=>{
                            setAddDataModel(false)
                        }}
                    />
                    <Button
                        className="ml-5"
                        text={"Submit"}
                        type={"submit"}
                    />
                    </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default ShowDataAddModel;