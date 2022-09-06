import { Button, Card, Col, Row } from "antd";
import React, { useState } from "react";
import { cardsData } from "../constants/commonFunctions";
import AddTask from "./components/AddTask";




function Home() {
const [todo,setTodo]=useState([]);
const [visible,setVisible]=useState(false);
const [selectedTask,setSelectedTask]=useState(null);

console.log(todo)


  return (
    <Row>
      <Row style={{ width: "100vw", justifyContent: "space-between" }}>
        <h2 style={{ marginLeft: "20px" }}>Todo</h2>
        <Button style={{ marginRight: "20px" }}
        onClick={()=>setVisible(true)}
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
            <h3>{todo.length}</h3>
          </Card>
          <Card
            style={{
              width: 400,
            }}
          >
            <h3>Inprogress tasks</h3>
            <h3>{todo.length}</h3>
          </Card>


      </Row>
      <AddTask
      visible={visible}
      setVisible={setVisible}
      selectedTask={selectedTask || null}
      setTodo={setTodo}
      todo={todo}
      />
    </Row>
  );
}

export default Home;
