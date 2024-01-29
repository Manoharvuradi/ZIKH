import Button from 'Y/common/buttons/filledButton';
import ButtonWithIcon from 'Y/common/buttonsideText';
import FormComponent from 'Y/common/form';
import InputField from 'Y/common/form/input';
import { IEvent } from 'Y/interfaces/common/form';
import { crimeTipInputs } from 'Y/utils/constants/crimetip';
import React, { useEffect, useState } from 'react'

interface ICrimeTip {
    location: string;
    city: string;
    state: string;
    zip: number;
}
const CrimeTip = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [tip, setTip] = useState<string>();
    const [personalInfo, setPersonalInfo] = useState<string>();
    const [error, setError] = useState<any>();
    const [crimeTipFormValues, setCrimeTipFormValues] = useState({} as ICrimeTip);
    const [addtionalInfo, setAdditionalInfo] = useState<String>();
    const handleSubmit = async () => {

    }
    const handleChangeCrimeTip = (e: IEvent) => {
        const { name, value } = e.target;
        setCrimeTipFormValues({
            ...crimeTipFormValues,
            [name]: value
        })
    }
    const handleUseLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    setError(`Error getting location: ${error.message}`)
                }
            )
        } else {
            setError('Geolocation is not supported by your browser.');
        }
    }

    const handleInputTipChange = (e: IEvent) => {
        setTip(e.target.value)
    }

    const handleInputPersonal = (e: IEvent) => {
        setPersonalInfo(e.target.value)
    }

    const handleAdditionalInfo = (e: IEvent) => {
        setAdditionalInfo(e.target.value)
    }

    return (
        <div>
            <h1 className='text-3xl font-bold m-3'>Submit crime tip</h1>
            <form onSubmit={handleSubmit} className='m-2'>
                <FormComponent
                    inputs={crimeTipInputs}
                    formValues={crimeTipFormValues}
                    handleChange={handleChangeCrimeTip}
                />
                <div className='border-black border rounded-md w-52 px-3 py ml-3'>
                    <ButtonWithIcon
                        text={"Use My Location"}
                        onClick={handleUseLocation}
                        disabled={location.latitude !== 0 && location.longitude !== 0}
                        userLocation={location.latitude}
                        className='text-black' // Adjust padding of the button
                    />
                </div>

                <div className='px-3 py-2'>
                <InputField
                    input={{
                        label: "Whats your tip",
                        type: "textarea",
                        name: "yourTip",
                        required: false
                    }}
                    formValues={{ "yourTip": tip }}
                    handleChange={handleInputTipChange}
                />
                <p className='text-sm'>please include details like location , date, time and description of people involved.</p>
                </div>
                <div className='px-3 py-2'>
                <InputField
                    input={{
                        label: "Would like to provide personal information",
                        type: "textarea",
                        name: "personalInformation",
                        required: false
                    }}
                    formValues={{ "personalInformation": personalInfo }}
                    handleChange={handleInputPersonal}
                />
                <InputField
                    input={{
                        label: "Would like to provide personal information",
                        type: "textarea",
                            name: "addtionalInfo",
                        required: false
                    }}
                    formValues={{ "addtionalInfo": addtionalInfo }}
                    handleChange={handleAdditionalInfo}
                />
                </div>
                <div className='px-3 py-2'>
                <Button type='submit' text={"submit tip"} className='bg-gray-500'/>
                </div>
            </form>
        </div>
    )
}

export default CrimeTip;