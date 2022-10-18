import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { ChevronRight } from '@icons/index'
import styles from './BreadCrumb.module.css'

const BreadCrumb = () => {
  const router = useRouter()

  const breadcrumbs = useMemo(() => {
    const asPathWithoutQuery = router.asPath.split('?')[0]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      return {
        href,
        text: subpath.charAt(0).toUpperCase() + subpath.slice(1),
      }
    })
    return [{ href: '/', text: 'Home' }, ...crumblist]
  }, [router.asPath])

  return (
    <Breadcrumbs
      className="breadcrumbs"
      aria-label="breadcrumb"
      separator={<ChevronRight size={16} stroke="#A8B1CE" strokeWidth={1.5} />}
    >
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  )
}

const Crumb = ({ text, href, last = false }) => {
  if (last) {
    return (
      <Typography
        className={`${styles.breadcrumb_item} ${styles.breadcrumb_item_active}`}
      >
        {text}
      </Typography>
    )
  }

  return (
    <Typography className={styles.breadcrumb_item}>
      <Link underline="none" href={href} color="#44495B">
        {text}
      </Link>
    </Typography>
  )
}

export default BreadCrumb
