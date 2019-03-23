import styles from '../style/Picture.module.scss'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'

const PictureTags = ({ tags = [] }) =>
  tags &&
  tags.length !== 0 && (
    <ul className={styles.PictureTags}>
      {tags.map(tag => (
        <li key={`tag_${tag}`}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  )

export default PictureTags
