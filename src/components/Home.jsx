import { useState } from "react"
function SingleMovieComponent(props) {
    return (
        <>

            <h2>
                {props.title}
            </h2>
            <img src={props.photo} />


        </>
    )
}
export default function Home() {
    const [horrorMovies, setHorrorMovies] = useState()
    const buttonClick = () => {
        fetch('https://api.sampleapis.com/movies/horror')
            .then(res => res.json())
            .then(data => setHorrorMovies(data))
            .catch(err => console.error(err))

    }
    return (
        <>

            {(!horrorMovies) ?

                <button onClick={() => buttonClick()} >Get Horror Movies</button>
                : horrorMovies.map((singleMovie) => {
                    return (
                        <SingleMovieComponent photo={singleMovie.posterURL} title={singleMovie.title} />
                    )
                }
                )
            }
        </>
    )
}
