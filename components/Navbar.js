import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
       <nav>
            <div className="logo">
                <h4>CATFACTS <Image src="/catty.png" alt='Cat Image' height={30} width={30} className="cat-img" /></h4>
                
            </div>
            <div className='navLinks'>
                <Link href='/'>
                    <a>Home</a>
                </Link> 
                <Link href='/about'>
                    <a>About</a>
                </Link> 
                <Link href='/feed-caty'>
                    <a>FeedCaty</a>
                </Link> 
                <Link href='/contact'>
                    <a>Contact</a>
                </Link> 

            </div>
            
       </nav>

     );
}
 
export default Navbar;