import React from 'react';
import PhotoAddItem from './photo_add_item';
import { FcRemoveImage, FcAddImage } from 'react-icons/fc';


class PhotoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            titles: [],
            descriptions: [],
            selected: null
        }

        this.deleteThumbnail = this.deleteThumbnail.bind(this);
        this.deselect = this.deselect.bind(this);
        this.select = this.select.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    

    select(id) {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            const image = document.getElementsByClassName(`thumbnail-${id}`);
            this.deselect(e);
            image[0].classList.add("selected-thumbnail");
            this.setState({ selected: id });
        };
    }

    deselect(e) {
        e.preventDefault();
        e.stopPropagation();
        const selectedImages = document.getElementsByClassName("selected-thumbnail");
        Array.from(selectedImages).map(image => {
            return image.classList.remove("selected-thumbnail");
        });
        this.setState({ selected: null });
    }
    
    deleteThumbnail(){
        const ns = Object.assign({}, this.state);
        const index = this.state.selected;
        delete ns.files[index];
        delete ns.titles[index];
        delete ns.descriptions[index];
        ns.selected = null;
        this.setState(ns);
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
        let i = 0;
        let j = 0;

        while ( i < uploadFile.length ) {
            if ( nextState.files[j] !== undefined ) {
                j++;
            } else {
                nextState.files[j] = {
                    file: uploadFile[i],
                    url: URL.createObjectURL(uploadFile[i]),
                    index: j
                }
                nextState.titles[j] = {
                    value: this.state.files[j].file.name
                }
                nextState.descriptions[j] = {
                    value: ""
                }
                i++;
            }
        }
        this.setState({ photoFile: e.target.files[0] })
        
    }

    handleSubmit(){ 
        //appending the data to the photo in the back end and uploading the photo
        //when information is done iterating through all files inside filesUploaded sends user to explore page
        const state = this.state;
        let filesUploaded = 0;
        while (filesUploaded < state.files.length) {

            let photoData = new FormData();
            photoData.append('photo[description]', state.descriptions[filesUploaded].value === "" ? "No Description" : state.descriptions[filesUploaded].value);
            photoData.append('photo[title]', state.titles[filesUploaded].value === "" ? "Untitled" : state.titles[filesUploaded].value);
            photoData.append('photo[picture]', state.files[filesUploaded].file);
            this.props.createPhoto(photoData)
                .then(filesUploaded++);
        };

        if (filesUploaded === state.files.length) {
            this.props.history.push("/explore");
        }
    }



    render(){
        
        const numPhotosNav = this.state.files.filter(Boolean).length;
        
        const numPhotos = this.state.files.filter(Boolean).length;
        let uploadBtnCenter = numPhotos === 0 ?(
            <div className="btn-upload-container">
                    <div className="btn-words">Choose Photo to upload</div>
                    <input className="btn-upload" type="file"  multiple onChange={this.handleFile} />
            </div>
        ) : (null);

        let navDeleteBtn = numPhotosNav > 0 ? (
            <button className="nav-btn-delete" onClick={this.deleteThumbnail} >
                <FcRemoveImage size="23" /> Remove
            </button>)
        : (null);

 
        const thumbails = this.state.files.map(file => {
            return (
                <PhotoAddItem
                    key={file.index}
                    file={file}
                    handleInput={this.handleInput}
                    select={this.select}
                    deselect={this.deselect}
                    multiple
                />
            );
        })

      

        return (
            <div className="photo-upload-container">
                <div className="photo-upload-nav">
                    <div>
                        <button className="nav-btn-upload">
                            <label htmlFor="nav-btn-upload">
                                <FcAddImage size="23" /> ADD
                            </label>
                            <input className="nav-btn-upload-input" id="nav-btn-upload" type="file"  multiple onChange={this.handleFile} />
                        </button>
                        {navDeleteBtn}
                    </div>
                    <button className="nav-btn-submit" onClick={this.handleSubmit} >Upload {numPhotosNav} Photo</button>
                </div>
                {uploadBtnCenter}
                <div className="all-thumbnails">
                    {thumbails}
                </div>
            </div>
        )
    }
}

export default PhotoAdd;