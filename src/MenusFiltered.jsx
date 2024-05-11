import React from 'react'
import Menu from './Menu'

export default function MenusFiltered({ menus }) {
  return (
    <section className="section-center">
      {menus.map(menu => (
        <Menu
          {...menu}
          key={menu.id}
        />
      ))}
    </section>
  )
}
