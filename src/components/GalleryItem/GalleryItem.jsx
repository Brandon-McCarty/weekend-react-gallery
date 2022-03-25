import Axios from "axios";

function GalleryItem ({item, getGallery}) {

    const addLike = () => {
        console.log('CLICK', item);
        Axios.put(`/gallery/like/${item.id}`)
        .then(response => {
            getGallery();
            console.log('Liked', item);
        }).catch(err => {
            console.log('Error in liking', err);
        })

    }

    return (
        <div>
            <img src={item.path}/>
            <br />
            <button onClick={addLike}>I LIKEY</button>
            <p>{item.likes} people like this!</p>
        </div>
    )
};

export default GalleryItem;