import "./FeaturedInfo.css"
import {ArrowDownward,ArrowUpward} from "@material-ui/icons"
import { useState } from "react"
import { useEffect } from "react";
import {userRequest} from "../../requests"
const FeaturedInfo = () => {

    const [income,setIncome] = useState([]);
    const [percentage,setPercentage] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income");
                setIncome(res.data);
                setPercentage((res.data[1].total * 100) / res.data[0].total -100)
            } catch (error) {
                
            }
        }
        getIncome();
    },[])
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs. {income[1].total}</span>
                    <span className="featuredMoneyRate">
                        {Math.floor(percentage)} %
                        {
                            percentage < 0 ? 
                            <ArrowDownward className="featuredIcon negative"/>
                            :
                            <ArrowUpward className="featuredIcon"/>
                        }
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs.500</span>
                    <span className="featuredMoneyRate">
                        -2
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs.500</span>
                    <span className="featuredMoneyRate">
                        -2
                        <ArrowUpward className="featuredIcon"/>
                        </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
