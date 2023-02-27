interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
	return (
			<button
        onClick={onClick}
        type="button"
        className={"inline-flex items-center rounded px-2.5 py-1.5 shadow-sm " + 
        "bg-sky-600 hover:bg-teal-600 transition-colors " +
        "focus:outline focus:outline-4 focus:outline-teal-800"}
      >
        {children}
      </button>
	)
}

export default Button