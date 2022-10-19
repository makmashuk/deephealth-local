import MainLayout from '@components/layouts/MainLayout'
import ILContainer from '@components/pages/manager/imagelist/ILContainer'

function defaultPage() {
  return (
    <div>
      <MainLayout>
        <ILContainer />
      </MainLayout>
    </div>
  )
}

export default defaultPage
