import { ReactNode } from "react";

interface CardProps {
	className?: string;
	children: ReactNode
	shadow?: boolean;
	overrideColor?: boolean;
}

const Card: React.FC<CardProps> = ({className, children, shadow, overrideColor}) => {
	return (
		<div className={'p-1 bg-gradient-to-tr bg-opacity-60 rounded-lg' +
			`${shadow ? " shadow-xl " : ''}` + 
			`${!overrideColor ? " from-sky-600 to-teal-600" : ''}` +
		  " " + className
			}>
			<div className="w-full h-full bg-slate-700 rounded-lg p-2">
				{children}
			</div>
		</div>
	)
}

export default Card;