import { Button } from 'Y/common/buttons/button';
import { SingleInput } from 'Y/common/form/singleInput';
import { useSearchParams } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'

function Login() {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null);

    useEffect(() => {
        setEmail(searchParams.get('email'));
        setPassword(searchParams.get('pw'));
    }, [searchParams]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setEmail(formData.get('email') as string);
        setPassword(formData.get('password') as string);
    }


    return (
        <div>
            <form className="mx-auto flex max-w-md flex-col space-y-2 mt-5" onSubmit={handleSubmit} method='post'>
                <SingleInput
                    name='email'
                    type="text"
                    placeholder='Email'
                />
                <SingleInput
                    name="password"
                    type="password"
                    placeholder='Password'
                />
                <Button type="submit" className="bg-red-900 text-white mx-auto w-full" variant={'outline'}>
                    Save
                </Button>
            </form>
        </div>
    )
}

export default Login;