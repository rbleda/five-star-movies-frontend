import React from "react";
import Header from "../Header/Header";
import "./NewBlog.css";

export default class NewBlog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="blog-movies">
            <h1>Recommended Movies</h1>
            <ol>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/the_incredibles.jpg" alt="Not available."></img>
                    <div>
                        <h1>8.5 - The Incredibles</h1>
                        <h6>January 25th, 2024</h6>
                        <p>Wow! This movie is just nuts. It is truly the best animated movie I have ever seen, and it has stayed
                            that way for a long time. Its obviously a classic and its a recommendation that you 
                            probably don't need, but just for those few that have never given it a try, or if you
                            just need a friendly reminder of its brilliance, give this a watch. A great family night
                            film for everyone!
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/the_departed.jpeg" alt="Not available."></img>
                    <div>
                        <h1>8.3 - The Departed</h1>
                        <h6>January 30th, 2024</h6>
                        <p>This movie is my second favorite mafia movie of all time, coming in right behind Goodfellas. That being
                            said it is not as well known as Goodfellas, which is why its on this list. This movie
                            has it all, but what makes it truly great is how it flows through the plot of the FBI under cover cop in
                            the mafia, and the mafia rat in the FBI. It makes for high anticipation and tense moments throughout the film.
                            Not to mention, the amazing performances by Leonardo Dicaprio and Jack Nicholson who portrays the ruthless
                            Whitey Bulger under the name Costello in the film. This is a great movie for those Bostonians out there and
                            mafia movie lovers.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/warrior.jpeg" alt="Not available."></img>
                    <div>
                        <h1>8.1 - Warrior</h1>
                        <h6>January 28th, 2024</h6>
                        <p>I've heard many times from friends and critics alike that this movie is highly underrated, I couldn't agree more.
                            It has remarkable mixed martial arts scenes, which are choreographed beautifully for those UFC fans out there, but
                            its really the story that hooks you in. This movie, quite impressivly, has little to no exposition. Its something
                            that I really love about movies, you find out who the characters are and what their intentions may be purely by
                            watching the movie unfold. Its impossible to not fall in love with this story, give it a try!
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/mid90s.jpeg" alt="Not available."></img>
                    <div>
                        <h1>7.7 - Mid90s</h1>
                        <h6>January 28th, 2024</h6>
                        <p>This is my longshot recommendation, but one that could really impress you. The first thing
                            you should know is that Jonah Hill directed this movie, which is wild. The next thing you should
                            know is much like Jonah Hill's public annoucements of his mental health, this movie also
                            packs quite the emotional punch. That being said, it is incredibly well made and one the great
                            coming of age films. I applaud Jonah's work and it should be recognized by the rest of the world.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
        <div className="blog-movies">
            <h1>Recently Ranked Movies</h1>
            <ol>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/the_big_short.jpeg" alt="Not available."></img>
                    <div>
                        <h1>7.7 - The Big Short</h1>
                        <h6>January 28th, 2024</h6>
                        <p>I recently watched this masterpiece of a movie, which inlcuded not only great story telling and pace, 
                            but also awesome acting. Steve Carrell is able to display true emotion based on his character's background, 
                            and Ryan Gosling applies a funny touch to his. I would highly recommend watching this.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/v_for_vendetta.jpeg" alt="Not available."></img>
                    <div>
                        <h1>8.4 - V for Vendetta</h1>
                        <h6>January 28th, 2024</h6>
                        <p>This is another special film, which has gotten great critical acclimation due to its
                            amazing dialogue and overall plot. The film itself is shot remarkably well, its stunning how
                            they were able to make this fascist futuristic society come to life. Great watch!
                        </p>
                    </div>
                </li>
            </ol>
        </div>
        <div className="blog-movies">
            <h1>Updated Movie Rankings</h1>
            <ol>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/arrival.jpeg" alt="Not available."></img>
                    <div>
                        <h1>7.6 -{">"} 7.8 - Arrival</h1>
                        <h6>January 29th, 2024</h6>
                        <p>Rewatching this movie I noticed many new components that I didn't see the first time.
                            I noticed great pace and character building. For some odd reason the first time I saw it I found
                            it to be quite slow and boring from the get go, that was not the case this watch. I felt it built really
                            nicely, getting me hooked into what the resolve of the crisis was going to be. This, in turn, gave me better
                            prespective on what Amy Addams' character arc meant. Give this one another try if you haven't already.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="https://fivestarmoviesimages.s3.amazonaws.com/covers_movie/wedding_crashers.jpeg" alt="Not available."></img>
                    <div>
                        <h1>7.5 -{">"} 7.6 - Wedding Crashers</h1>
                        <h6>January 30th, 2024</h6>
                        <p>There isn't much to say about this update. More than anything I found it way funnier than last time.
                            With comedy movies there is obviously a big dependecy on the mood that you are in when you watch them.
                            The art in comedy movies, and just comedy in general, is that they are able to take you out of
                            those moods and into something more enjoyable. I definetly got that from this movie this time around
                            and it has become one of my favorite comedy movies of all time. Let's have a laugh!
                        </p>
                    </div>
                </li>
            </ol>
        </div>
      </div>
    )
  }
}