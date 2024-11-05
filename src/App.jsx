import * as React from 'react'

import './Assets/rootTools.scss'
import logoFull from './Assets/Logo_full.png'

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
			<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br /><br />
				<Navbar />
			</>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/portugues',
		element: 
			<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br /><br />
				<h1>Português</h1> <br />
				<p>Quem se interessa por aprender a falar Português já pode contar com um ensino eficiente. Por meio de textos práticos, que favorecem a boa leitura e consequente compreensão do que é ensinado. </p>
				<Navbar />
			</>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/matematica',
		element: 
			<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br /><br />
				<h1>Matemática</h1><br />
				<p>O ensino de matemática é uma disciplina que exige raciocínio e pensamento do aluno, e que pode ser uma base para a construção de conhecimentos em outras áreas.</p>
				<Navbar />
			</>
		,
		errorElement: <ErrorPage />,
	},
	{
		path: '/conta',
		element: 
			<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br /><br />
				<h1>Sua Conta</h1><br />
				<p>Essa Aba irá manter o progresso, para indicar exercícios no nível de cada aluno; assegurando seu progresso.</p>
				<Navbar />
			</>
		,
		errorElement: <ErrorPage />,
	},

]

const AppRouter = createBrowserRouter(routesConfig)


export default AppRouter

