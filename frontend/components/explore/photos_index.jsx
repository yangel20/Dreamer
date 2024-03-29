import React from 'react';
import { Link } from 'react-router-dom';
import PhotosIndexItem from './photos_index_item';
// import { url_for} from 'flask'; 

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.fetchAllPhotos();
        this.props.fetchAllUsers();
    }



    render(){

        const { photos, users } = this.props;

        return (
            <div className="outter-photo-container">
                <h1 className="explore" >Explore</h1>
                <div className="photo-container">

                {photos.map(photo => photo.id && photo.pictureUrl !== "" ?
                <PhotosIndexItem key={photo.id} photo={photo} username={users[photo.user_id].username} />
                : null
                )}
                </div>
                <div className="space"/>
            </div>
        )
    }
};

export default PhotoIndex;

// {photos.map(photo => photo.id && photo.pictureUrl !== "" ?
// <PhotosIndexItem key={photo.id} photo={photo} username={users[photo.user_id].username} />
// : null
// )}