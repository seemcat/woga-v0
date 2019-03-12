import React from 'react'
import './card.css' 
 
const Card = ({url, title, info}) =>
	<div className="card-element">
		<h1>{title}</h1>
		<a data-flickr-embed="true" title="meditate" className="pic"><img src={url} width="320" height="214" alt={title}/></a><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
		<p className="info">{info}</p>
	</div>

export default Card
