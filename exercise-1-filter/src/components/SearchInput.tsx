const SearchInput: React.FC<{ text: string, setText: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
    return (
        <input value={props.text} onChange={(e) => props.setText(e.target.value)} placeholder="Busque o item pelo nome" className="bg-white w-56 border text-xs rounded-md px-3 py-2" type="text" />
    )
}

export default SearchInput