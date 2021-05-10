import React from 'react';

class TagsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photo_id: this.props.photoId,
            name: ""
        }
        this.handleInput= this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUpdate() {
        if (this.state.photo_id !== this.props.photoId) {
            this.setState({ photo_id: this.props.photoId });
        }
    }

    handleInput() {
        return (e) => {
            e.preventDefault();
            this.setState({ name: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.name !== "") {
            this.props.createTag({ tag: this.state });
            this.setState({ name: "" });
        } else {
            null
        }
    }

    render() {
        let submitOffFocus;

        this.state.name !== "" ? submitOffFocus = this.handleSubmit
         : 
        submitOffFocus = null;
        
        return (
            <form
            className="hidden"
            id="toggle-unhidden"
            onSubmit={this.handleSubmit} 
            >
                <input
                    className="input-tag-name"
                    type="text"
                    onChange={this.handleInput()}
                    value={this.state.name}
                    placeholder="Add a tag"
                    onBlur={submitOffFocus}
                />

            </form>
        )
    }
}

export default TagsForm;