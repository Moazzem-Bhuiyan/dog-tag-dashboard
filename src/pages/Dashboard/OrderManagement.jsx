import React from "react";
import UserTable from "../../components/Dashboard/Table/UserTable";

const OrderManagement = () => {
  return (
    <div className=" h-screen">
      <UserTable isOrderManagement={true} />
    </div>
  );
};

export default OrderManagement;
