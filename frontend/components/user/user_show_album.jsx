import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

class UserShowAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault;
        this.props.deleteAlbum(this.props.album.id);
    }


    render(){
        const { currentUser, album, photos } = this.props;
        const style = {
            backgroundImage: 'url(' + photos[album.photos[0].id].pictureUrl + ')'
        }

        const albumDelete = album && album.user_id == currentUser.id ? (
            <button
                className="album-delete-button"
                onClick={this.handleDelete}
                type="button"
            >
                <BsTrash size="18"/>
            </button>
        ) : (null)

        let numPhotos;
    
        if (album.photos.length === 1) {
            numPhotos = "Photo";
        } else {
             numPhotos = "Photos";
        }

        return (
            <div className="album-item" style={photos[album.photos[0].id] ? style : null}>
                <Link to={`/users/${currentUser.id}/albums/${album.id}`}>
                    <div className="album-overlay">
                        <h4 className="album-name">{album.name}</h4>
                        <p className="num-photos">{album.photos.length} {numPhotos}</p>
                    </div>
                </Link>
                <div className="album-actions">
                    {albumDelete}
                </div>
            </div>
        )
        
    }

}

export default UserShowAlbum;
