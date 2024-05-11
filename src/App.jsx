import { useState } from 'react'
import data from './data'
import Title from './Title'
import Header from './Header'
import MenusFiltered from './MenusFiltered'

export default function App() {
  const [menus, setMenus] = useState(data)

  const handleMenuFilter = category => {
    if (category === 'all') {
      setMenus(data)
      return
    }

    const filteredMenus = data.filter(menu => menu.category === category)

    setMenus(filteredMenus)
  }

  return (
    <section className="container">
      <Title>Menus</Title>
      <Header
        handleMenuFilter={handleMenuFilter}
        menus={data}
      />
      <MenusFiltered menus={menus} />
    </section>
  )
}
