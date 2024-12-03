import { PiUsersThreeLight } from "react-icons/pi";
import StatCard from "../../components/Dashboard/StatCard";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import IncomeReport from "../../components/Dashboard/IncomeReport";
import UserGrowth from "../../components/Dashboard/UserGrowth";
import SubscriberGrowth from "../../components/Dashboard/SubscriberGrowth";
import UserTable from "../../components/Dashboard/Table/UserTable";
import RecentSellingProducts from "../../components/Dashboard/Table/RecentSellingProduct";

const Dashboard = () => {
  return (
    <div className="">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 my-10">
        <StatCard
          icon={<PiUsersThreeLight className="text-5xl text-black" />}
          value="10"
          description="Total User"
        />
        <StatCard
          icon={<FiUsers className="text-5xl text-black  " />}
          value="1k"
          growth="70%"
          description="Total Subscribers"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserGrowth />
        <SubscriberGrowth />
      </div>

      {/* <div className="mt-6">
        <IncomeReport />
      </div> */}

      {/* <UserTable isDashboard={true} /> */}
      <div className=" mt-10">
        <RecentSellingProducts />
      </div>
    </div>
  );
};

export default Dashboard;
