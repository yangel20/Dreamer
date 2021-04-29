import React from 'react';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllComments();
        // debugger
    }

    
    render() {
        const { comments, photoId, photoOwnerId } = this.props;
        // const photoComments = comments.filter(comment => {
        //     return parseInt(comment.photo_id) == photoId;
        // })

        return (
            <div>
                
            </div>
        )
    }
}

export default CommentsIndex;