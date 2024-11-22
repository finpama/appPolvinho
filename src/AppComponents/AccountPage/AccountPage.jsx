import { useNavigate } from 'react-router-dom'

import logoFull from '../../Assets/Logo_full.png'

import Navbar from '../Navbar/Navbar.jsx'


function AccountPage() {

	const navigate = useNavigate()

	function exitClick(e) {
		navigate('/')
	}

	return (
		<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br /><br />
				<h1>Sua Conta</h1>
				<br />
				<button onClick={exitClick}>SAIR</button>

				<Navbar />
		</>
	)
}

export default AccountPage