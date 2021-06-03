import React from 'react';


class PhotoAddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.file.file.name,
            description: ""
        }
    }

    render(){
        const { file, handleInput, select } = this.props;
        return (
            <button 
                onClick={select(file.index)}
                className={`thumbnail-container${file.index}`} >
                <div 
                    className={`thumbnail-${file.index}`} 
                >
                    <img 
                        className={`thumbnail-photo${file.index}`} 
                        src={file.url}
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="Add a title"
                        defaultValue={this.state.title}
                        onChange={handleInput(file.index, "titles")}
                    />
                    <textarea
                        rows="2"
                        placeholder="description goes here"
                        onChange={handleInput(file.index, "descriptions")}
                    ></textarea>
                </div>
            </button>
        )
    }

}
export default PhotoAddItem;