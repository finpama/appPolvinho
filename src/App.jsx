import * as React from 'react'
import Navbar from './AppComponents/Navbar/Navbar.jsx'
import ErrorPage from './AppComponents/ErrorPage/ErrorPage.jsx'
import {
	createBrowserRouter,
	Route,
	NavLink,
} from 'react-router-dom';

const routesConfig = [
	{
		path: '/',
		element: 
			<div>
				<h1>Login</h1>
				<Navbar />
			</div>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/portugues',
		element: 
			<div>
				<h1>Português</h1>
				<Navbar />
			</div>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/matematica',
		element: 
			<div>
				<h1>Matemática</h1>
				<Navbar />
			</div>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/conta',
		element: 
			<div>
				<h1>Sua Conta</h1>
				<Navbar />
			</div>
		,
		errorElement: <ErrorPage />,
	},

]

const AppRouter = createBrowserRouter(routesConfig)


export default AppRouter

