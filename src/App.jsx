import { useState } from 'react'
import data from './data'
import Title from './Title'
import Header from './Header'

export default function App() {
  const [menus, setMenus] = useState(data)

  const handleMenuFilter = category => {
    console.log(category)

    const filteredMenus = data.filter(menu => menu.category === category)

    console.log(filteredMenus)
    // const filteredMenus = setMenus(menus => {
    //   data.filter(menu => menu.category === category)
    // })
    // return filteredMenus

    setMenus(filteredMenus)
  }

  return (
    <section className="container">
      <Title>Menus</Title>
      <Header
        handleMenuFilter={handleMenuFilter}
        menus={data}
      />
    </section>
  )
}
