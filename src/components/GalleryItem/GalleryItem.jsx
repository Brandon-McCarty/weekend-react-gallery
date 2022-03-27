import Axios from "axios";
import { useState } from 'react'

function GalleryItem({ item, getGallery }) {

    const [showDescription, setShowDescription] = useState(false)

    const addLike = () => {
        console.log('CLICK');
        // Increase the number of likes on the click of the button
        Axios.put(`/gallery/like/${item.id}`)
            .then(response => {
                getGallery();
                console.log('Liked', item);
            }).catch(err => {
                console.log('Error in liking', err);
            })

    }

    const handleToggleStatus = () => {
        console.log('TOGGLE');
        setShowDescription(!showDescription);
    }

    const handleToggle = () => {
        // Picture is shown by default
        if (showDescription === false) {
            return (
                <>
                    <div>
                        <img src={item.path} onClick={handleToggleStatus} />
                    </div>
                    <br />
                    <button onClick={addLike}>LIKE</button>
                    <p>{item.likes} people like this!</p>
                </>
            )
        } else if (showDescription === true) {
            return (
                // I can't figure out why the div shifts slightly when toggling to the text
                // When the picture is clicked, switch to the description
                <>
                    <div className="mimicImage" onClick={handleToggleStatus}>
                        <p>{item.description}</p>
                    </div>
                    <button onClick={addLike}>LIKE</button>
                    <p>{item.likes} people like this!</p>
                </>

            )
        }
    }


    return (
        <div className="container">
            {handleToggle()}
        </div>
    )
};

export default GalleryItem;