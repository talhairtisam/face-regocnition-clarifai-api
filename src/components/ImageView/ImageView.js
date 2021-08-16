import React from 'react';
import { connect } from 'react-redux';
import './face.css';

const ImageView = ({imageUrl,box}) => {
    return (
        <div className="center ImageView">
                <div className="imageContainer">
                    <img id="inputImage" height='auto' width="500px" src={imageUrl} alt="image" />
                    <div className="bounding-box" style={box}></div> 
                </div>
                
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        imageUrl: state.imageUrl,
        box: state.box
    }
}
export default connect(mapStateToProps)(ImageView);