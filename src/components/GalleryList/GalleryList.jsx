import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryList, getGallery}) {
    console.log(galleryList);
    return (
        <div>
            {/* Loop through the array stored on the server */}
            {galleryList.map(item => 
                <GalleryItem 
                    key={item.id}
                    item={item}
                    getGallery={getGallery}
                />
                )}
        </div>
    )
}

export default GalleryList;
