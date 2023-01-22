import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
    const param = useParams();
    console.log(params);


    return (
        <div>
            {}
            <h3>Movies Show Component!</h3>
            <h3>{movies[params.movieId].tittle}</h3>
        </div>
    );
}

export default MovieShow;