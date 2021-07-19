import React from "react";
import PropTypes, { arrayOf } from "prop-types";

function Movie({id, title, summary, poster,genres, year}) {
    return(
        
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">
                    {title}
                </h3>
                <h3 className="movie_year">{year}</h3>
                <ul className="geners">
                    {genres.map( items => {
                        return(
                            <li className="genres_genre">{items}</li>
                        )
                    })}
                </ul>
                <h4 className="movie_summary">{summary}</h4>
                
            </div>
        </div>
        

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;