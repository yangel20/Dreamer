import React from 'react';

class PhotoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "we uploaded a picture",
            description: "hello world we did it",
            user_id: this.props.currentUser.id,
            pictureUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        debugger
        this.setState({pictureUrl: URL.createObjectURL(e.currentTarget.files[0])})
        debugger
        // e.preventDefault();
        const photoData = new FormData();
        photoData.append('photo[title]', this.state.title);
        photoData.append('photo[description]', this.state.description);
        photoData.append('photo[photo]', this.state.pictureUrl);
        debugger
        this.props.createPhoto(photoData);
        // this.props.createPhoto(
        //     {title: "we uploaded a picture",
        //     description: "hello world we did it",
        //     user_id: this.props.currentUser.id,
        //     pictureUrl: URL.createObjectURL(e.target.files[0])}
        // )
        debugger
    }



    render(){
        debugger
        return (
            <div className="btn-upload-container">
                <div className="btn-words">Choose Photo to upload</div>
                <input className="btn-upload" type="file"  multiple onChange={this.handleSubmit} />
            </div>
        )
    }
}

export default PhotoAdd;