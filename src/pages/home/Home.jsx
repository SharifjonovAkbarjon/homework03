import Blogs from "@/components/blogs/Blogs";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Button onClick={() => dispatch({ type: "LOGOUT" })}>
                Log Out
            </Button>
            <Blogs />
        </div>
    );
};

export default Home;
