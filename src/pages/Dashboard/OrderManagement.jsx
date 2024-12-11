import React from "react";
import OrderListTable from "../../components/Dashboard/Table/OrderListTable";

const OrderManagement = () => {
     return (
          <div className="overflow-x-auto h-[calc(100vh-170px)]">
               <OrderListTable />
          </div>
     );
};

export default OrderManagement;
