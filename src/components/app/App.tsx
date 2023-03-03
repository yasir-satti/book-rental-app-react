import SideBar from '../molecules/SideBar/SideBar';
import MainRoutes from '../molecules/MainRoutes/MainRoutes';
import './App.css';
import HeaderBar from '../organisms/Header/HeaderBar';
import FooterBar from '../organisms/Footer/FooterBar';
import { Layout } from 'antd';

const App = () => {
	return (
		<>
			<HeaderBar />
			<Layout>
				<SideBar />
				<MainRoutes />
			</Layout>
			<FooterBar />
		</>
	);
};

export default App;
