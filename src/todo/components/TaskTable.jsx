import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd'
import React from 'react'
import { TableColumns } from './TableColumns'
import moment from 'moment';

function TaskTable(props) {
    const {todo,setTodo,setVisible,setSelectedTask}=props;
    const handleEdit=(id)=>{
        const temp=todo.filter((item)=>item.id===id);
        setSelectedTask(temp[0]);
        setVisible(true);
    }
    const handleDelete=(id)=>{
        const temp=todo.filter((item)=>item.id!==id);
       setTodo(temp)
    }
      
    
        let mData = [];
        if (todo) {
          todo?.forEach((item, index) => {
            mData.push({
              key: item.id,
              sn: ++index,
              title:item.title,
              date:moment(item.date).format("DD/MM/YYYY"),
              time:moment(item.time).format("LT"),
              status:item?.status?"Completed":"In Progress",
              createdAt:moment(item.createdAt).format("DD/MM/YYYY-LT"),
              lastupdated:moment(item.lastupdated).format("DD/MM/YYYY - LT"),
              edit:<EditOutlined onClick={()=>handleEdit(item.id)}/>,
              delete:<DeleteOutlined onClick={()=>handleDelete(item.id)} />

            });
          });
        }

  return (
    <div>  
    <Table
    columns={TableColumns()}
    dataSource={mData}
    className="mt20"
    bordered={false}
  /></div>
  )
}

export default TaskTable