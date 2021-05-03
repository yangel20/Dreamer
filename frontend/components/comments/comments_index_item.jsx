import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete= this.handleDelete.bind(this);
    }
    
    render() {
        let deleteComment;
        const { comment, users, currentUser, /*photoOwnerId*/ } = this.props;

        currentUser.id === comment.user_id ?
            deleteComment = (
                <button
                onClick={this.handleDelete}
                >

                </button>
            )
            :
            deleteComment = (null);
        return (

    
            <div>
                <div>
                    <h3>{users[comment.user_id].username}</h3>
                    <p>{comment.body}</p>
                </div>
                {deleteComment}
            </div>
        )
    }
}

export default CommentsIndexItem;