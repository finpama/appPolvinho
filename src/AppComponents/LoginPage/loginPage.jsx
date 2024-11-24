import './login.scss'

import { useNavigate  } from "react-router-dom";
import Navbar from '../Navbar/Navbar.jsx'

import logoFull from '../../Assets/Logo_full.png'


function LoginPage() {

	const navigate = useNavigate()

	function buttonClick() {
		const name = document.querySelector('.nameInput').value

		if (!name) {
			alert('Insira um nome...')
			return 
		}

		function strCapitalizeWords(str) {
			const words = str.split(' ') 

			for (const i in words) {
				words[i] = words[i][0].toUpperCase() + words[i].substr(1)
			}

			return words.join(' ')
		}

		const capitalName = strCapitalizeWords(name)

		localStorage.setItem("name", capitalName)


		navigate('/portugues')
	}

	function inputEnter(e) {
		if (e.key === 'Enter') buttonClick()
	}

	return (
		<>
			<img className="logoFull" src={logoFull} alt="Logo do aplicativo: Polvinho Educa"/>

			<div className="login_container">
				<div className="wrapper">
					<h1 className="title">Qual é o seu nome?</h1>
					<input className="nameInput" placeholder="Nome" onKeyPress={inputEnter} type="text"/>
				</div>
				
				<button className="entryButton" onClick={buttonClick}>Entrar</button>
			</div>
		</>
	)
} 


export default LoginPage