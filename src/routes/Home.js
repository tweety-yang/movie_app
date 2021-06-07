import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log(movies);
    this.setState({isLoading: false , movies});//키:키값 이름이 동일하면 하나만 쓴다 movies:movise를 movies 하나만 씀.
  } 


  componentDidMount() { //생명주기함수는 class형 컴포넌트에서 사용
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }//6초뒤에 setState가 false로 바뀌게

  render() {
    const {isLoading, movies} = this.state;//구조분해할당
    return (
      <>
      <section className="container">
        {isLoading ? (<div className="loader">
          <span className="loader_text">'Loading...'</span></div>) : (<div className="movies">
            {movies.map((movie,index) => (<Movie 
                        key = {index}
                        id = {movie.id}
                        year = {movie.year}
                        title = {movie.title}
                        summary = {movie.summary}
                        poster = {movie.medium_cover_image}
                        genres = {movie.genres}
                        />))}
          </div>)
          }
        </section>
      </>
    )
  }
}

export default Home;