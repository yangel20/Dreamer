import React from 'react';
import { BsCaretRightFill } from 'react-icons/bs';
import TagShowItem from './tag_show_item';

class TagShow extends React.Component {
    constructor(props) {
        super(props);
        this.onlyUnique = this.onlyUnique.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllPhotos();
        this.props.fetchAllUsers();
        this.props.fetchAllTags();
    }


    onlyUnique(val, idx, self) {
        return self.indexOf(val) == idx;
    }

    render() {
        const { photos, tags, users } = this.props;

        let tagName = this.props.location.pathname.split("/")[3];
        let filteredTags = tags.filter(tag => tag.name == tagName);
        let tagPhotoIds = filteredTags.map(tag => tag.photo_id);
        let uniqueTagPhotoIds = tagPhotoIds.filter(this.onlyUnique);

        if (Object.keys(photos).length > 0 && tagPhotoIds.length > 0) {
            return (
                <div className="outter-photo-container">
                    <h1 className="explore" > Tags <BsCaretRightFill size="15"/> {tagName} </h1>
                    <div className="photo-container">

                        {uniqueTagPhotoIds.map(photoId => photos[photoId] ?
                        <TagShowItem key={photoId} photo={photos[photoId]} username={users[photos[photoId].user_id].username} tag={tagName}/>
                        : null
                        )}
                    </div>
                    <div className="space" />
                </div>
            )
        } else {
            return (
                <div className="outter-photo-container">
                    <h1 className="explore" > no photo with {tagName} </h1>
                    <div className="photo-container">
                    </div>
                </div>
            )
        } 
    }
}

export default TagShow;