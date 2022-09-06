import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import CustomComponents from '../../constants/CustomComponents';
import { Button, DatePicker, Input, TimePicker } from 'antd';


const payload={
    status:false,
    isSaved:false,
    id:uuid()
  }

function AddTask(props) {
    const {visible,setVisible,selectedTask,setTodo,todo}=props;
    const [title,setTitle]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("")
    const modalTitle= selectedTask?"Edit Task":"Add New Task";

    const addOrEdit=()=>{
        if (selectedTask) {
            let temp=todo.map((item)=>item.id===selectedTask.id ? ({...item, 
                title,
                date,
                time, 
                lastupdated:moment.now(),
            }):(item))
           setTodo(temp);
           setTitle("");
            setTime("");
            setDate("");
          } else {
            const payload={
                title,
                date,
                time,
                isSaved:false,
                status:false,
                id:uuid(),
                lastupdated:moment.now(),
                createdAt:moment.now(),

            }
            setTodo((pre)=>[...pre,payload]);
            setVisible(false);
            setTitle("");
            setTime("");
            setDate("");
          }
    }

    
  return (
    <div>
    <CustomComponents
     visible={visible}
     title={modalTitle}
     onCancel={() => setVisible(false)}
     footer={<>
        <Button onClick={() => setVisible(false)}>Close</Button>
          <Button
            type="primary"
            onClick={addOrEdit}
            // loading={loading || adding}
          >
            {selectedTask ? "Update" : "Add"}
          </Button>
      </>
    }>
        <Input
            onChange={setTitle}
        />
        <DatePicker
        onChange={setDate}
        />
        <TimePicker
        onChange={setTime}
        />

    </CustomComponents>
    </div>
  )
}

export default AddTask