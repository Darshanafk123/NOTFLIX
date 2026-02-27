function Moviecard({movie}){
    function onFavouriteClick(){
        alert("clicked")
    }
    return<div className="movie card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.tilte}/>
            <div className="movie-overlay">
                <button className="favourite-btn" onClick = {onFavouriteClick}>
                    @
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div>
    
}
export default Moviecard;