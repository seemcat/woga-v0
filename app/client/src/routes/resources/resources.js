import React from 'react'
import './resources.css'
import { Link } from 'react-router-dom';

const Resources = () => (
	<div className="resources-section-0">
	<div className="resources-element">
	<Link to="/workout">WORKOUT</Link>
	</div>
	<div className="resources-element">
	<Link to="/meditation">MEDITATE</Link>
	</div>
	<div className="resources-element">
	<Link to="/woga">WOGA</Link>
	</div>
	</div>
)

export default Resources 
