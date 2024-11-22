import './Assets/rootTools.scss'
import logoFull from './Assets/Logo_full.png'

import Navbar from './AppComponents/Navbar/Navbar.jsx'
import ErrorPage from './AppComponents/ErrorPage/ErrorPage.jsx'
import LoginPage from './AppComponents/LoginPage/LoginPage.jsx'
import AccountPage from './AppComponents/AccountPage/AccountPage.jsx'
import MathPage from './AppComponents/MathPage/MathPage.jsx'
import PortuguesePage from './AppComponents/PortuguesePage/PortuguesePage.jsx'

import { createBrowserRouter } from 'react-router-dom';

const routesConfig = [
	{
		path: '/',
		element: <>
				<LoginPage/>
		</>
	},
	{
		path: '/portugues',
		element: 
			<>
				<PortuguesePage/>
			</>
	},
	{
		path: '/matematica',
		element: 
			<>
				<MathPage/>
			</>
	},
	{
		path: '/conta',
		element: 
			<>
				<AccountPage/>
			</>
	},

]

const AppRouter = createBrowserRouter(routesConfig)


export default AppRouter

