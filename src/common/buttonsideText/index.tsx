import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    // icon?: any;
    text: React.ReactNode;
    onClick?: any;
    disabled?: boolean;
    className?: string;
    userLocation?: number;
}
export default function ButtonWithIcon(props: ButtonProps) {
    const { text, onClick, disabled, className, type, userLocation } = props;
    return (
        <div className="flex">
            <button
                className={`flex h-8 items-center justify-center gap-2 rounded-md bg-primary-blue px-2.5 text-sm text-white transition duration-300 hover:bg-hover-blue ${className || ""
                    } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={disabled}
                type={type ? type : "button"}
                onClick={onClick ? () => onClick() : () => { }}
            >
                {text}
            </button>
            {userLocation != 0 && (
                <CheckCircleIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                />
            )}
        </div>
    )
}