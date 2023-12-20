import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
const WithUserAuth = (Component: any) => (props: any) => {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session.status == "authenticated") {
            router.push("/dashboard");
        }
    }, [session]);

    return (
        session.status == "unauthenticated" && (
            <>
            <Component { ...props } />
            </>
        )
    );
};

export default WithUserAuth;
