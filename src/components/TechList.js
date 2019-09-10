import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
	state = {
		newTech: '',
		techs: [],
	};

	componentDidMount() {
		// Executado assim que o componente aparece na tela
		const techs = localStorage.getItem('techs');

		if (techs !== null) {
			this.setState({ techs: JSON.parse(techs) });
		}
	}

	// componentDidUpdate(prevProps, prevState) {
	componentDidUpdate(_, prevState) {
		//Executado sempre que houver uma alteração no props ou estado
		//this.props this.update
		if (prevState.techs !== this.state.techs) {
			localStorage.setItem('techs', JSON.stringify(this.state.techs));
		}
	}

	componentWillUnmount() {
		//Executado quando o component deixa de existir
	}

	handleInputChange = e => {
		this.setState({ newTech: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({
			techs: [...this.state.techs, this.state.newTech],
			newTech: '',
		});
	};

	handleDelete = tech => {
		this.setState({ techs: this.state.techs.filter(t => t !== tech) });
	};
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<ul>
						{this.state.techs.map(tech => (
							<TechItem
								key={tech}
								tech={tech}
								onDelete={() => this.handleDelete(tech)}
							/>
						))}
					</ul>
					<input
						type="text"
						onChange={this.handleInputChange}
						value={this.state.newTech}
					/>
					<button type="submit">Enviar</button>
				</form>
			</>
		);
	}
}

export default TechList;
