import { Button, Card, Row } from "antd";
import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskTable from "./components/TaskTable";




function Home() {
const [todo,setTodo]=useState([]);
const [visible,setVisible]=useState(false);
const [selectedTask,setSelectedTask]=useState(null);
const completedTask=todo.filter((item)=>item.status===true)
  return (
    <Row>
      <Row style={{ width: "100vw", justifyContent: "space-between" }}>
        <h2 style={{ marginLeft: "20px" }}>Todo</h2>
        <Button style={{ marginRight: "20px" }}
        onClick={()=>{setVisible(true); setSelectedTask(null)}}
        >+Add New</Button>
      </Row>

      <Row
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
          <Card
            style={{
              width: 400,
            }}
          >
            <h3>total tasks</h3>
            <h3>{todo.length}</h3>
          </Card>
          <Card
            style={{
              width: 400,
            }}
          >
            <h3>Completed tasks</h3>
            <h3>{completedTask.length}</h3>
          </Card>
          <Card
            style={{
              width: 400,
            }}
          >
            <h3>Inprogress tasks</h3>
            <h3>{todo.length-completedTask.length}</h3>
          </Card>
      </Row>

        <Row style={{width:"100%",marginLeft:"20px",marginTop:"20px"}}>
        <TaskTable
      style={{width:"100%"}}
      todo={todo}
      setTodo={setTodo}
      setSelectedTask={setSelectedTask}
      setVisible={setVisible}

      />
        </Row>
        <AddTask
      visible={visible}
      setVisible={setVisible}
      selectedTask={selectedTask || null}
      setSelectedTask={setSelectedTask}
      setTodo={setTodo}
      todo={todo}
      />
    </Row>
  );
}

export default Home;
