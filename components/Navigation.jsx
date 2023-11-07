import Link from "next/link"
import Image from "next/image"
import styles from './Navigation.module.css'
export default function Navigation() {

    const routes = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Posts',
            path: '/posts'
        },
        {
          label: 'About',
          path: '/about'
      }
    ]

    return (
        <header className="flex flex-col items-center justify-center gap-5 py-5 text-white md:flex-row">
          <Image width={96} height={96} src={`https://via.placeholder.com/100`} alt="logo"/>
          <nav className={ styles.navigation }>
            <ul className="flex flex-row items-center justify-center gap-2  p-2 md:flex-row border-spacing-1 border-2 border-[#4d4d4d]} rounded-md">
              { routes.map( ({ label, path }) => (
                <li key={ path } className="hover:underline">
                  <Link href={ path } className="text-[#4d4d4d]">{ label }</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}