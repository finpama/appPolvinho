import './errorPage.scss'

import errorLogo from './Assets/errorLogo.png'

import { useRouteError, Link } from 'react-router-dom'

function ErrorPage(){
	const error = useRouteError()

	console.log(error)

	return ( 
		<div className="error">	
			<img src={errorLogo} alt="Logo de Erro" className="errorLogo"/>
			
			<h1 className="title">Parece que ocorreu um erro  :(</h1>
			<p className="desc">Por gentileza, verifique se entrou no link correto, se entrou parece que estamos fora do ar.</p>
			<br/>
			<br/>
			<br/>
			<Link className="link" to="/">Clique aqui para ir para página inicial.</Link>

		</div>
	)
}

export default ErrorPage