import React from 'react';
import TagFormContainer from './tag_form_container';
// import TagsIndexItemContainer from './tags_index_item_container'


class TagsIndex extends React.Component {
    constructor(props){
        super(props);
        // this.toggleTagForm = this.toggleTagForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTags();
    }

    // toggleTagForm() {
    //     debugger
    //     document.getElementsByClassName("tag-form").classList.remove("hidden");
    // }

    render(){
        const { tags, photoId, photoOwnerId, currentUser } = this.props;

        const photoTags = tags.filter(tag => {
            return parseInt(tag.photo_id) == photoId;
        });

        let addTags;
        let tagForm;

        if ( currentUser.id == photoOwnerId){
            addTags = ( 
                <button
                    className="toggle-tag-form"
                    onClick={this.toggleTagForm}
                >
                    Add tags
                </button>
            )
            tagForm = <TagFormContainer photoId={photoId}/>;
        } else {
            addTags = null;
            tagForm = null;
        }

        return (
            <div>
                <div>
                    Tags
                    {addTags}
                </div>
                <div>
                    {tagForm}
                    {/* {photoTags.map(tag => {
                        return (
                            <TagsIndexItemContainer key={tag.id} tag={tag} photoOwnerId={photoOwnerId} />
                        )
                    })} */}
                </div>

            </div>
        )
    }
}

export default TagsIndex