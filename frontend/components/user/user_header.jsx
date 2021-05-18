import React from 'react';

class UserHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { user, photos } = this.props;
        let numPhotos;

        if (photos.length > 1) {
            numPhotos = "Photos";
        } else if (photos.length === 1) {
            numPhotos = "Photo";
        } else {
            numPhotos = "Photos";
        }

        return (
            <div className="user-header-container">
                <div className="user-header-gradient">
                    <div className="user-header-info">
                        <h1>{user.username}</h1>
                        <div className="email-number-of-photo">
                            <p>{user.email}</p>
                            <p>{photos.length} {numPhotos}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHeader;