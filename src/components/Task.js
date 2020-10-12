import React from "react";
import styled from "styled-components";
import TaskStatus from "./TaskStatus";

const Task = ({id, name, completed}) => {
    return (
        <TaskWrapper>
            <p style={{fontSize: '140%', margin: '10px 0'}}>{name}</p>
            <TaskStatus completed={completed} name={name} id={id}/>
        </TaskWrapper>
    );
};

const TaskWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: auto 30%;
    column-gap: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
`;

export default Task;