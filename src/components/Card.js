export default function Card(props) {
    return (
        <div
            className="overflow-hidden aspect-square rounded-sm"
            onClick={props.click}
        >
            {props.flipped ? (
                <img
                    src={props.image}
                    alt="tady je pes"
                    className="w-full h-full object-cover"
                />
            ) : (
                <img
                    src="cover.jpg"
                    alt="cover"
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
}
