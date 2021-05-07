import React from 'react';


class TagsIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTag(this.props.tag.id);
    }



    render() {
        debugger
        const { tag , currentUser, photoOwnerId } = this.props;
         
         let deleteTag;

        if (currentUser.id == photoOwnerId) {
            deleteTag = (
                <button
                    className="tag-delete-btn"
                    onClick={this.handleDelete}
                    type="button"
                >
                    X
                </button>
            )
        } else {
            deleteTag = null;
        }
        return (
            <div className="tag-container">

                    <div className="tag-name" > {tag.name} </div>
                    {deleteTag}

            </div>
        )
    }

}

export default TagsIndexItem;