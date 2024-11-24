import './Navbar.scss'
import { NavLink } from 'react-router-dom'


import langImg from './Assets/Language.png'
import mathImg from './Assets/Math.png'
import accountImg from './Assets/Account.png'

import langImg_ON from './Assets/Language_ON.png'
import mathImg_ON from './Assets/Math_ON.png'
import accountImg_ON from './Assets/Account_ON.png'


function Navbar() {

	return (
		<nav className="navbar">
			<NavLink className='lang' to="/portugues">
				{({ isActive }) => isActive ? 
					(<img className="langON" src={ langImg_ON } alt="Ícone da aba de português" />):
					(<img className="langOFF" src={ langImg } alt="Ícone da aba de português" />)

				}
			</NavLink>

			<NavLink className='math' to="/matematica">
				{({ isActive }) => isActive ? 
					(<img src={ mathImg_ON } alt="Ícone da aba de matemática" />):
					(<img src={ mathImg } alt="Ícone da aba de matemática" />)

				}
			</NavLink>

			<NavLink className='account' to="/conta">
				{({ isActive }) => isActive ? 
					(<img src={ accountImg_ON } alt="Ícone da aba da sua conta" />):
					(<img src={ accountImg } alt="Ícone da aba da sua conta" />)

				}
			</NavLink>

		</nav>
	)
	
}

export default Navbar