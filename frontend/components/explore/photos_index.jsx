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

        // return (
        // <div className="photo-container">
        //     {this.props.photos.map(photo =>
        //     <div className="photo-box" key={photo.id}>


        //     <div className="inner-box">
        //         <Link className="link-photo" to={`photos/${photo.id}`}>
        //             <img className="index-photo" src={photo.pictureUrl} />
        //         </Link>
        //         <div className="photo-title">
        //             <div >{photo.title}</div>
        //             <div className="photo-arthur">by {this.props.users[photo.user_id].username}</div>
        //         </div>
        //     </div>


        //     </div>
        //     )}
        // </div>
           
        // );

        const { photos, users } = this.props;

        return (
            <div className="outter-photo-container">
                <h1 className="explore" >Explore</h1>
                <div className="photo-container">

                    {photos.map(photo =>
                    <PhotosIndexItem key={photo.id} photo={photo} username={users[photo.user_id].username} />
                    )}
                </div>
                <div className="space"/>
            </div>
        )
    }
};

export default PhotoIndex;