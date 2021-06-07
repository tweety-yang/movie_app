import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    render() {
        const {location} = this.props;
        // console.log(location.state);
        return (
            <div className="detail">
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
            <div className="detail_data">
                <h3 className="detail_title" style={{backgroundColor:"#eee"}}>{location.state.title}</h3>
                <h4 className="detail_year">{location.state.year}</h4>
                <ul className="detail_genres">
                    {location.state.genres.map( (genre, index) => {
                        return (
                            <li key={index} className="detail_genre">{genre}</li>
                        );
                    })}                  
                </ul>
                <p className="detail_summary">{location.state.summary.slice(0,180)}...</p>
            </div>
        </div>
        )
    }
}

export default  Detail;
