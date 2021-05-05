import React from 'react';

class TagForm extends React.Component {
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
        debugger
        return (e) => {
            e.preventDefault();
            this.setState({ name: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTag({ tag: this.state });
        this.setState({ name: "" });
    }

    render() {
        let submitOffFocus;

        this.state.name !== "" ? submitOffFocus = this.handleSubmit
         : 
        submitOffFocus = null;
        
        return (
            <form
            className="form-input-tag-name"
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

    // comeback to this
    // render() {
    //     let submitOffFocus;
    //     let handleInput;
    //     if (this.state.name !== "") {
    //         submitOffFocus = (this.handleSubmit);
    //         handleInput = (this.handleInput());
    //      } else {
    //         submitOffFocus = (null);
    //         handleInput = (null);
    //     }

    //     return (
    //         <form
    //         className="form-input-tag-name"
    //         onSubmit={this.handleSubmit} 
    //         >
    //             <input
    //                 className="input-tag-name"
    //                 type="text"
    //                 onChange={handleInput}
    //                 defaultValue={this.state.name}
    //                 placeholder="Add a tag"
    //                 onBlur={submitOffFocus}
    //             />

    //         </form>
    //     )
    // }
}

export default TagForm;