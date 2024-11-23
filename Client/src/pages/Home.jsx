import GenerateBtn from "../component/GenerateBtn"
import Header from "../component/Header"
import ProductDes from "../component/ProductDes"
import Steps from "../component/Steps"
import Testimonial from "../component/Testimonial"

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <ProductDes />
      <Testimonial />
      <GenerateBtn />
    </div>
  )
}

export default Home
