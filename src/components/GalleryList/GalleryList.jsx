import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryList, getGallery}) {
    console.log(galleryList);
    return (
        <div>
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
