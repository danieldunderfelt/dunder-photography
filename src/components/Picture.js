import styles from '../style/Picture.module.scss'
import React, { useState, useCallback } from 'react'
import { Link, navigate } from 'gatsby'
import PictureTags from './PictureTags'
import { isTouchDevice } from '../util/isTouchDevice'

const Picture = ({ picture, overlay, linkTo, showInfo = true }) => {
  const { title, file, alt, description, tags } = picture || {}
  const [active, setActive] = useState(false)

  const onClick = useCallback(() => {
    if ((!isTouchDevice() || overlay) && linkTo) {
      navigate(linkTo)
    } else {
      setActive(!active)
    }
  }, [active])

  const onMouseOver = useCallback(() => {
    if (!isTouchDevice()) {
      setActive(true)
    }
  }, [])

  const onMouseOut = useCallback(() => {
    if (!isTouchDevice()) {
      setActive(false)
    }
  }, [])

  return (
    <div
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      onClick={onClick}
      className={`${styles.PictureContainer} ${active ? styles.active : ''}`}>
      <img className={styles.Picture} alt={alt} src={file} />
      {showInfo && !overlay && (
        <div className={styles.PictureInfo}>
          <div>
            <h2 className={styles.PictureTitle}>{title}</h2>
            <div className={styles.Description}>{description}</div>
          </div>
          {linkTo && (
            <Link
              className={`${styles.PictureLink} ${
                !isTouchDevice() ? styles.Hide : ''
              }`}
              to={linkTo}>
              View
            </Link>
          )}
        </div>
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
