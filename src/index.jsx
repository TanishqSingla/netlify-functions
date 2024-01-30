import { render } from 'preact';

export function App() {
	fetch("/api/healthcheck").then(data => data.json()).then(data => console.log(data));
	return (
		<div>
		hello world
		</div>
	);
}

render(<App />, document.getElementById('app'));
