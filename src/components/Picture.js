import styles from '../style/Picture.module.scss'
import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import PictureTags from './PictureTags'
import { isTouchDevice } from '../util/isTouchDevice'

const Picture = ({ picture, overlay, linkTo, showInfo = true }) => {
  const { title, file, alt, description, tags } = picture || {}
  const LinkComponent = linkTo ? Link : 'div'

  const [active, setActive] = useState(false)
  const onClick = useCallback(() => setActive(!active), [active])

  const onClickLink = useCallback(
    e => {
      if (!active && isTouchDevice()) {
        e.preventDefault()
      }
    },
    [active]
  )

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
      <LinkComponent onClick={onClickLink} to={linkTo}>
        <img className={styles.Picture} alt={alt} src={file} />
        {showInfo && !overlay && (
          <div className={styles.PictureInfo}>
            <h2 className={styles.PictureTitle}>{title}</h2>
            <div className={styles.Description}>{description}</div>
          </div>
        )}
      </LinkComponent>
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
