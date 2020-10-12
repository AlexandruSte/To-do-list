import React from "react";
import styled from "styled-components";
import {Button} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {changeTask, removeTask} from "../redux/actions";

const TaskStatus = ({id, name, completed}) => {
    const dispatch = useDispatch();

    return(
        <TaskStatusWrapper>
            {completed === 'N' &&
            <>
                <Button
                    type="primary"
                    shape='circle'
                    style={{marginRight: '10px'}}
                    onClick={() => dispatch(changeTask(id, name))}
                >
                    <CheckOutlined/>
                </Button>
                <Button
                    type="primary"
                    shape='circle'
                    danger
                    onClick={() => dispatch(removeTask(id))}
                >
                    <CloseOutlined/>
                </Button>
            </>}
            {completed === 'Y' &&
            <>
                <p style={{fontSize: '120%', color: 'green'}}><b>Finished</b></p>
            </>}
        </TaskStatusWrapper>
    );
};

const TaskStatusWrapper = styled.div`
    padding-top: 10px;
`;

export default TaskStatus;