import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// import brand_logo from '../../assets/image_book.jpeg';
// import HomePage from '../../pages/HomePage/HomePage';

import Registration from '../../pages/Registration/Registration';
import HeaderComponent from '../organisms/HeaderComponent';
import SiderComponent from '../organisms/SiderComponent';

const App = () => {

	return (
		<>
			<Layout className='app-container'>
				<Content className='site-content-layout'>
					<HeaderComponent />
					<Layout>
					{/* <Router>
						<Routes> */}
						<SiderComponent />
							<Registration/>
									{/* <Route
										path='/'
										element={<HomePage/>}
									/>
									<Route
										path='/registration'
										element={<Registration/>}
									/> */}
						{/* </Routes>
					</Router> */}
					</Layout>
				</Content>
			</Layout>
		</>
	)
};

export default App;
