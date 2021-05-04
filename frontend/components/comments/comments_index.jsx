import React from 'react';
import CommentsIndexItemContainer from './comments_index_item_container';
import CommentAddContainer from './comment_add_container';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments();
    }

    
    render() {
        const { comments, photoId, photoOwnerId } = this.props;
        const photoComments = comments.filter(comment => {
            return parseInt(comment.photo_id) == photoId;
        });

        return (
            <div>
                <div>{photoComments.map(comment => {

                    return <CommentsIndexItemContainer key={comment.id} comment={comment} />
                })}
                </div>
                <CommentAddContainer photoId={photoId}/>

            </div>

        )
    }
}

export default CommentsIndex;