import React from 'react'
interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >{
        text?: React.ReactNode;
        onClick?: any;
        className?: string;
}
function SecondaryButton(props: ButtonProps) {
    const {type,text, onClick, className} = props;
  return (
    <button
          className={`flex h-8 items-center justify-center gap-2 rounded-md border  border-primary-blue px-2.5 text-sm text-primary-blue transition duration-300 ${className || ""
              }`}
        type={type? type :"button"}
        onClick={()=> onClick()}
    >
        {text}
    </button>
  )
}

export default SecondaryButton