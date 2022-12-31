import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import TopMoviesGrid from "./TopMoviesGrid/TopMoviesGrid";
import Criteria from "./Criteria/Criteria";
import News from "./News/News";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Recently Ranked</h2>
        <ol>
          <li>
            <h3>Avatar 2: The Way of Water</h3>
            <h4>Rating: 7.3</h4>
            <p>I recently watched Avatar 2: The Way of Water, a movie that I was very excited for going into it. 
              I'm a massive fan of the first movie as I gave it a 8.1 rating, and is definetly one of my airplane favorites.
              I also heard a lot of good things about the sequel throughout the media and in professional reviews.
              To get to the point, I didn't love this movie. The main reason why is beacuse it is the exact same argument as the first.
              This time instead of the bad guys looking for unabtanium, they are looking for tulkun brain juice. I did obviously enjoy 
              the visuals and the action scnes were pretty cool. I also liked how they focused a lot more on the kids, giving it a rare new twist,
              but I couldn't stop seeing the similarities to the first. A must watch for the visuals but not a movie you'll love.
            </p>
            <h6>December 23, 2022</h6>
          </li>
          <li>
            <h3>Glass Onion: A Knives Out Mystery</h3>
            <h4>Rating: 6.8</h4>
            <p>Over Christmas I watched the new Knives Out and Netflic movie Glass Onion. I'm going to say it again: 
              Netflix movies are terrible. Time and time again I give them a chance and I always seem to regret it. I was looking forward
              to this movie as I loved it's first of the series. The first one had all of the classic mystery themes involved but 
              with masterfull execution. Glass Onion attempted a more rigorous installation but felt short in execution. The general
              feel for the majority of the film wasn't of a mystery but of a comedy, and didn't involve serious intrigue until the later
              third of the movie. I did love Daniel Craig in this movie as I did in the first, his accent is genius and hits the mark
              on the delivery of his findings as inspector. Rewatch the first movie if you can and avoid Netflix movies until otherwise
              publicized.
            </p>
            <h6>December 24, 2022</h6>
          </li>
        </ol>
        <h2>Updated Movie Ratings</h2>
        <ol>
          <li>
            <h3>Star Wars: Episode 2 - Attack of the Clones</h3>
            <h4>Rating Change: 7.3 -{">"} 7.0</h4>
            <p>
              This review was very necessary. I started the the second newest Star Wars trilogy to do something new with Star Wars 
              and I honestly enjoyed the first one, The Phantom Menace. The second one however, I did not remeber it to be this bad.
              I was shocked bythe dialog in this movie that I guess I hadn't noticed as much before, it was as bad as it gets. I love
              Star Wars to much to put it below a a seven rating but lets just say it probably belongs there. the lighsaber scenes and 
              colloseum scene at the end are still legendary though.
            </p>
            <h6>December 30, 2022</h6>
          </li>
        </ol>
        <h2>Five Star Recommendations</h2>
        <ol>
          <li>
            <h3>Whiplash</h3>
            <h4>Rating: 7.9</h4>
            <p>
              Whiplash is a real masterpiece. A movie about a young drummer in college trying to make a name for himself in the school's
              top orchestra. Bullied by a passionate/crazy teacher he finds himself in a constant loop of emotions. This teacher being played by
              J. K. Simmons, he demonstrates his ability to be a high level actor. Miles Teller playing the yound drummer steps into the role
              very nicely but is definetly overshadowed by Simmons. This drama is a movie for everyone and definetly worth the short run time
              of the film.
            </p>
            <h6>December 30, 2022</h6>
          </li>
          <li>

          </li>
        </ol>
      </div>
    )
  }
}

/*
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <TopMoviesGrid />
        <Criteria />
        <News />
      </div>
    );
  }
}
*/
