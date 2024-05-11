import React from 'react'
import Menu from './Menu'

export default function MenusFiltered({ menus }) {
  return (
    <section>
      {menus.map(menu => (
        <Menu
          {...menu}
          key={menu.id}
        />
      ))}
    </section>
  )
}
