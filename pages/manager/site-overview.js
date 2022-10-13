import MainLayout from '@components/layouts/MainLayout'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material/Grid'
import React from 'react'
import POViews from '@components/pages/manager/site-overview/POViews'

import ContainerSite from '@components/pages/manager/site-overview/ContainerSite'
function site() {
  return (
    <div>
      <MainLayout>
        <ContainerSite />
      </MainLayout>
    </div>
  )
}

export default site
