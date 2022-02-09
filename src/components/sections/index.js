import './styles.css'
import Item from '../item'
const Sections = ({name, items}) => {
  
  return (
    <div className="pt-6">
      <div className="bg-stone-200 p-2">
        <h1 className="text-3xl uppercase mb-4">{name}</h1>
        {items.map((s) => 
          <Item name={s.name} desc={s.desc} price={s.price}/>
        )}
      </div>
    </div>
  )
}

export default Sections;