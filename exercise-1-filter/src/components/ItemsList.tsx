import type { Items } from "../data/items"

const ItemsList: React.FC<{ items: Items[] }> = (props) => {
    return (
        <ul className="list-disc">
            {props.items.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    )
}

export default ItemsList