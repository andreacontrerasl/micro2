import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Home.module.css'

const Img_Url = 'https://image.tmdb.org/t/p/original';

export default function index() {
    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=1062007152de0b551ac0783b4305f67d").then((Response)=>{console.log(Response.data); setMovies(Response.data.results)}).catch((err)=> {console.log(err)});
    };
    useEffect(()=>{
        fetchMovies();
    }, []);

    const verPelis = async () => {
        navigate("/carletera");
    };
  return (
      <ul>
        
        <main className={styles.main}>
                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>Spider-Man: No Way Home</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
                        <h3>Original Language</h3>
                        <p>en</p>
                    </div>
                </div>

                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>The Batman</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</p>
                        <h3>Original Language</h3>
                        <p>en</p>
                    </div>
                </div>

                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>No Exit</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.</p>
                        <h3>Original Language</h3>
                        <p>en</p>
                    </div>
                </div>

                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>Enanto</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.</p>
                        <h3>Original Language</h3>
                        <p>en</p>
                    </div>
                </div>

                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/9MP21x0OPv0R72obd63tMHssmGt.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>Restless</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.</p>
                        <h3>Original Language</h3>
                        <p>fr</p>
                    </div>
                </div>

                <div className={styles.movie}>
                    <img src='https://image.tmdb.org/t/p/original/pSh8MyYu5CmfyWEHzv8FEARH2zq.jpg' alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>The Commando</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>An elite DEA agent returns home after a failed mission when his family makes an unexpected discovery in their house – a stash of money worth $3 million. They soon face the danger and threat of a newly released criminal and his crew, who will do whatever it takes to retrieve the money, including kidnap the agent’s daughters. Stakes are high and lives are at risk in this head-to-head battle as the agent stops at nothing to protect his family against the money-hungry criminals.</p>
                        <h3>Original Language</h3>
                        <p>en</p>
                    </div>
                </div>
            
            </main>

      </ul>
   
  )
}
