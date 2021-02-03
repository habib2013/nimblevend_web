import React, { Component } from 'react';
import {
   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
 } from 'recharts';

class LineCharts extends Component {
   state = { 
      data: [],
    }

    componentDidMount = () => {
      for (let i = 0; i < 7; i++) {
      
         const vdata = [
            {
               "Row ID": "7981",
               "Order ID": "CA-2014-103800",
               "Order Date": "1/3/2014",
               "Ship Date": "1/7/2014",
               "Ship Mode": "Standard Class",
               "Customer ID": "DP-13000",
               "Customer Name": "Darren Powers",
               "Segment": "Consumer",
               "Country": "United States",
               "City": "Houston",
               "State": "Texas",
               "Postal Code": "77095",
               "Region": "Central",
               "Product ID": "OFF-PA-10000174",
               "Category": "Office Supplies",
               "Sub-Category": "Paper",
               "Product Name": "Message Book, Wirebound, Four 5 1/2\" X 4\" Forms/Pg., 200 Dupl. Sets/Book",
               "Sales": "16.448",
               "Quantity": "2",
               "Discount": "0.2",
               "Profit": "5.5512"
               },
               {
               "Row ID": "740",
               "Order ID": "CA-2014-112326",
               "Order Date": "1/4/2014",
               "Ship Date": "1/8/2014",
               "Ship Mode": "Standard Class",
               "Customer ID": "PO-19195",
               "Customer Name": "Phillina Ober",
               "Segment": "Home Office",
               "Country": "United States",
               "City": "Naperville",
               "State": "Illinois",
               "Postal Code": "60540",
               "Region": "Central",
               "Product ID": "OFF-LA-10003223",
               "Category": "Office Supplies",
               "Sub-Category": "Labels",
               "Product Name": "Avery 508",
               "Sales": "11.784",
               "Quantity": "3",
               "Discount": "0.2",
               "Profit": "4.2717"
               },
               {
               "Row ID": "741",
               "Order ID": "CA-2014-112326",
               "Order Date": "1/4/2014",
               "Ship Date": "1/8/2014",
               "Ship Mode": "Standard Class",
               "Customer ID": "PO-19195",
               "Customer Name": "Phillina Ober",
               "Segment": "Home Office",
               "Country": "United States",
               "City": "Naperville",
               "State": "Illinois",
               "Postal Code": "60540",
               "Region": "Central",
               "Product ID": "OFF-ST-10002743",
               "Category": "Office Supplies",
               "Sub-Category": "Storage",
               "Product Name": "SAFCO Boltless Steel Shelving",
               "Sales": "272.736",
               "Quantity": "3",
               "Discount": "0.2",
               "Profit": "-64.7748"
               },
               {
               "Row ID": "742",
               "Order ID": "CA-2014-112326",
               "Order Date": "1/4/2014",
               "Ship Date": "1/8/2014",
               "Ship Mode": "Standard Class",
               "Customer ID": "PO-19195",
               "Customer Name": "Phillina Ober",
               "Segment": "Home Office",
               "Country": "United States",
               "City": "Naperville",
               "State": "Illinois",
               "Postal Code": "60540",
               "Region": "Central",
               "Product ID": "OFF-BI-10004094",
               "Category": "Office Supplies",
               "Sub-Category": "Binders",
               "Product Name": "GBC Standard Plastic Binding Systems Combs",
               "Sales": "3.54",
               "Quantity": "2",
               "Discount": "0.8",
               "Profit": "-5.487"
               },
               {
               "Row ID": "1760",
               "Order ID": "CA-2014-141817",
               "Order Date": "1/5/2014",
               "Ship Date": "1/12/2014",
               "Ship Mode": "Standard Class",
               "Customer ID": "MB-18085",
               "Customer Name": "Mick Brown",
               "Segment": "Consumer",
               "Country": "United States",
               "City": "Philadelphia",
               "State": "Pennsylvania",
               "Postal Code": "19143",
               "Region": "East",
               "Product ID": "OFF-AR-10003478",
               "Category": "Office Supplies",
               "Sub-Category": "Art",
               "Product Name": "Avery Hi-Liter EverBold Pen Style Fluorescent Highlighters, 4/Pack",
               "Sales": "19.536",
               "Quantity": "3",
               "Discount": "0.2",
               "Profit": "4.884"
               },
               {
               "Row ID": "5328",
               "Order ID": "CA-2014-130813",
               "Order Date": "1/6/2014",
               "Ship Date": "1/8/2014",
               "Ship Mode": "Second Class",
               "Customer ID": "LS-17230",
               "Customer Name": "Lycoris Saunders",
               "Segment": "Consumer",
               "Country": "United States",
               "City": "Los Angeles",
               "State": "California",
               "Postal Code": "90049",
               "Region": "West",
               "Product ID": "OFF-PA-10002005",
               "Category": "Office Supplies",
               "Sub-Category": "Paper",
               "Product Name": "Xerox 225",
               "Sales": "19.44",
               "Quantity": "3",
               "Discount": "0",
               "Profit": "9.3312"
               },
               {
               "Row ID": "7181",
               "Order ID": "CA-2014-106054",
               "Order Date": "1/6/2014",
               "Ship Date": "1/7/2014",
               "Ship Mode": "First Class",
               "Customer ID": "JO-15145",
               "Customer Name": "Jack O'Briant",
               "Segment": "Corporate",
               "Country": "United States",
               "City": "Athens",
               "State": "Georgia",
               "Postal Code": "30605",
               "Region": "South",
               "Product ID": "OFF-AR-10002399",
               "Category": "Office Supplies",
               "Sub-Category": "Art",
               "Product Name": "Dixon Prang Watercolor Pencils, 10-Color Set with Brush",
               "Sales": "12.78",
               "Quantity": "3",
               "Discount": "0",
               "Profit": "5.2398"
               },
         ];
      
          var ourData =  [
            vdata[i]['Row ID'],
            vdata[i]['Sales'],
            vdata[i]['Quantity'],
            vdata[i]['Profit'],
          ] 

          i++
      
          
         }
         this.setState({data: ourData});
    };
    
   render() { 

    console.log(this.state.data)
      
      //   console.log(this.data);

      return (  
<div>
<LineChart
        width={500}
        height={500}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Order ID" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={this.state.data[2]} stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey={this.state.data[3]} stroke="#82ca9d" />
      </LineChart>
</div>

      );
   }
}
 
export default LineCharts;