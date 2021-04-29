import React from 'react';
import CommentsIndexContainer from '../comments/comments_index_container';

class PhotoShow extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        photo_id: this.props.photo.id
      }
      
      this.deletePhotoInfo = this.deletePhotoInfo.bind(this);
    }

    componentDidMount(){
      this.props.fetchPhoto(this.props.match.params.photoId);
    }

    // delete photo !! 
    deletePhotoInfo(){
      this.props.deletePhoto(this.state.photo_id).then(this.props.history.push("/explore"));
    }

    render() {
        return (
          <div>
            <div className="photo-show-container">
              <img className="img-photo-show" src={this.props.photo.pictureUrl} />
              {(this.props.photo.user_id === this.props.currentUser ) ?
              (<button className="Delete-btn" onClick={this.deletePhotoInfo}> Delete </button>):
              (null)}
            </div>
            <div className="photo-show-detail-container">
              <div className="title-description">
                <div className="title-photo-show">{this.props.photo.title}</div>
                <div className="description-photo-show">{this.props.photo.description}</div>
              </div>
            </div>
              <CommentsIndexContainer photoId={this.props.photo.id} photoOwnerId={this.props.photo.user_id}/>
          </div>
        )
    }
}

export default PhotoShow;