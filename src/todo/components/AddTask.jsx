import React, { useLayoutEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import CustomComponents from '../../constants/CustomComponents';
import { Button, Col, DatePicker, Input, Row, Switch, TimePicker } from 'antd';

function AddTask(props) {
    const {visible,setVisible,selectedTask,setSelectedTask,setTodo,todo}=props;
    const [title,setTitle]=useState(null);
    const [date,setDate]=useState(null);
    const [time,setTime]=useState(null);
    const [status, setStatus]=useState(false)
    const modalTitle= selectedTask?"Edit Task":"Add New Task";
    
    const addOrEdit=()=>{
        if (selectedTask) {
            let temp=todo.map((item)=>item.id===selectedTask.id ? ({...item, 
                title:title,
                date:date,
                time:time, 
                status,
                lastupdated:moment.now(),
            }):(item))
           setTodo(temp);
           setVisible(false);
           setSelectedTask(null);
          
          } else {
            const payload={
                title,
                date,
                time,
                status,
                id:uuid(),
                lastupdated:moment.now(),
                createdAt:moment.now(),

            }
            setTodo((pre)=>[...pre,payload]);
            setVisible(false);
            setTitle("");
            setDate("");
            setTime("");
          }
    }

    useLayoutEffect(() => {
      if(selectedTask){
            setTitle(selectedTask.title);
            setDate(selectedTask.date);
            setTime(selectedTask.time)
            setStatus(selectedTask.status)
          }
     else{
      setTitle("");
      setDate("");
      setTime("");
      setStatus(false)
     }
    }, [selectedTask])
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
      <Row style={{marginBottom:"20px"}}>
        <Col span={3}>
        <span>Title</span>
        </Col>
        <Col span={15}>
        <Input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        </Col>
      </Row>
      <Row style={{marginBottom:"20px"}}>
        <Col span={3}>
        <span>Date</span>
        </Col>
        <Col span={15}>
        <DatePicker
        value={date}
        onChange={setDate}
        />
        </Col>
      </Row>
      <Row style={{marginBottom:"20px"}}>
        <Col span={3}>
        <span>Time</span>
        </Col>
        <Col span={15}>
        <TimePicker
        use12Hours
        value={time}
        format={"h:mm a"}
        showNow={false}
        onChange={setTime}
        />
        </Col>
      </Row>
      <Row style={{marginBottom:"20px"}}>
        <Col span={3}>
        <span>Status</span>
        </Col>
        <Col span={15}>
        <Switch
        checked={status}
        onChange={setStatus}
        />
        </Col>
      </Row>
       
       
       


    </CustomComponents>
    </div>
  )
}

export default AddTask