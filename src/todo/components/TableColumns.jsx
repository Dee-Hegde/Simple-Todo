import {Tag } from 'antd';
import React from 'react';
import moment from 'moment';

export const TableColumns=()=> {
    const columns = [
        {
          title: "S.no",
          dataIndex: "sn",
          key: "sn",
          width: 50,
          align: "center",
         
        },
        {
          title: "Task Title",
          dataIndex: "title",
          key: "title",
          width: 350,
          align: "center",
          filterSearch: true,
          onFilter: (value, record) => record.address.startsWith(value),
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
          align: "center",
          width: 300,
          sorter: (a, b) => { let a1= moment(a.date).format('YYYYMMDD') 
                              let b1= moment(b.date).format('YYYYMMDD')
                            return a1-b1},
        },
        {
          title: "Time",
          dataIndex: "time",
          key: "time",
          align: "center",
          width: 300,
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          align: "center",
          width: 350,
          render:(status,date) =>{
            let newdate=moment(date).format("DD/MM/YYYY");
            let currentDate=moment.now();
            currentDate=moment(currentDate).format("DD/MM/YYYY");
            let color = status==="Completed" ? "green": newdate <= currentDate?"orange":"blue"
            return(<Tag color={color}>{status}</Tag>)
          },
          filters:[
              {
        text: 'Completed',
        value: 'Completed',
      },{
        text: 'In Progress',
        value: 'In Progress',
      }
          ],
        
          onFilter: (value, record) => record.status===value,
        },
        {
          title: "Created At",
          dataIndex: "createdAt",
          key: "createdAt",
          align: "center",
          width: 350,
        },
        {
          title: "Last Updated",
          dataIndex: "lastupdated",
          key: "lastupdated",
          align: "center",
          width: 350,
        },
        {
          title: "Edit",
          dataIndex: "edit",
          key: "edit",
          width: 100,
          align: "center",
        },
        {
          title: "Delete",
          dataIndex: "delete",
          key: "delete",
          width: 100,
          align: "center",
        },
      ];
      return columns;
    }