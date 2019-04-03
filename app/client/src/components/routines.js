import React from 'react'

const Routines = ({ routines, idx }) => {
	let arrOfIndicators = [];
	let i = 0;
	while (i < routines.length) {
		if (i === 0) arrOfIndicators.push(<li key={i} href={"#woga" + idx} data-slide-to={i} className="active"></li>);
		else arrOfIndicators.push(<li key={i} href={"#woga" + idx} data-slide-to={i}></li>);
		i++;
	}

	let arrOfSlides = [];
	let j = 0;

	while (j < routines.length) {
		if (j === 0)
			arrOfSlides.push(<div key={j} className="carousel-item active">
				<div className="view">
				<img className="d-block w-100" src={routines[0].giffUrl}></img>
				<div className="mask rgba-black-light"></div>
				</div>
				<div className="carousel-caption">
				<h3 className="h3-responsive">{routines[0].title}</h3>
				<p>Reps: {routines[0].reps}</p>
				</div>
				</div>);

		else	arrOfSlides.push(<div key={j} className="carousel-item">
			<div className="view">
			<img className="d-block w-100" src={routines[j].giffUrl}></img>
			<div className="mask rgba-black-light"></div>
			</div>
			<div className="carousel-caption">
			<h3 className="h3-responsive">{routines[j].title}</h3>
			<p>Reps: {routines[j].reps}</p>
			</div>
			</div>);
		j++;
	}

	return (
		<div>
		<div id={"woga" + idx} className="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
		<ol className="carousel-indicators">
		{ arrOfIndicators }
		</ol>
		<div className="carousel-inner" role="listbox">
		{ arrOfSlides }
		</div>
		<a className="carousel-control-prev" href={"#woga" + idx} role="button" data-slide="prev">
		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href={"#woga" + idx} role="button" data-slide="next">
		<span className="carousel-control-next-icon" aria-hidden="true"></span>
		<span className="sr-only">Next</span>
		</a>
		</div>
		</div>
	);
}

export default Routines 

