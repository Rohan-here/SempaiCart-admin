import Chart from "../../components/Chart/Chart"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall"
import WidgetBig from "../../components/WidgetBig/WidgetBig"
import "./Home.css"
import { useState ,useMemo} from "react"
import { useEffect } from "react"
import { userRequest } from "../../requests"
const Home = () => {
    console.log("Home Page Update");
    const [userStats ,setUserStats] = useState([]);
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );

    useEffect(() => {
        const getStats = async () => {
            try{
                const res = await userRequest.get('/users/stats');
                res.data.map(item => 
                    setUserStats(prev => [
                        ...prev,
                        {name : MONTHS[item._id - 1], "Active User" : item.total}
                    ])
                )
            }
            catch(error){

            }
        }

        getStats();
        console.log(userStats);

    }, [MONTHS])

    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetBig/>
            </div>
        </div>
    )
}

export default Home
