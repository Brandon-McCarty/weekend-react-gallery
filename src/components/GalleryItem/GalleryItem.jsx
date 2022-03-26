import Axios from "axios";
import { useState } from 'react'

function GalleryItem({ item, getGallery }) {

    const [showDescription, setShowDescription] = useState(false)

    const addLike = () => {
        console.log('CLICK');
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
                <>
                    <div className="mimicImage" onClick={handleToggleStatus}>
                        <p>{item.description}</p>
                    </div>
                    <br />
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