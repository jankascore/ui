interface NumberProps {
	number: number;
	size?: number;
}

const number: React.FC<NumberProps> = ({number, size}) => {
	const num = Math.floor(number);
	return (
		<div className={"bg-gradient-to-tr from-sky-600 to-teal-600 rounded-full " +
		 `flex items-center justify-center select-none ` +
		 "font-extralight"}
		 style={{width: `${size || 2}rem`, height: `${size || 2}rem`, fontSize: `${size ? size-1 : 1}rem`}}
		>
			{num}
		</div>
	)
}

export default number;