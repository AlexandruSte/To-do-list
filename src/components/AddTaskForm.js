import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/actions";

const {Item} = Form;

const AddTaskForm = () => {
    const dispatch = useDispatch();
    const [takeInput, setTakeInput] = useState(true);

    const onFinish = value => {
        setTakeInput(false);
        dispatch(addTask(value.name));
        setTakeInput(true);
    };

    const formStyle = {
        width: '90%',
        marginBottom: '20px',
        marginLeft: '30px'
    };

    return (
        <>
            {takeInput &&
            <Form
                name='add_task'
                onFinish={onFinish}
                style={formStyle}
                layout='inline'
            >
                <Item
                    name='name'
                    rules={
                        [
                            {
                                required: true,
                                message: 'Please input your task name!'
                            },
                            {
                                max: 30,
                                message: '30 characters maximum!'
                            },
                        ]
                    }
                    style={{width: '75%'}}
                >
                    <Input id='name_input'/>
                </Item>

                <Item style={{marginLeft: '7px'}}>
                    <Button htmlType='submit'>
                        <PlusOutlined/> Add
                    </Button>
                </Item>
            </Form>
            }
        </>
    );
};

export default AddTaskForm;