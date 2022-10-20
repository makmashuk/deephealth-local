import SideBarAccordion from '@components/layouts/Sidebar/SideBarAccordion/SideBarAccordion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import * as Icon from 'react-feather'
import NavIcon from '@components/layouts/Sidebar/SideBarAccordion/NavIcon'
import styles from '@components/layouts/Sidebar/sidebar.module.css'

const SIDEBAR_LINKS = [
  {
    id: '46f7dc9b-e75d-40e0-8d14-1e7334d16d5e',
    link: '/practice',
    title: 'Practice',
    slug: 'practice',
    icon: '',
    expanded_text: '',
  },
  {
    id: '46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee',
    link: '/practice/techlist/summary/image',
    title: 'Image List',
    slug: 'image-list',
    icon: '',
  },
  {
    id: '46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee',
    link: '/practice/techlist/',
    title: 'Technologists List',
    slug: 'technologists-list',
    icon: '',
  },
]

export default function SideBar({ setExpSidebar }) {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState(
    '46f7dc9b-e75d-40e0-8d14-1e7334d16d5e'
  )
  const handleActiveRoute = (link) => {
    setActiveLink(link.id)
    router.push(link.link)
  }

  // to expand sidebar
  const [expandSidebar, setExpandSidebar] = useState(false)
  const handleExpandSidebar = () => {
    setExpandSidebar(!expandSidebar)
    setExpSidebar(!expandSidebar)
  }

  return (
    <Box
      className={
        !expandSidebar
          ? styles['sidebar__normal']
          : styles['sidebar__expand'] + ' ' + styles.sidebar
      }
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => setExpandSidebar(false)}
    >
      <Box
        className={
          !expandSidebar
            ? styles['sidebar__brand']
            : styles['sidebar__brand__expanded']
        }
        onClick={() => handleExpandSidebar()}
      >
        <Box style={{ minWidth: '32px' }}>
          <Image
            src="/icons/site_logo_short.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </Box>
        <Box
          className={!expandSidebar ? styles['d__none'] : styles['d__block']}
          style={{ minWidth: '150px' }}
        >
          <Image
            src="/icons/site_logo2.svg"
            alt="logo"
            width={150}
            height={24}
          />
        </Box>
      </Box>

      <Box
        sx={{
          alignItems: 'center',
          p: '1rem',
          borderRadius: '12px',
          mt: '1rem',
          cursor: 'pointer',
        }}
      >
        {!expandSidebar ? <NavIcon /> : <SideBarAccordion />}
      </Box>

      {SIDEBAR_LINKS.map((link) => (
        <Box
          key={link.id}
          className={
            styles['sidebar__link'] +
            ' ' +
            (activeLink === link.id ? styles['active'] : null)
          }
          onClick={() => handleActiveRoute(link)}
        >
          <Box className="triangle1"></Box>

          <Box
            className={
              styles['sidebar__link_icon'] +
              ' ' +
              (!expandSidebar
                ? styles['sidebar__link_icon']
                : styles['sidebar__link__icon__expanded'])
            }
          >
            {link.slug === 'practice' ? (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.Home
                  size={25}
                  color={activeLink === link.id ? 'black' : 'white'}
                  // style={{ minWidth: '25px' }}
                />
                <span
                  className={
                    (!expandSidebar ? 'd__none' : styles['side__menu__text']) +
                    ' ' +
                    (activeLink === link.id
                      ? styles['side__menu__text__active']
                      : styles['side__menu__text__inactive'])
                  }
                >
                  Dashboard
                </span>
              </span>
            ) : link.slug === 'image-list' ? (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.Image
                  size={25}
                  color={activeLink === link.id ? 'black' : 'white'}
                  // style={{ minWidth: '25px' }}
                />
                <span
                  className={
                    (!expandSidebar ? 'd__none' : styles['side__menu__text']) +
                    ' ' +
                    (activeLink === link.id
                      ? styles['side__menu__text__active']
                      : styles['side__menu__text__inactive'])
                  }
                >
                  Image List
                </span>
              </span>
            ) : link.slug === 'technologists-list' ? (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.Users
                  size={25}
                  color={activeLink === link.id ? 'black' : 'white'}
                  // style={{ minWidth: '25px' }}
                />
                <span
                  className={
                    (!expandSidebar ? 'd__none' : styles['side__menu__text']) +
                    ' ' +
                    (activeLink === link.id
                      ? styles['side__menu__text__active']
                      : styles['side__menu__text__inactive'])
                  }
                >
                  Technologists List
                </span>
              </span>
            ) : null}
          </Box>

          <Box className="triangle2"></Box>
        </Box>
      ))}
    </Box>
  )
}
