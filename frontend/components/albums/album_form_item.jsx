import React from 'react';

class AlbumFormItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        let { handlePhotoClick, pictureUrl } = this.props;

        return (
            <img  src={pictureUrl} onClick={handlePhotoClick} />
        )
    }
}

export default AlbumFormItem;
