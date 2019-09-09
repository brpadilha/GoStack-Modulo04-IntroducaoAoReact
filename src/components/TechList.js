import React, { Component } from 'react';

class TechList extends Component {
	state = {
		techs: ['Node.js', 'ReactJS', 'ReactNative'],
	};

	render() {
		return (
			<ul>
				<li>Node.js</li>
				<li>ReactJS</li>
				<li>React Native</li>
			</ul>
		);
	}
}

export default TechList;
