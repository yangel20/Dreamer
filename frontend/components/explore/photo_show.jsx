import React from 'react';

class PhotoShow extends React.Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
        this.props.fetchPhoto(this.props.match.params.photoId);
    }


    render() {
  
        return (
          <div>
            <div className="photo-show-container">
              <img className="img-photo-show" src={this.props.photo.pictureUrl} />
            </div>
            <div className="photo-show-detail-container">
              <div className="title-description">
                <div className="title-photo-show">{this.props.photo.title}</div>
                <div className="description-photo-show">{this.props.photo.description}</div>
              </div>
            </div>
          </div>
        )
    }
}

export default PhotoShow