const Item = ({name, desc, price}) => {
  return (
    <div className="flex justify-between">
      <div className="w-4/5 mb-4">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-lg">{desc}</p>
      </div>
      <div>
        <h1 className="text-2xl">{price}</h1>
      </div>
    </div>
  )
}

export default Item;