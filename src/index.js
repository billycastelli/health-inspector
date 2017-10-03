import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
	return (
		<div>
			<h1>This is a test</h1>
			<p>Hello world hello world</p>
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

