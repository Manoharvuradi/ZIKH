import Button from 'Y/common/buttons/filledButton';
import SecondaryButton from 'Y/common/buttons/secondaryButton';
import ComponentLoader from 'Y/common/componentLoader';
import FormComponent from 'Y/common/form';
import InputField from 'Y/common/form/input';
import { IEvent } from 'Y/interfaces/common/form';
import { api } from 'Y/utils/api';
import { crimeTypeDetailInputs } from 'Y/utils/constants/inputs';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
interface IModal {
    locationDetails:any,
    addDataModel: boolean;
    coorditnates: any;
    setAddDataModel: (open: boolean) => void;
}
function ShowDataAddModel({
    locationDetails,
    addDataModel,
    setAddDataModel,
    coorditnates
}: IModal) {
    const [formValues, setFormValues] = useState<any>();
    const [loader, setLoader] = useState(false);

    // const addLocationDetails = api.locationData.create.useMutation();
    const handleChange = (e: IEvent) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const hanldeDataSubmit = async() => {
        setLoader(true);
        const req = {
            lat: coorditnates[0],
            lng: coorditnates[1],
            crimeType: formValues.crimeType,
            description: formValues.description,
        }
        try{
            // const response = await addLocationDetails.mutateAsync({
            //     ...req
            // })
            // if(response){
            //     toast.success("Successfully Added details");
            //     setLoader(false);
            // }else{
            //     toast.error("Failed add details");
            //     setLoader(false);
            // }
            console.log("testing");
        }catch(error){
            toast.error("Please try again later");
            setLoader(false);
        }finally{
            setLoader(false);
        }
    }
    return (
        <>
            {loader ? (
                <ComponentLoader />
            ) : (
                addDataModel && (
                    <div className={`${addDataModel ? "w-[40%] p-2" : "w-0"
                        } overflow-hidden transition-all duration-500`}>
                        <p>{locationDetails?.country}</p>
                        <p>{locationDetails?.city}</p>
                            <Button
                                className="ml-5"
                                text={"Edit"}
                                // type={"submit"}
                            />
                        <form className='w-full' onSubmit={hanldeDataSubmit}>
                            <FormComponent
                                inputs={crimeTypeDetailInputs}
                                formValues={formValues}
                                // formErrors={}
                                handleChange={handleChange}
                            />
                            <div className='flex w-full justify-end'>
                                <SecondaryButton
                                    text={"close"}
                                    onClick={() => {
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
                )
            )}
        </>
    )
}

export default ShowDataAddModel;