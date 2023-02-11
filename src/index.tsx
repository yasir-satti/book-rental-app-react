import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './components/app/App';
// import App2 from './components/app/App2';
import ErrorBoundary from './components/app/ErrorBoundary';

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ConfigProvider 
			theme={{ 
				token: { 
					colorPrimary: '#2373bf',
					colorBgLayout: '#313131',
				} 
			}}
			>
			<ErrorBoundary>
				<App />
				{/* <App2 /> */}
			</ErrorBoundary>
		</ConfigProvider>
	</React.StrictMode>
);
