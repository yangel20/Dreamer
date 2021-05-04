import React from 'react';
import { BsTrash } from 'react-icons/bs';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete= this.handleDelete.bind(this);
    }


    handleDelete() {
        this.props.deleteComment(this.props.comment.id)
    }
    
    render() {
        let deleteComment;
        const { comment, users, currentUser, /*photoOwnerId*/ } = this.props;
        currentUser.id === comment.user_id ?
            deleteComment = (
                <div
                className="comment-delete-btn"
                onClick={this.handleDelete}
                >
                <BsTrash size="18" />
                </div>
            )
            :
            deleteComment = (null);

        return (

    
            <div className="comment-container">
                <div>
                    <h3 className="comment-username" >{users[comment.user_id].username}</h3>
                    <p className="comment-body" >{comment.body}</p>
                </div>
                {deleteComment}
            </div>
        )
    }
}

export default CommentsIndexItem;