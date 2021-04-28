import React, { useEffect } from "react";
import { ordersList } from "../services/orders.services";
import {geLatLong} from "../services/googleAddress.services";
const Orders = () => {
  useEffect(() => {
    ordersList();
    geLatLong();
  }, []);

  return (
    <div>
      <h1>Orders List</h1>
    </div>
  );
};

export default Orders;
