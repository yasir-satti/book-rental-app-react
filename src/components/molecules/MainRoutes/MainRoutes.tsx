import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../../pages/AboutPage/AboutPage';
import BookRentalPage from '../../../pages/BookRentalPage/BookRentalPage';
import BookReturnPage from '../../../pages/BookReturnPage/BookReturnPage';
import BooksPage from '../../../pages/BooksPage/BooksPage';
import HomePage from '../../../pages/HomePage/HomePage';
import LogoutPage from '../../../pages/LogoutPage/LogoutPage';
import SignInPage from '../../../pages/SiginInPage/SignInPage';
import SignUpPage from '../../../pages/SignUpPage/SignUpPage';

const MainRoutes = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="about" element={<AboutPage />} />
		<Route path="books" element={<BooksPage />} />
		<Route path="signup" element={<SignUpPage />} />
		<Route path="signin" element={<SignInPage />} />
		<Route path="rentals" element={<BookRentalPage />} />
		<Route path="returns" element={<BookReturnPage />} />
		<Route path="logout" element={<LogoutPage />} />
	</Routes>
);

export default MainRoutes;
