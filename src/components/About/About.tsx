import React from 'react';
import './About.css'
import '../style.css'

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h3 className="about-home">About</h3>
        <p className="about-info">This is officially the best movie review page on the internet. 
        Here we do much more than review movies. We bring out all the emtion that they inflict in 
        every person that watches the movie. That emotion could be really good or really bad. We look at all those movies
        and everything in between. Welcome to Five Stars Movies!
        </p>
    </div>
    );
  }
}
