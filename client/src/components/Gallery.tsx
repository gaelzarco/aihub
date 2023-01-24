interface GalleryProps {
    data: string
}

function Gallery({ data } : GalleryProps) {
    return (
        <>
            <img className='gallery' src={`data:image/jpeg;base64,${data}`} alt='Clicked'/>
        </>
    )
}

export default Gallery