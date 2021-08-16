import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { ImageUrlAction,boxValueAction } from '../../redux/action';
import Clarifai from 'clarifai';



const app = new Clarifai.App({
  apiKey: "9f97986442c44a128af3f4d83d3c4fff"
});

const Form = ({imageUrl,imageUrlLink,setBoxValue}) => {
    
    const [inputText,setInputText] = useState("");

    const calculateBox= (res) => {
        const clarifaiFace = res.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("inputImage");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            left: clarifaiFace.left_col * width,
            top: clarifaiFace.top_row * height,
            right: width - (clarifaiFace.right_col *width),
            bottom: height - (clarifaiFace.bottom_row * height)
        }
    }
    function onClickAction(e){
        app.models.predict(Clarifai.FACE_DETECT_MODEL,inputText)
        .then((res)=> setBoxValue(calculateBox(res)))
        .catch((err)=>console.log(err))
    }


    function onChangeAction(e){
        setInputText(e.target.value);
    }
    return (
        <div className="Form">
            <input type="text" id="image-url" className="form-element" placeholder="Image URL" onChange={onChangeAction}/>
            <button className="form-element" 
            onClick={(e) => {
                imageUrl(inputText);
                onClickAction(e);
            }
                
            }
            >DETECT</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        imageUrl: (text) => dispatch(ImageUrlAction(text)),
        setBoxValue: (text) => dispatch(boxValueAction(text))
    }
}

const mapStateToProps = (state) => {
    return {
        imageUrlLink: state.imageUrl
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);