import { Helmet } from "react-helmet-async"
import Category from "../../components/Category/Category"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  return (
    <div>
       <Helmet>
                <title>StayVista | Vacation Homes & Condo Rentals</title>
            </Helmet>
      {/* category section */}
      <Category></Category>

      {/* room section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
