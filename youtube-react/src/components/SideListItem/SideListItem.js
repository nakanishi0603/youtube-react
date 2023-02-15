import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'
const SideListItem = (id, src, title) => {
  return (
    <Link className={Style.item} to={{ pathname: 'watch', search: `?v=${id.id}` }}>
      <img src={id.src} alt={id.title} />
      <div className={Style.info}>
        <span>{id.title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
