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
        const { file, handleInput } = this.props;
        return (
            <button>
                <div>
                    <img src={file.url}/>
                </div>
                <div>
                    <input 
                        type="text"
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