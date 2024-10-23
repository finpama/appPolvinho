import { NavLink } from 'react-router-dom'

function Navbar() {
	return <>
		<NavLink to="/portugues">Ir para Português</NavLink><br/>
		<NavLink to="/matematica">Ir para Matemática</NavLink><br/>
		<NavLink to="/conta">Ir para Sua Conta</NavLink><br/>
	</>
	
}

export default Navbar