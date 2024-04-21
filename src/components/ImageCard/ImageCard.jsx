export default function ImageCard ({ image }) {
    return (
        <div>
            <img
                src={image.urls.small}
                alt={image.alt_description} 
                width="290"
                height="290"
            />
        </div>
    )
}