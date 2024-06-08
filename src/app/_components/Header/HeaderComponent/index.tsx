import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import classes from './index.module.scss'
const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={classes.header}>
      <Gutter>
        <Link href="/">
          <img src="/logo-white.svg" />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
