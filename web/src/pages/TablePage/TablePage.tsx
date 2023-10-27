import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const TablePage = () => {
  return (
    <>
      <MetaTags title="Table" description="Table page" />

      <h1>TablePage</h1>
      <ArticlesCell />

    </>
  )
}

export default TablePage
