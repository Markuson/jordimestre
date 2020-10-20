export default function PressImage({
    description,
    href,
    id,
    src,
    width = 200,
    height = 400,
    onDragStart = null
}) {

    const addMargin = () => {
        return {
            margin: '2rem',
        }
    }

    return <a href={href} data-caption={description} target="blank" rel="noopener noreferrer">
        <img style={addMargin()} className="uk-box-shadow-large" onDragStart={onDragStart} height={height} width={width} src={src} alt={description} />
    </a>
}
