interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    // icon?: any;
    text?: React.ReactNode;
    onClick?: any;
    disabled?: boolean;
    className?: string;
}
export default function Button(props: any) {
    const { text, onClick, disabled, className, type } = props;
    return (
        <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={onClick ? () => onClick() : () => { }}
        >
            {text}
        </button>
    )
}