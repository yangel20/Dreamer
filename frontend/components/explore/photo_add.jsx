import React from 'react';

class PhotoAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="btn-upload-container">
                <div className="btn-words">Choose Photo to upload</div>
                <input className="btn-upload" type="file" accept=".png .jpg .jpeg" multiple />

            </div>
        )
    }
}

export default PhotoAdd;