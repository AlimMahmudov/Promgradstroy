import React from 'react';

import Loader from '@/components/ui/loader/loader';
import scss from './SendBtn.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	isSuccess?: boolean;
}

const SendBtn: React.FC<Props> = ({
	isLoading,
	isSuccess,
	children,
	className = '',
	...props
}) => {
	return (
		<button
			className={`${scss.button} ${
				isLoading || isSuccess ? scss.primary : ''
			} ${className}`}
			disabled={isLoading || isSuccess}
			{...props}
		>
			{isLoading ? (
				<Loader />
			) : isSuccess ? (
				<svg
					fill='#fff'
					width='34px'
					height='34px'
					viewBox='-3.5 0 19 19'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z'></path>
				</svg>
			) : (
				children
			)}
		</button>
	);
};

export default SendBtn;
