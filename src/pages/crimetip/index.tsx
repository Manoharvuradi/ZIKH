import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'Y/common/buttons/button';
import ButtonWithIcon from 'Y/common/buttonsideText';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'Y/common/form/form';
import { SingleInput } from 'Y/common/form/singleInput';
import { CustomSpinner } from 'Y/components/loader';
import { IEvent } from 'Y/interfaces/common/form';
import { IState } from 'Y/redux/store';
import { api } from 'Y/utils/api';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

interface ICrimeTip {
    location: string;
    city: string;
    state: string;
    zip: string;
}
const CrimeTip = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [tip, setTip] = useState<string>();
    const [personalInfo, setPersonalInfo] = useState<string>();
    const [error, setError] = useState<any>();
    const [crimeTipFormValues, setCrimeTipFormValues] = useState({} as ICrimeTip);
    const [addtionalInfo, setAdditionalInfo] = useState<string>();
    const crimeTip = api.crimeTip.create.useMutation();
    const handleSubmit = async () => {
        setLoading(true);
        const req = {
            location: crimeTipFormValues.location,
            city: crimeTipFormValues.city,
            state: crimeTipFormValues.state,
            zip: crimeTipFormValues.zip as string,
            latitude: location.latitude,
            longitude: location.longitude,
            tip: tip,
            personalInfo: personalInfo,
            addtionalInfo: addtionalInfo
        }
        try {
            const crimeTipResponse = await crimeTip.mutateAsync({
                ...req
            });
            if (crimeTipResponse) {
                setLoading(false);
                toast.success("Successfully added crime tip");
            } else {
                setLoading(false);
                toast.error("Failed to add crime tip");
            }
        } catch (error) {
            setLoading(false);
            toast.error("Please try again later");
            console.log('error', error);
        }
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

    const formSchema = z.object({
        location: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        latitude: z.number(),
        longitude: z.number(),
        yourTip: z.string(),
        personalInformation: z.string(),
        addtionalInfo: z.string(),
    });

    type FormSchema = z.infer<typeof formSchema>;
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: '',
            city: '',
            state: '' as any,
            zip: '',
            latitude: 0 as any,
            longitude: 0 as any,
            yourTip: '',
            personalInformation: '' as any,
            addtionalInfo: '' as any
        },
    });

    const onSubmit = async (values: ICrimeTip) => {
        console.log("form", location?.latitude, location?.longitude);
    }

    return (
        <>
            {!loading ? (
            <div>
                <h1 className='text-3xl font-bold m-3'>Submit crime tip</h1>
                <Form {...form}>
                    <form className='grid grid-cols-2 bg-gray-500 w-[80%] mx-auto h-[80%]' onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <SingleInput type="text" {...field} className='w-[80%] mt-5'/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <SingleInput type="text" {...field} className='w-[80%] mt-5' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <SingleInput type="text" {...field} className='w-[80%]' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="zip"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Zip</FormLabel>
                                    <FormControl>
                                        <SingleInput type="number" {...field} className='w-[80%] mt-5' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                            <div className='border-black border rounded-md w-52 px-3 py ml-3 mt-5'>
                                <ButtonWithIcon
                                    text={"Use My Location"}
                                    onClick={handleUseLocation}
                                    disabled={location.latitude !== 0 && location.longitude !== 0}
                                    userLocation={location.latitude}
                                    className='text-black' // Adjust padding of the button
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="yourTip"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Tip</FormLabel>
                                        <FormControl>
                                            <SingleInput type="textarea" {...field} className='w-[80%] mt-5' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="personalInformation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Personal Information</FormLabel>
                                        <FormControl>
                                            <SingleInput type="textarea" {...field} className='w-[80%] mt-5' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="addtionalInfo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Information</FormLabel>
                                        <FormControl>
                                            <SingleInput type="textarea" {...field} className='w-[80%] mt-5' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button variant="ghost" size="lg" type="submit" className="md:col-span-2 bg-red-900 text-white mx-auto w-full">
                                Submit tip
                            </Button>
                    </form>
                </Form>
            </div>
            ):(
                <CustomSpinner />
            )}
        </>
    )
}

const mapStateToProps = (state: IState) => {
    return{

    }
}

export default CrimeTip;