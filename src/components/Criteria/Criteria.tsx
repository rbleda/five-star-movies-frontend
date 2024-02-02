import React from 'react';
import './Criteria.css'
import '../style.css'

export default class Criteria extends React.Component {
  render() {
    return (
        <div className="criteria">
        <h3 className="criteria-title">Criteria</h3>
        <p className="criteria-info">
            The criteria for ranking these movies does not fully depend on their score, acting, 
            visuals, and character development. Yes, it does depend on those but here at five stars movies we
            are much more interested in the impact that the movies has on you. It is clear that a movie can't have 
            a certain impact on you if it doesn't have good acting, if the music is basic, or if 
            every character is predictable. At Five Stars Movies however, we believe there are instances in which some of these
            situations are true and yet the movie can still be great. To give you an easy example we have Speed Racer as a 7.9
            rating. If you do not know this movie the only thing you need to know is that it is one of the biggest bombs ever
            at the box office. In our opinion this movie was well ahead of its time and I think people will rediscover 
            this movie shortly. This is something we witnessed purely due to the fact that this movie gave so much raw emotion.
            It was made in an interesting way, and the acting wasn't good, but man at the end of the movie you are sitting on
            the edge of your seat. Take a look at what we are most interested in when ranking movies below.
        </p>
        <div className="critera-priority">
            <h4 className="criteria-priority-title">Criteria Priority List</h4>
            <ol className="criteria-list">
                <li>Emtional Impact</li>
                <li>Originality</li>
                <li>Story</li>
                <li>Acting</li>
                <li>Dialogue</li>
                <li>Characters</li>
                <li>Visuals</li>
                <li>Score</li>
                <li>NOT FINISHED WITH THIS</li>
            </ol>
        </div>
    </div>
    );
  }
}