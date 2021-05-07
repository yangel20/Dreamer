import React from 'react';
import TagsFormContainer from './tags_form_container';
import TagsIndexItemContainer from './tags_index_item_container'


class TagsIndex extends React.Component {
    constructor(props){
        super(props);
        // this.toggleTagForm = this.toggleTagForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTags();
        debugger
    }

    // toggleTagForm() {
    //     debugger
    //     document.getElementsByClassName("tag-form").classList.remove("hidden");
    // }

    render(){
        const { tags, photoId, photoOwnerId, currentUser } = this.props;
        debugger
        const photoTags = tags.filter(tag => {
            return parseInt(tag.photo_id) == photoId;
        });
        debugger

        let addTags;
        let tagForm;

        if ( currentUser.id == photoOwnerId){
            addTags = ( 
                <button
                    className="toggle-tag-form"
                    // onClick={this.toggleTagForm}
                >
                    Add tags
                </button>
            )
            tagForm = <TagsFormContainer photoId={photoId}/>;
        } else {
            addTags = null;
            tagForm = null;
        }

        return (
            <div className="tag-context-container">
                <div className="tags-addtags">
                    <div>

                        Tags
                    </div>
                    <div>
                        {addTags}

                    </div>
                </div>
                    {tagForm}
                <div className="all-tags-container">
                    {photoTags.map(tag => {
                        debugger
                        return (
                            <TagsIndexItemContainer key={tag.id} tag={tag} photoOwnerId={photoOwnerId} />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default TagsIndex