export default function ImageCard ({ image, onClick }) {
    return (
        <div>
            <img
                onClick={() => onClick(image.urls.regular)}
                src={image.urls.small}
                alt={image.alt_description} 
                width="290"
                height="290"
            />
        </div>
    )
}