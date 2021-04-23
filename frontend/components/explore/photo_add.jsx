import React from 'react';
import PhotoAddItem from './photo_add_item';

class PhotoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            titles: [],
            descriptions: [],
            


            // title: "we uploaded a picture",
            // description: "hello world we did it",
            // file: null
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }



    handleInput(id, field) {

        return (e) => {
            e.preventDefault();
            let nextState = Object.assign({}, this.state);
            nextState[field][id] = { index: id, value: e.target.value }
            this.setState(nextState);
        }
    }
    

    handleFile(e){
        //this is setting the state to take in muiltiple files, titles, descriptions and assigning it to a index
        // so we can have a refrance to it 
        const nextState = Object.assign({}, this.state);
        const uploadFile = e.currentTarget.files; // focus on all files uploaded after after the imput type file receives them
        debugger
        let i = 0;
        let j = 0;

        while ( i < uploadFile.length ) {
            if ( nextState.files[j] !== undefined ) {
                j++;
            } else {
                nextState.files[j] = {
                    file: uploadFile[j],
                    url: URL.createObjectURL(uploadFile[i]),
                    index: j
                }
                nextState.titles[j] = {
                    value: ""
                }
                nextState.descriptions[j] = {
                    value: ""
                }
                i++;
            }
        }
        debugger
        this.setState({ photoFile: e.target.files[0] })
        
    }

    handleSubmit(){ 
        //appending the data to the photo in the back end and uploading the photo
        //when information is done iterating through all files inside filesUploaded sends user to explore page
        const state = this.state;
        let filesUploaded = 0;
        while (filesUploaded < state.files.length) {
            debugger
            let photoData = new FormData();
            photoData.append('photo[description]', state.descriptions[filesUploaded].value === "" ? "No Description" : state.descriptions[filesUploaded].value);
            photoData.append('photo[title]', state.titles[filesUploaded].value === "" ?  "Untitled" : state.titles[filesUploaded]);
            photoData.append('photo[picture]', state.files[filesUploaded].file);
            debugger
            this.props.createPhoto(photoData)
                .then(filesUploaded++);
        }
        if (filesUploaded === state.files.length) {
            this.props.history.push("/explore")
        }
    }



    render(){
        
        const numPhotos = this.state.files.filter(Boolean).length;
        let uploadBtnCenter = numPhotos === 0 ?(
            <div className="btn-upload-container">
                    <div className="btn-words">Choose Photo to upload</div>
                    <input className="btn-upload" type="file"  multiple onChange={this.handleFile} />
            </div>
        ) : (null);
        
        const thumbails = this.state.files.map(file => {
            return (
                <PhotoAddItem
                    key={file.index}
                    file={file}
                    handleInput={this.handleInput}
                    multiple
                />
            );
        })

      

        return (
            <div className="photo-upload-container">
                {/* <div className="btn-upload-container">
                    <div className="btn-words">Choose Photo to upload</div>
                    <input className="btn-upload" type="file"  multiple onChange={this.handleFile} />
                </div> */}
                {uploadBtnCenter}
                <button onClick={this.handleSubmit} >submit</button>
                {thumbails}
            </div>
        )
    }
}

export default PhotoAdd;