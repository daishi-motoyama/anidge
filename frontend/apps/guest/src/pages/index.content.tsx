import { BaseLayout } from '@src/components/BaseLayout/BaseLayout'
import { Header } from '@src/components/Header/Header'

export const HomePageContent = () => {
  return (
    <BaseLayout
      header={
        <Header
          leftElement={
            <Header.MenuButton sx={{ display: { md: 'none', sm: 'flex' } }} />
          }
          title={<Header.Title title={'anidge'} />}
        />
      }
    >
      <BaseLayout.Content>HomePageContent</BaseLayout.Content>
    </BaseLayout>
  )
}
