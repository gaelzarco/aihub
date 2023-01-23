interface GalleryProps {
    data: string
}

function Gallery({ data } : GalleryProps) {
    console.log(data)

    return (
        <div className='pop'>
            <img src={`data:image/jpeg;base64,${data}`} alt='Clicked'/>
        </div>
    )
}

export default Gallery