import type { Items } from "../data/items"

const ItemsList: React.FC<{ items: Items[] }> = (props) => {
    return (
        <>
        {!props.items.length && <p>Nenhum item encontrado</p>}
        <ul className="list-disc">
            {props.items.map((item, index) => {
                return <li className="font-medium" key={index}>{item.name}</li>
            })}
        </ul>
        </>
    )
}

export default ItemsList