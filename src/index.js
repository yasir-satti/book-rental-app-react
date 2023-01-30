import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './components/app/App';
// import App2 from './components/app/App2';
import ErrorBoundary from './components/app/ErrorBoundary';

ReactDOM.render(
	<React.StrictMode>
		<ConfigProvider theme={{ token: { colorPrimary: '#2373bf' } }}>
			<ErrorBoundary>
				<App />
				{/* <App2 /> */}
			</ErrorBoundary>
		</ConfigProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
