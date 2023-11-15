import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-14 pb-28">
        <Header />
        <Outlet />
      </div>
    </main>
  )
}
