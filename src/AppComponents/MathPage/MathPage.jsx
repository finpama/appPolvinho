import './math.scss'

import logo from '../../Assets/Logo.png'

import BloquedExercise from '../Exercises/Bloqued/BloquedExercise.jsx'
import Navbar from '../Navbar/Navbar.jsx'


function MathPage() {

	return (
		<div className="math">
			<img className="logo" src={logo} alt="Logo do aplicativo: Polvinho Educa"/>

			{/*<Exercise title={} description={} open={}/>*/}
			
			<div className="container">
				<BloquedExercise/>
			</div>
			
			<Navbar/>
		</div>
	)
}

export default MathPage