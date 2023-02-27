import { ReactNode } from "react";

interface CardProps {
	className?: string;
	children: ReactNode
	shadow?: boolean;
}

const Card: React.FC<CardProps> = ({className, children, shadow}) => {
	return (
		<div className={'p-1 bg-gradient-to-tr from-sky-800 to-teal-600 bg-opacity-60 rounded-lg' +
			`${shadow ? " shadow-xl " : ''}` + 
		  " " + className
			}>
			<div className="w-full h-full bg-slate-700 rounded-lg p-2">
				{children}
			</div>
		</div>
	)
}

export default Card;