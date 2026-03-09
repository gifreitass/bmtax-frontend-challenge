import './App.css'
import ItemsList from './components/ItemsList';
import SearchInput from './components/SearchInput'
import { items } from "./data/items";

function App() {
  return (
    <div>
      <SearchInput />
      <ItemsList items={items} />
    </div>
  )
}

export default App
