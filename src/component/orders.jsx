import React, { useEffect } from "react";
import { ordersList } from "../services/orders.services";
import { geLatLong } from "../services/googleAddress.services";
const Orders = () => {
  const Address =
    "147, 1st Floor, Pandiyan St, Alwartirunagar, Valasaravakkam, Chennai, Tamil Nadu 600087";
  useEffect(() => {
    ordersList();
    geLatLong(Address);
  }, []);

  return (
    <div>
      <h1>Orders List</h1>
    </div>
  );
};

export default Orders;
