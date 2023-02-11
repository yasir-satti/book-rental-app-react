import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import ErrorBoundary from './components/app/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App tab='home' />
		</ErrorBoundary>
	</React.StrictMode>
);
