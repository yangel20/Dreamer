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
            return <img src={photo.pictureUrl} key={photo.id} />
        })
        
        return (
            <div>
                {/* { this.props.photos.length > 0 ? 
                
                (<img src={allPhotos[0].pictureUrl} /> ): "not working"} */}
                {allPhotos}


                {/* <img src={allPhotos[0].pictureUrl} />  */}
                {/* <span>{this.props.photos.pictureUrl}</span>
                <img src={this.props.photos.pictureUrl} /> */}
                {/* <li>{this.props}</li> */}
                {/* <h1>yerrrrrr</h1> */}
                
            </div>
        )
    
    }
    
   
};

export default PhotoIndex;