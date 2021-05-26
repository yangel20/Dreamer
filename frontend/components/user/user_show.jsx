import React from 'react';
import UserHeader from './user_header';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';
import UserShowAlbum from './user_show_album'

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTabs() {
        if (this.props.location.pathname.includes("albums")) {
            let albumClasses = document.getElementById("user-show-albums-link").classList;
            albumClasses.add("selected");
        } else {
            let photostreamClasses = document.getElementById("user-show-photostream-link").classList;
            photostreamClasses.add("selected");
        }
    }


    componentDidMount() {
        this.props.fetchAllPhotos();
        this.props.fetchAllAlbums();
    }

    componentDidUpdate(prevProps) {
        if (this.props.photos.length !== prevProps.photos.length) {
            this.props.fetchAllPhotos();
        }

        let tabsClasses = document.querySelectorAll(".user-show-tab");
        tabsClasses.forEach(tab => {
            tab.classList.remove("selected");
        });
        this.handleTabs();
    }




    render() {
        const { user, photos, albums, location, currUserId, currentUser} = this.props;
        const userPhotos = Object.values(photos).filter(photo => {
            return parseInt(photo.user_id) === user.id;
        });
       

        const userAlbums = albums.filter(album => {
            return parseInt(album.user_id) === user.id;
        });

     
        const albumOwner = location.pathname.includes(currUserId);

        let display;

        if (this.props.location.pathname.includes("albums")) {
            // when albums if pressed in user subheader
            if (userAlbums.length === 0 && albumOwner) {
                display = (
                    <div className="albums-body">
                        <div className="albums-toolbar">
                            <Link to="/photos/organize/new_set">
                                <p>New album</p>
                            </Link>
                        </div>
                        <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
                    </div>
                )
            } else if (userAlbums.length > 0 && albumOwner){
                display = (
                    <div className="albums-body">
                        <div className="albums-toolbar">
                            <Link className="link-to-new-album" to="/photos/organize/new_set">
                                <i className="img-new-album"></i>
                                <p>New album</p>
                            </Link>
                        </div>
                        <div className="albums-array">
                            <div className="albums-grid">
                                {userAlbums.map(album => <UserShowAlbum key={album.id} album={album} photos={photos} currentUser={currentUser} deleteAlbum={this.props.deleteAlbum} history={this.props.history} />)}
                            </div>
                            <div className="space">
                            </div>
                        </div>
                    </div>
                )
            } else if (userAlbums.length === 0 && !albumOwner) {
                display = (
                    <div className="albums-body">
                        <p className="no-album-text">{this.props.user.username} does not have any albums.</p>
                    </div>
                )
            } else if (userAlbums.length > 0 && !albumOwner){
                display = (
                    <div className="albums-body">
                        <div className="albums-array">
                            <div className="albums-grid">
                                {userAlbums.map(album => <UserShowAlbum key={album.id} album={album} photos={photos} currentUser={currentUser} deleteAlbum={this.props.deleteAlbum} history={this.props.history} />)}
                            </div>
                            <div className="space">
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if (userPhotos.length === 0) {
                display = (
                    <div className="photo-container">
                        <p>{this.props.user.username} does not have any photos.</p>
                    </div>
                )

            } else {
                display = (
                    <div className="outter-photo-container">
                        <div className="photo-container">
                            {userPhotos.map(photo =>
                            <UserShowItem key={photo.id} photo={photo} username={user.username} />
                            )}
                        </div>
                        <div className="space">
                </div>
                    </div>
                )
            }
        }




        return (

            <div className="user-container">
                <UserHeader user={user} photos={userPhotos} />
                <div className="user-subheader-container">
                    <div className="user-subheader">
                        <Link
                            to={`/users/${user.id}`}
                            id="user-show-photostream-link"
                            className="user-show-tab">
                            Photostream
                        </Link>
                        <Link
                           to={`/users/${user.id}/albums`}
                           id="user-show-albums-link"
                           className="user-show-tab">
                            Albums
                        </Link>
                    </div>
                </div>

                {display}

            </div>
        )
    }
};
export default UserShow;