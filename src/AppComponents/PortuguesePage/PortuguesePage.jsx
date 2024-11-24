import './portuguese.scss'

import logo from '../../Assets/Logo.png'

import BloquedExercise from '../Exercises/Bloqued/BloquedExercise.jsx'
import Navbar from '../Navbar/Navbar.jsx'


function PortuguesePage() {

	return (
		<div className="portuguese">
			<img className="logo" src={logo} alt="Logo do aplicativo: Polvinho Educa"/>

			{/*<Exercise title={} description={} open={}/>*/}
			
			<div className="container">
				<BloquedExercise/>
			</div>

			<Navbar/>
		</div>
	)
}

export default PortuguesePage