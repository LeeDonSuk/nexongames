// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../page/css/index.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function BannerSlide() {
    const [movies, setMovies] = useState([]);
    const apiKey = 'b9b65aaad1b0cf8bc13821c669ff4950';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=3`;
    const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch(popularApi)
            .then(response => response.json())
            .then(data => {
                setPopularMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching popular movies:', error);
            });
    }, []);

    return (
        <div className='main'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <div className='swiper-slide' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
                            <div className='movietext'>
                            </div>
                            <div>
                                <img src={` https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='box-contianer'>
                <h1>인기 영화</h1>
                    {popularMovies.map(popularMovie => (
                <div className='box' data-title={popularMovie.title}>
                        <img key={popularMovie.id} src={`https://image.tmdb.org/t/p/w500/${popularMovie.poster_path}`} alt={popularMovie.title} />
                </div>
                    ))}
            </div>

        </div>
    );
}
