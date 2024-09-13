import React from "react";
import Modal from "../model/Modal";
import { Button, Form, Input } from "antd";

const Create = ({ show, setShow }) => {
    const onFinish = (values) => {
        console.log(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            {show && (
                <Modal close={() => setShow(false)}>
                    <Form
                        className="bg-white p-3 w-[400px]"
                        layout="vertical"
                        name="register"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item label="Title" name="title">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Desc" name="desc">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="w-full"
                                type="primary"
                                htmlType="submit">
                                create
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
        </div>
    );
};

export default Create;
