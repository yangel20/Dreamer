import React from 'react'

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllPhotos();
    }

    render(){
         
        return (
            <>
            {/* console.log(this.props) */}
            {/* <li>{this.props}</li> */}
            {/* <h1>yerrrrrr</h1> */}
            </>
        )
    
    }
    
   
};

export default PhotoIndex;