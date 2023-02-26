import SideBar from '../molecules/SideBar/SideBar';
import MainRoutes from '../molecules/MainRoutes/MainRoutes';
import './App.css';
import HeaderBar from '../organisms/Header/HeaderBar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FooterBar from '../organisms/Footer/FooterBar';

const App = () => {
	return (
		<Layout className="app-container">
			<Content className="site-content-layout">
				<HeaderBar />
				<Layout>
					<SideBar />
					<MainRoutes />
				</Layout>
				<Layout>
					<FooterBar />
				</Layout>
			</Content>
		</Layout>
	);
};

export default App;
