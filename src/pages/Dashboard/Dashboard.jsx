import {PiUsersThreeLight} from "react-icons/pi";
import StatCard from "../../components/Dashboard/StatCard";
import {FiUsers} from "react-icons/fi";

import UserGrowth from "../../components/Dashboard/UserGrowth";
import TotalEarnings from "../../components/Dashboard/TotalEarnings";

import RecentSellingProducts from "../../components/Dashboard/Table/RecentSellingProduct";

const Dashboard = () => {
     return (
          <div className="">
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 my-10">
                    <StatCard
                         icon={
                              <PiUsersThreeLight className="text-5xl text-black" />
                         }
                         value="10"
                         description="Total User"
                    />
                    <StatCard
                         icon={<FiUsers className="text-5xl text-black  " />}
                         value="1k"
                         description="Total Earnings "
                    />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UserGrowth />
                    <TotalEarnings />
               </div>

               <div className=" mt-10">
                    <RecentSellingProducts />
               </div>
          </div>
     );
};

export default Dashboard;
