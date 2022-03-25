import Axios from "axios";
import {useState} from 'react'

function GalleryItem ({item, getGallery}) {

    const [showDescription, setShowDescription] = useState(true)

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

    return (
        <div className="container">
            <img src={item.path}/>
            <br />
            <button onClick={addLike}>I LIKEY</button>
            <p>{item.likes} people like this!</p>
        </div>
    )
};

export default GalleryItem;