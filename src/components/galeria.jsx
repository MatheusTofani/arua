const Galeria = ({map}) => {
    return (
        <div className="grid grid-cols-3 gap-2">
        {map.map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} />
        ))}
        </div>
    )
}

export default Galeria;