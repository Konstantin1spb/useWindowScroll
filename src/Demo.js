import { useWindowScroll } from './hooks/useWindowScroll';

function Demo() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<div style={{ width: 2000, height: 1000, marginTop: 400 }}>
			<p>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
		</div>
	);
}

export default Demo;
