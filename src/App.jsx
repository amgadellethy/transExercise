import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  async function getCustomer() {
    let data = await axios.get("http://localhost:5173/customers");
    console.log(data);
  }

  async function getTransaction() {
    let options = {
      url: "http://localhost:5173/transactions",
      method: "GET",
    };
    let data = await axios.request(options);

    console.log(data);
  }

  useEffect(() => {
    getTransaction(), getCustomer();
  }, []);

  return (
    <>
      <h1 className="w-fit mx-auto text-2xl  ">Customer Transactions</h1>

      <div className="mx-auto w-fit">
        <input className="border border-lime-500" type="search" name="" id="" />
        <button className="bg-lime-600">search</button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="">id</th>
            <th className="">Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Ahmed Ali</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="w-full mt-14">
        <thead className=" bg-red-600">
          <tr>
            <td>#</td>
            <td>Customer_id</td>
            <td>date</td>
            <td>amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transItem) => (
            <tr className="text-center">
              <td>1</td>
              <td>1</td>
              <td>12-12-2020</td>
              <td>200</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
