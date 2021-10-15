import React from 'react';
import './Styles.css';

export interface PlantsProps {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number;
}

interface BotonState {
	count: number;
	Free: number;
	Delete: number;

}

export class Plants extends React.Component<PlantsProps, BotonState> {

	state: BotonState = {
		count: 10,
		Free: 10,
		Delete: 10,
	}


	componentDidUpdate() {
		if (this.state.count < 0) {
			alert('No hay plantas disponibles');
		}
	}


	handleInput = (num: string) => {
		const value = parseInt(num);
		const result = (10 + value);
		this.setState({ Free: result })
	}

	handle2Input = (num: string) => {
		const value = parseInt(num);
		const result = (10 - value);
		this.setState({ Delete: result })
	}


	render() {
		const contacts = [
			{ id: '1', title: 'Monstera Deliciosa', description: 'planta tropical', imgURL: 'No tiene URL', quantity: '10' },
			{ id: '2', title: 'Ficus Lyarata', description: 'Arbol interior', imgURL: 'https://thumbs.dreamstime.com/b/beautiful-fiddle-leaf-tree-ceramic-pot-white-background-ficus-lyrata-vector-illustration-stylish-houseplant-design-element-184366080.jpg', quantity: '14' },
			{ id: '3', title: 'Veranera', description: 'Arbusto de diferentes colores, florea todo el año', imgURL: 'https://i.pinimg.com/originals/95/61/cf/9561cf3f081fd8ea6401d14d4645853a.jpg', quantity: '5' },
			{ id: '4', title: 'Copey', description: 'Arbol', imgURL: 'https://www.elicriso.it/es/como_cultivar/clusia/imagenes/clusia.jpg', quantity: '10' },
			{ id: '5', title: 'Ficus Burgury', description: 'Arbusto', imgURL: 'https://www.elicriso.it/es/como_cultivar/clusia/imagenes/clusia.jpg', quantity: '12' },
		]

		return <div  >
			<ul>
				{contacts.map((contact) => ( 
					<div >
						<li key={contact.id}>
						<li>{contact.id} </li>
						<li>{contact.title} </li>
						<li>{contact.description}</li>
						<li>{contact.imgURL}</li>
						<li>{contact.quantity}</li>
						<br />
						<p>Cantidad de plantas que desea agregar: <input onChange={(e) => this.handleInput(e.target.value)} type='number' />Disponibles: {this.state.Free}</p>
						<p>Cantidad de plantas que desea eliminar: <input onChange={(e) => this.handle2Input(e.target.value)} type='number'/>Disponibles: {this.state.Delete}</p>
						<br />
						</li>

					</div>	
				))}
			</ul>
		</div>
	}
}








