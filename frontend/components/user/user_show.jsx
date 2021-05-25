import React from 'react';
import UserHeader from './user_header';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchAllPhotos();
        this.props.fetchAllAlbums();
    }

    componentDidUpdate(prevProps) {
        if (this.props.photos.length !== prevProps.photos.length) {
            this.props.fetchAllPhotos();
        }
    }


    render() {
        const { user, photos, albums, location, currUserId} = this.props;
        const userPhotos = photos.filter(photo => {
            return parseInt(photo.user_id) === user.id;
        });

        const albumOwner = location.pathname.includes(currUserId);

        // let display;

        // if (this.props.location.pathname.includes("albums")) {
        //     if (userAlbums.length === 0 && albumOwner) {
        //         display = (
        //             <div className="albums-body">
        //                 <div className="albums-toolbar">
        //                     <Link to="/photos/organize/new_set">
        //                         <p>New album</p>
        //                     </Link>
        //                 </div>
        //                 <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
        //             </div>
        //         )
        //     } else if (userAlbums.length > 0 && albumOwner){
        //         display = (
        //             <div className="albums-body">
        //                 <div className="albums-toolbar">
        //                     <Link to="/photos/organize/new_set">
        //                         <p>New album</p>
        //                     </Link>
        //                 </div>
        //                 <div className="albums-array">
        //                     <div className="albums-grid">
        //                         {userAlbums.map(album => <UserShowAlbum key={album.id} album={album} photos={photos} currentUser={user} deleteAlbum={this.props.deleteAlbum} history={this.props.history} />)}
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     } else if (userAlbums.length === 0 && !albumOwner) {
        //         display = (
        //             <div className="albums-body">
        //                 <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
        //             </div>
        //         )
        //     }  else if (userAlbums.length > 0 && !albumOwner){
        //         display = (
        //             <div className="albums-body">
        //             </div>

        //         )
        // }




        return (

            <div className="user-container">
                <UserHeader user={user} photos={userPhotos} />
                <div className="user-subheader-container">
                    <div className="user-subheader">
                        <Link>
                            Photostream
                        </Link>
                        <Link>
                            Albums
                        </Link>
                    </div>
                </div>
                <div className="outter-photo-container">

                    <div className="photo-container">
                        {userPhotos.map(photo =>
                        <UserShowItem key={photo.id} photo={photo} username={user.username} />
                        )}
                    </div>
                </div>
                <Link to="/photos/organize/new_set">
                    <p>New album</p>
                </Link>
                <div className="space">
                </div>
            </div>
        )
    }
};
export default UserShow;