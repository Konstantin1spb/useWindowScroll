import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useWindowScroll = () => {
	const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY });

	useWindowEvent('scroll', () => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	});

	const scrollTo = ({ y }) => {
		window.scrollTo({
			top: y,
			behavior: 'smooth',
		});
	};

	return [scroll, scrollTo];
};
