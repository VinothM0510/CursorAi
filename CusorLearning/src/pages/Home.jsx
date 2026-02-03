import Carousel from '../components/home/Carousel'
import Client from '../components/home/Client'
import Product from '../components/home/Product'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      <Product />
      <Client />
    </div>
  )
}

export default Home
