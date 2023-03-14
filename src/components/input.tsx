interface InputProps {
	onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	
	placeholder?: string;
}

const Input: React.FC<InputProps> = ({onInput, onChange, placeholder}) => {
	return (
		<input
			onInput={onInput}
			onChange={onChange}
			className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-sky-600 focus:ring-inset focus:ring-2 focus:ring-teal-600 bg-slate-800 bg-opacity-50 focus-visible:outline-0"
			placeholder={placeholder}
		>
		</input>
	)
}

export default Input