import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <Spinner
                className="h-16 w-16 text-blue-900/50"
            />;
        </div>
    )
}