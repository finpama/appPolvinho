import './account.scss'

import { useNavigate } from 'react-router-dom'

import logoFull from '../../Assets/Logo_full.png'
import blob from './Assets/blob.png'
import pfp from './Assets/pfp.png'

import Navbar from '../Navbar/Navbar.jsx'


function AccountPage() {

	const navigate = useNavigate()

	function exitClick(e) {
		navigate('/')
	}

	return (
		<div className="account">			
			<img className="logoFull" src={logoFull} alt="Logo do aplicativo: Polvinho Educa"/>

			<div className="container">
				<img className="blob" src={blob} alt="Fundo da foto de perfil"/>
				<img className="pfp" src={pfp} alt="Foto de perfil"/>
				
				<h1 className="name">{localStorage.name}</h1>

				<button className="exitButton" onClick={exitClick}>SAIR</button>
			</div>

			<Navbar />
		</div>
	)
}

export default AccountPage