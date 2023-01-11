//? Styled Components
import { TopNavbar, Logo, List, ListItem } from './style'
//? Next Dependences
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

    return (

        <TopNavbar>
            <Logo>
                <h3>Rick and Morty NEXT.JS</h3>
                <Image src='/images/portalgun.png' width='70' height='50' alt='Portal Gun'/>
            </Logo>
            

            <List>
                <ListItem><Link href='/'>Home</Link></ListItem>
                <ListItem><Link href='/characters'>Characters</Link></ListItem>
                <ListItem><Link href='/about'>About</Link></ListItem>
            </List>
            
        </TopNavbar>

    )

}