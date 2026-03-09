import { useState } from 'react';
import ItemsList from './components/ItemsList';
import SearchInput from './components/SearchInput'
import { items } from "./data/items";

function App() {
  const [inputText, setInputText] = useState<string>("")

  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(inputText.toLowerCase()))
  
  return (
    <div className='flex flex-col items-center gap-8 h-80'>
      <SearchInput text={inputText} setText={setInputText} />
      <ItemsList items={filteredItems} />
    </div>
  )
}

export default App
