import logoFull from '../../Assets/Logo_full.png'

import Navbar from '../Navbar/Navbar.jsx'


function PortuguesePage() {

	return (
		<>
				<img src={logoFull} width="250px" alt="Logo do aplicativo: Polvinho Educa" />
				<br/><br/>
				<h1>Português</h1> 
				<br/>

				<Navbar/>
		</>
	)
}

export default PortuguesePage