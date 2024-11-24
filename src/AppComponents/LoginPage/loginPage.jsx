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
		<div className="login">
			<img className="logoFull" src={logoFull} alt="Logo do aplicativo: Polvinho Educa"/>

			<div className="container">
				<div className="wrapper">
					<label for="nameInput" className="title">Qual é o seu nome?</label>
					<input className="nameInput" type="name" id="nameInput" placeholder="Nome" onKeyPress={inputEnter} type="text"/>
				</div>
				
				<button className="entryButton" onClick={buttonClick}>Entrar</button>
			</div>
		</div>
	)
} 


export default LoginPage