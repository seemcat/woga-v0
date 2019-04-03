import React from 'react'
import { Link } from 'react-router-dom';
import '../workout/workout.css'

import gql from 'graphql-tag';
import { graphql, compose, Mutation } from 'react-apollo';
import { 
	ADD_MEDITATION,
} from '../../db/mutations';

@compose(
	graphql(ADD_MEDITATION, { name: 'addMeditation' }),
)
class MeditationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			keyword: '',
			keywords: [],
			mp3: '',
			submit: false,
		};
	}

	handleChangeOnKeyword = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		if (event.target.value.endsWith(',') || this.state.submit === true) {
			this.state.keywords.push(this.state.keyword);
			this.setState({ keyword: '' });
		}
		console.log("this.state.keywords: ", this.state.keywords);
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = () => {
		this.state.submit = true;
		this.setState({ submit: this.state.submit });

		/* UPDATE THE MEDITATIONS TABLE */
		this.props.addMeditation({
			variables: {
				title: this.state.title,
				keywords: this.state.keywords,
				mp3: this.state.mp3,
			},
		}).then(({ data }) => {
			console.log('got data from mutating meditations table: ', data);
		}).catch((error) => {
			console.log('there was an error mutating meditations table: ', error);
		});
	}

	render() {
		return (
			<div className="woga-body">
			<div className="woga-title">
			<div className="woga-item">NEW MEDITATION, WHO DIS?</div>
			</div>
			<div className="woga-section">
			<div className="woga-item">Title: <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /></div>
			<div className="woga-item">Keywords: <input type="text" value={this.state.keyword} name="keyword" onChange={this.handleChangeOnKeyword} /></div>
			{ this.state.keywords.map((keyword, idx) => <div key={idx}>{keyword}</div>) }

			<div className="woga-item">MP3 URL/Upload: <input type="text" value={this.state.mp3} name="mp3" onChange={this.handleChange} /></div>
			</div>
			<div className="woga-section">
			<div className="woga-item"><button onClick={this.handleSubmit}>Submit</button></div>
			<div className="woga-item"><Link to="/meditation" className="active">Cancel</Link></div>
			</div>
			</div> 
		)
	}
}

export default MeditationForm
