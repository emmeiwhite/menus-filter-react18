export default function Header({ menus, handleMenuFilter }) {
  const categories = [...new Set(menus.map(item => item.category)), 'all']
  console.log(categories)

  return (
    <div className="">
      {categories.map(category => {
        return (
          <button
            className="btn"
            onClick={() => handleMenuFilter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
