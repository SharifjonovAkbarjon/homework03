import axios from "@/api";
import React, { useEffect, useState } from "react";
// import Create from "../create/Create";
import { Button, Form, Input } from "antd";
import Modal from "../model/Modal";

const Blogs = () => {
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        axios
            .get("/blogs")
            .then((res) => setData(res.data.payload))
            .catch((err) => console.log(err));
    }, [reload]);
    const handleDelete = (id) => {
        axios.delete(`/blogs/${id}`).then((res) => setReload((p) => !p));
    };
    const lists = data?.map((blog) => (
        <div className="w-80 p-4 border" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
        </div>
    ));
    const onFinish = (values) => {
        console.log(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const handleCreate = () => {
        let blog = { title: `qwertyu`, desc: `123456` };
        axios.post("/blogs", blog).then((res) => setReload((p) => !p));
    };
    return (
        <div>
            <Button onClick={() => setShow(true)}>Create</Button>
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
                        <Form.Item>
                            <Button
                                onClick={handleCreate}
                                className="w-full"
                                type="primary"
                                htmlType="submit">
                                create
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
            <div className="flex gap-3 container mx-auto px-6 flex-wrap">
                {lists}
            </div>
        </div>
    );
};

export default Blogs;
