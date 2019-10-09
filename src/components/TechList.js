import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
	state = {
		newTech: '',
		techs: [],
	};

	componentDidMount() {
		//executado assim que o componente aparece na tela
		const techs = localStorage.getItem('techs');
		if (techs) {
			this.setState({ techs: JSON.parse(techs) });
		}
	}

	componentDidUpdate(_, prevState) {
		// Executa sempre que houve alterações nas pops ou estado
		//this.props ou this.state
		if (prevState.techs !== this.state.techs) {
			localStorage.setItem('techs', JSON.stringify(this.state.techs));
		}
	}

	componentWillUnmount() {
		//executado quando o componente deixa de existir
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
					<button type="submit"> Enviar </button>
				</form>
			</>
		);
	}
}

export default TechList;
