import styles from '../style/Picture.module.scss'
import React, { useState, useCallback } from 'react'
import { Link, navigate } from 'gatsby'
import PictureTags from './PictureTags'
import { isTouchDevice } from '../util/isTouchDevice'

const isTouch = isTouchDevice()

const Picture = ({ picture, overlay, linkTo, showInfo = true }) => {
  const { title, file, alt, description, tags } = picture || {}

  const [active, setActive] = useState(false)
  const onClick = useCallback(() => {
    if (!isTouch && linkTo) {
      navigate(linkTo)
    } else {
      setActive(!active)
    }
  }, [active])

  const onMouseOver = useCallback(() => {
    if (!isTouch) {
      setActive(true)
    }
  }, [])

  const onMouseOut = useCallback(() => {
    if (!isTouch) {
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
          <h2 className={styles.PictureTitle}>{title}</h2>
          <div className={styles.Description}>{description}</div>
          {linkTo && (
            <Link
              className={`${styles.PictureLink} ${
                !isTouch ? styles.Hide : ''
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
