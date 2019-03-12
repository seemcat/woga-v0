import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
import './about.css';

const About = () => (
	<div className="about">

	<div className="about-section-0">
	<div className="about-container-0">
	<div className="about-element-0">
	Woga ˈwōɡə noun
	</div>
	<div className="about-element-1">
	A CrossFit-like session of vigorous physical
	exercise followed by a meditation.
	</div>
	<div className="about-wrapper-0">
	<a href="#about-section-1" title="Read on" className="about-next">Read on</a>
	</div>
	</div>
	</div>

	<div className="about-section-1" id="about-section-1">
	<div className="about-container-1">
	<p><span className="drop-caps dc-style-0">O</span>
	upon a time the founder of Woga, Maricris, lived a life where she seemed to be constrained by limitations set by herself. It wasn't until she started meditating that she realized the incredible power of her beliefs.</p>
	<p>
	To make a long story short, what she learned was that reality is merely a manifestation of our thoughts and feelings. And it is this newfound belief that served as a catalyst for Maricris' life-long, spiritual commitment of choosing love/to feel good rather than staying hung up on fear-based, doubtful, or self-detrimental thoughts.
	</p>
	<span className="quote">Reality is merely a manifestation of our thoughts and feelings.</span>
	<p>
	One of the easiest ways for her to feel all of the goodness that life has got to offer was to get up at 4am, while the rest of Santa Cruz was still asleep, walk her dog, head to the gym for an intense workout, and then meditate right afterwards in the hot sauna. Her favorite part was getting into the shower; the bathroom stalls would still be cold from the morning dew, and so feeling the warmth of the water would always instill a deep sense of gratitude within Maricris. 
	</p>
	<p>
	Woga is a term she coined to describe the type of workout sessions she did; which is pretty much a 20 minute CrossFit session, followed by a 10 minute meditation. The times are very specific because she found that keeping the sessions short made it easier to add Woga not only into her schedule, but also into the schedule of most of her modern day friends.
	</p>
	</div>
	</div>

	<div className="about-section-2">
	<div className="about-container-2">
	<p>
	<span className="drop-caps dc-style-1">W</span>
	oga sessions helped me feel good during the roughest of times by helping me find balance with  my body and mind. I hope you'll give it a try and see what I mean. 
	</p>
	</div>
	</div>

	<div className="about-section-3">
	<div className="about-element-2">
	Ready to start your own modern, spiritual journey?
	</div>
	<div className="about-section-4">
	<div className="about-element-3">
	<Link to="/workout">Workout</Link>
	</div>
	<div className="about-element-3">
	<Link to="/meditation">Meditate</Link>
	</div>
	<div className="about-element-3">
	<Link to="/woga">Woga</Link>
	</div>
	</div>
	</div>

	</div>
)

export default About 
