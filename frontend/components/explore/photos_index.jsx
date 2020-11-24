import React from 'react'

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchAllPhotos();
    }

    render(){
        // debugger
        // if (this.props.photos === undefined) {
        //     return <span>No photo yet!</span>;
        //   } 
        // console.log(this.props)
         
        // const allPhotos = this.props.photos;

        const allPhotos = this.props.photos.map(photo => {
            return <img className={photo.id} src={photo.pictureUrl} key={photo.id}/>
        })
        
        return (
            <div className="photos-conatainer">
               
                {allPhotos}
                
            </div>
        )
    
    }
    
   
};

export default PhotoIndex;