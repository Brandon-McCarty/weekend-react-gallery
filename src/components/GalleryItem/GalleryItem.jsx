function GalleryItem ({item}) {

    const addLike = () => {
        console.log('CLICK');

    }

    return (
        <div>
            <img src={item.path}/>
            <br />
            <button onClick={addLike}>I LIKEY</button>
            <p>AMOUNT OF LIKES HERE</p>
        </div>
    )
};

export default GalleryItem;