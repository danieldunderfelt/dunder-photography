import React, { useEffect, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'
import Header from './Header'
import '../style/index.scss'
import styles from '../style/Layout.module.scss'
import pictureStyles from '../style/Picture.module.scss'

let macy = () => {}
let win = {}

try {
  win = window || {}
  win.USER_CAN_HOVER = false
  macy = require('macy')
} catch (err) {}

const TemplateWrapper = ({ children, isHome = false }) => {
  useLayoutEffect(() => {
    let timer = 0

    function onFirstTouch() {
      clearTimeout(timer)
      win.USER_CAN_HOVER = false
      document.body.classList.remove('user-can-hover')
      removeFirstHoverListener()
    }

    function onFirstHover(e) {
      win.USER_CAN_HOVER = true
      document.body.classList.add('user-can-hover')
      removeFirstHoverListener()
    }

    function removeFirstHoverListener() {
      window.removeEventListener('mouseover', onFirstHover, false)
      window.removeEventListener('touchstart', onFirstTouch, false)
    }

    window.addEventListener('mouseover', onFirstHover, false)
    window.addEventListener('touchstart', onFirstTouch, false)

    return removeFirstHoverListener
  }, [])

  useLayoutEffect(() => {
    const el = document.querySelector(`.${pictureStyles.PictureList}`)

    if (!el) {
      return
    }

    macy({
      container: el,
      columns: 3,
      trueOrder: true,
      margin: 0,
      breakAt: {
        900: 1,
        1450: 2,
      },
      cancelLegacy: true,
    })
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/site/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/site/favicon-128x128.png?v=1"
              sizes="128x128"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/site/favicon-64x64.png?v=1"
              sizes="64x64"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/site/favicon-32x32.png?v=1"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/site/favicon-16x16.png?v=1"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/site/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.png" />
          </Helmet>
          <div className={styles.Viewport}>
            <div className={classnames(styles.LayoutWrapper)}>
              <Header isHome={isHome} />
              <div className={styles.Page}>{children}</div>
            </div>
          </div>
        </>
      )}
    />
  )
}

export default TemplateWrapper
