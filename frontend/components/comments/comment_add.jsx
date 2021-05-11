import React from 'react';

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
        let submitBtn;

        if (this.state.body !== "") {
            submitBtn = <input 
            className="comment-box-btn"
                value="Comment"
                type="submit"
            />;
        } else {
            submitBtn = null;
        }

        return (
            <form 
            className="add-comment-container"
            onSubmit={this.handleSubmit}>
                <textarea
                    className="comment-box-photo-show"
                    onChange={this.handleImput()}
                    value={this.state.body}
                    id=""
                    rows="4"
                    placeholder="Add a comment"
                ></textarea>
                {submitBtn}
            </form>
        )
    }
}

export default CommentAdd;