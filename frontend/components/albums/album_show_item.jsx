import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { photo, username, photos } = this.props;
        return(
            <div className="photos-container">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photos[photo.id].pictureUrl} alt={photo.description} />
                </Link>
                <div className="title-username">
                    <p> {photo.title}</p>
                    <Link className="title-username-link" to={`/users/${photo.user_id}`}>
                        by {username}
                    </Link>
                </div>
            </div>
        )
    }
}

export default AlbumShowItem;