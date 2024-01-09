import Button from 'Y/common/buttons/filledButton';
import FormComponent from 'Y/common/form';
import { IEvent } from 'Y/interfaces/common/form';
import { crimeTipInputs } from 'Y/utils/constants/crimetip';
import React, { useEffect, useState } from 'react'

interface ICrimeTip{
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
    const [error, setError] = useState<any>();
    const [crimeTipFormValues, setCrimeTipFormValues] = useState({} as ICrimeTip);
    const handleSubmit = async() => {

    }
    const handleChangeCrimeTip = (e: IEvent) => {
        const {name, value} = e.target;
        setCrimeTipFormValues({
            ...crimeTipFormValues,
            [name]: value
        })
    }
    const handleUseLocation = () => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude:position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    setError(`Error getting location: ${error.message}`)
                }
            )
        }else{
            setError('Geolocation is not supported by your browser.');
        }
    }

    return (
    <div>
        {/* <h1 className='text-3xl font-bold'>Submit crime tip</h1> */}
        <form onSubmit={handleSubmit}>
            <FormComponent 
                inputs={crimeTipInputs}
                formValues={crimeTipFormValues}
                handleChange={handleChangeCrimeTip}
            />
            <Button text={"use location"} onClick={handleUseLocation} />
        </form>
    </div>
  )
}

export default CrimeTip;