import styles from '../style/Picture.module.scss'
import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import PictureTags from './PictureTags'

const Picture = ({ picture, overlay, linkTo, showInfo = true }) => {
  const { title, file, alt, description, tags } = picture || {}
  const LinkComponent = linkTo ? Link : 'div'

  const [active, setActive] = useState(false)

  const onClick = useCallback(
    e => {
      e.preventDefault()
      setActive(!active)
    },
    [active]
  )

  const onMouseOver = useCallback(() => {
    setActive(true)
  }, [])

  const onMouseOut = useCallback(() => {
    setActive(false)
  }, [])

  return (
    <div
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      onClick={onClick}
      className={`${styles.PictureContainer} ${active ? styles.active : ''}`}>
      <img className={styles.Picture} alt={alt} src={file} />
      {showInfo && !overlay && (
        <LinkComponent to={linkTo} className={styles.PictureInfo}>
          <h2 className={styles.PictureTitle}>{title}</h2>
          <div className={styles.Description}>{description}</div>
        </LinkComponent>
      )}
      {overlay && (
        <div className={styles.VisibleOverlay}>
          <h2 className={styles.OverlayTitle}>{overlay}</h2>
        </div>
      )}
      {showInfo && !overlay && <PictureTags tags={tags} />}
    </div>
  )
}

export default Picture
