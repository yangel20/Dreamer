import React from 'react';
import { Link } from 'react-router-dom';
import AlbumShowItem from './album_show_item'

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId);
    }




    render(){
        const { photos, album, users, currentUser } = this.props;
        

        if (album) {
            const style = {
                backgroundImage: 'url(' + photos[album.photo_ids[0]].pictureUrl + ')'
            }

            let numPhotos;

            if (album.photos.length === 1) {
                numPhotos = "photo";
            } else {
                numPhotos = "photos";
            }

            let description;
            if (album.description === null) {
                description = "No description";
            } else {
                description = album.description
            }



            return (
                <div className="show-album-container">
                    <div className="album-info" style={style} >
                        <div className="dim">
                            <div className="album-info-head">
                                <h3>{album.name}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="num-photos">
                                <p className="num-photos">{album.photos.length} {numPhotos}</p>
                            </div>
                            <div className="album-return-link">
                                <Link to={`/users/${album.user_id}`}> By: {users[album.user_id].username}</Link>
                            </div>
                        </div>
                    </div> 
                    <div className="outter-photo-container-2">
            
               

                            {album.photos.map(photo => <AlbumShowItem key={photo.id} photo={photo} photos={this.props.photos} username={currentUser.username} albumId={album.id} />)}

                         
                    <div/>
                    </div>
                    <div className="space"/>
                </div>
            );
        } else {
            return (
                <p>loading album</p>
            );
        }

    }
}



export default AlbumShow;
