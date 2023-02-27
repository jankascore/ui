interface NumberProps {
	number: number;
	size?: number;
}

const number: React.FC<NumberProps> = ({number, size}) => {
	const num = Math.floor(number);
	return (
		<div className={"bg-gradient-to-tr from-sky-600 to-teal-600 rounded-full " +
		 "w-6 h-6 flex items-center justify-center select-none " +
		 "font-extralight"}
			style={{transform: `scale(${size || 1})`}}
		>
			{num}
		</div>
	)
}

export default number;