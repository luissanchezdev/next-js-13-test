import Link from "next/link"
import styles from './Navigation.module.css'
export default function Navigation() {

    const routes = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Posts',
            path: '/posts'
        }
    ]

    return (
        <header className=" bg-slate-800 text-white">
          <nav className={ styles.navigation }>
            <ul className="flex flex-col items-center justify-center gap-2 py-2 md:flex-row ">
              { routes.map( ({ label, path }) => (
                <li key={ path } className="hover:underline">
                  <Link href={ path }>{ label }</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}