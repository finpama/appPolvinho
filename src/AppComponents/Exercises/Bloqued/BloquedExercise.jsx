import './bloquedExercise.scss'

import lock from './Assets/lock.png'

function BloquedExercise() {


	return (
		<article className="bloquedExercise activeExercise">
			<h2 className="title">Nossos Exercícios...</h2>
			<p className="description">Ainda estão em desenvolvimento.</p>
			<img className="lock" src={lock} alt="Ícone de cadeado"/>
		</article>

	)
}

export default BloquedExercise