import { useNavigate  } from "react-router-dom";

import Navbar from '../Navbar/Navbar.jsx'

import logoFull from '../../Assets/Logo_full.png'


function LoginPage() {

	const navigate = useNavigate()

	function buttonClick(e) {
		navigate('/conta')
	}

	return (
		<>
			<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
			<input type="text" className="nameInput" />
			<button onClick={buttonClick}>Entrar</button>
			<Navbar />
		</>
	)
} 


export default LoginPage