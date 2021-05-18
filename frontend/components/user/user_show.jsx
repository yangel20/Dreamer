import React from 'react';
import UserHeader from './user_header';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchAllPhotos();
        this.props.fetchAllAlbums();
    }

    componentDidUpdate(prevProps) {
        if (this.props.photos.length !== prevProps.photos.length) {
            this.props.fetchAllPhotos();
        }
    }


    render() {
        const { user, photos, albums, location, currUserId} = this.props;
        debugger
        const userPhotos = photos.filter(photo => {
            return parseInt(photo.user_id) === user.id;
        });


        return (

            <div className="user-container">
                <UserHeader user={user} photos={userPhotos} />
                <div className="user-subheader-container">
                    <div className="user-subheader">
                        <Link>
                            Photostream
                        </Link>
                        <Link>
                            Albums
                        </Link>
                    </div>
                </div>
                <div className="space">
                </div>
            </div>
        )
    }
};
export default UserShow;