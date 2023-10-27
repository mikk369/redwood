import { Link, routes } from '@redwoodjs/router'

type TreetableLayoutProps = {
  children?: React.ReactNode
}

const TreetableLayout = ({ children }: TreetableLayoutProps) => {
  return <><>
  <header>
    <nav>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
          <Link to={routes.table()}>Table</Link>
        </li>
      </ul>
    </nav>
  </header>
  <main>{children}</main>
</></>
}

export default TreetableLayout
