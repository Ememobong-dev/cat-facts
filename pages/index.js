import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'



export const getStaticProps = async () => {
  // Add fetch request
  const res = await fetch("https://catfact.ninja/fact?max_length=140")
  // get the data
  const data = await res.json()
  
  // return data
  return{
    props: {catfacts: data}
  }

}


const Home = ({ catfacts }) => {
  return (
    <div className="content">
      <Navbar />
      <h1>CATFACTS 101</h1>
      <h3>DO YOU KNOW?</h3>

      <div className='content-catBG'>
        <p>{catfacts.fact}</p> 
      </div>

      
      
    </div>

  )
}

export default Home;
