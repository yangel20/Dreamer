import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
        const { comment, users, currentUser, photoOwnerId } = this.props;
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
                    <Link to={`/users/${comment.user_id}`} className="comment-username" >{users[comment.user_id].username}</Link>
                    <p className="comment-body" >{comment.body}</p>
                </div>
                {deleteComment}
            </div>
        )
    }
}

export default CommentsIndexItem;