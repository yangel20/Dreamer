import React from 'react';
import {TiTimes} from 'react-icons/ti'
import { Link } from 'react-router-dom';

class TagsIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTag(this.props.tag.id);
    }



    render() {
        const { tag , currentUser, photoOwnerId } = this.props;
         
         let deleteTag;

        if (currentUser.id == photoOwnerId) {
            deleteTag = (
                <button
                    className="tag-delete-btn"
                    onClick={this.handleDelete}
                    type="button"
                >
                    <TiTimes/>
                </button>
            )
        } else {
            deleteTag = null;
        }
        return (
            <div className="tag-container">

                    <Link className="tag-name" to={`/photos/tag/${tag.name}`}> {tag.name} </Link>
                    {deleteTag}

            </div>
        )
    }

}

export default TagsIndexItem;