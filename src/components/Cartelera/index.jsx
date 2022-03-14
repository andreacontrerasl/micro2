import React from 'react'
import styles from './Cartelera.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = 'api_key=1062007152de0b551ac0783b4305f67d';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL =  BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const search_url = 'https://api.themoviedb.org/3/discover/movie?&api_key=1062007152de0b551ac0783b4305f67d&query='




export default function index() {
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);

    const fetchMovies = () => {
        axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=1062007152de0b551ac0783b4305f67d").then((Response)=>{console.log(Response.data);setMovies(Response.data.results) }).catch((err)=> {console.log(err)});
    };

    const fetchMovies2 = () => {
        axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=1062007152de0b551ac0783b4305f67d&page=2").then((Response)=>{console.log(Response.data);setMovies2(Response.data.results) }).catch((err)=> {console.log(err)});
    };

    useEffect(()=>{
        fetchMovies();
    }, []);

    useEffect(()=>{
        fetchMovies2();
    }, []);

    

  return (
    <body>
        <header >
            <form >    
                <input type="text" placeholder='Search' id='search' className={styles.search}  />
        
            </form>
        </header>


        <ul>
        
        {movies.map(movie => (
            <>
            <main className={styles.main}>
                <div className={styles.movie}>
                    <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>{movie.title}</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Original Language</h3>
                        <p>{movie.original_language}</p>
                    </div>
                </div>
            
            </main>

            </>
        ))}

        {movies2.map(movie => (
            <>
            <main className={styles.main}>
                <div className={styles.movie}>
                    <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="Image" />
                    <div className={styles.movieinfo}>
                        <h3>{movie.title}</h3>
                    </div>
                    <div className={styles.overview}>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Original Language</h3>
                        <p>{movie.original_language}</p>
                    </div>
                </div>
            
            </main>

            </>
        ))}

      </ul>
    </body>
    
  )
}
