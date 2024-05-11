export default function Header({ menus, handleMenuFilter }) {
  const categories = ['all', ...new Set(menus.map(item => item.category))]
  console.log(categories)

  return (
    <div className="btn-container">
      {categories.map(category => {
        return (
          <button
            className="btn"
            onClick={() => handleMenuFilter(category)}
            type="button"
            key={category}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
