import React from 'react';
import { Link } from 'react-router-dom';
// import { url_for} from 'flask'; 

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchAllPhotos();
        debugger
    }

    render(){
        // if (this.props.photos === undefined) {
        //     return <span>No photo yet!</span>;
        //   } 
        // console.log(this.props)
         
        // const allPhotos = this.props.photos;

        // const allPhotos = this.props.photos.map(photo => {
        //     return <img className={photo.id} src={photo.pictureUrl} key={photo.id}/>
        // })
        debugger
        return (
            // <div className="photos-conatainer">
            //     {allPhotos}
            // </div>


            <div className="main-photo-index-div">

            <div className="photos-container">
            <ul className="photos-ul">
                {
                this.props.photos.map(photo =>
                    <div className="photo-box" key={photo.id}>

                    {/* <div className="photo-index-user-info">
                        <Link
                        className="photo-index-username"
                        to={`/users/${photo.user.id}`}>
                        {photo.user.username}
                        </Link>
                        <h2 className="featured">Featured</h2>
                    </div> */}

                    <div className="inner-box">
                        <Link className="link-photo" to={`photos/${photo.id}`}>
                            <img className="index-photo" src={photo.pictureUrl} />
                        </Link>
                    </div>
                        <div className="photo-title-container">
                            <div className="photo-title">{photo.title}</div>
                            <div className="photo-arthur">{}</div>
                        </div>

                    </div>
                )}
            </ul>
            </div>
        </div>
        )
    
    }
    
   
};

export default PhotoIndex;