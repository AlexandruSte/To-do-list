import React from "react";
import styled from "styled-components";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import { useSelector } from "react-redux";

const ToDoPanel = () => {
    const tasks = useSelector(state => state.tasks);

    return (
        <ToDoPanelWrapper>
            <div style={{marginBottom: 30}}>
                <h1>To do</h1>
                <AddTaskForm/>
            </div>
            <div>
                {Object.values(tasks).map(item => <Task name={item.name} completed={item.completed} id={item.id}/>)}
            </div>
        </ToDoPanelWrapper>
    );
};

const ToDoPanelWrapper = styled.div`
    margin: 50px auto 0 auto;
    width: 35%;
    box-shadow: 3px 4px 4px 6px #DCDCDC;
    padding: 10px;
`;

export default ToDoPanel;