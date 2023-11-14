import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="mx-auto max-w-7xl pb-28">
      <Header />
      <Outlet />
    </div>
  )
}
