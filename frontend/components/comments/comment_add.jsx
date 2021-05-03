import React from 'react'

class CommentAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photo_id: this.props.photoId,
            body: ""
        }
        this.handleImput= this.handleImput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUpdate() {
        if (this.state.photo_id !== this.props.photoId) {
            this.setState({ photo_id: this.props.photoId });
        }
    }

    handleImput() {
        return (e) => {
            e.preventDefault();
            this.setState({ body: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({ comment: this.state });
        this.setState({ body: "" });
    }

    render() {
        let disabled;

        if (this.state.body !== "") {
            disabled = false;
        } else {
            disabled = true;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    onChange={this.handleImput()}
                    value={this.state.body}
                    id=""
                    placeholder="Add a comment"
                ></textarea>
                <input 
                    value="Comment"
                    type="submit"
                    disabled={disabled}
                />
            </form>
        )
    }
}

export default CommentAdd;