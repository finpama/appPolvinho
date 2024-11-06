import { useRouteError } from 'react-router-dom'

function ErrorPage(){
	const error = useRouteError()

	console.log(error)

	return <>
		<h1>
			ERRO: <br /> <br /> 
			{error.status}, {error.statusText}
		</h1>
		<br />
		<p>{error.data}</p>
	</>
}

export default ErrorPage