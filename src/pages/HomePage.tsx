import { useSelector } from "react-redux";
import { useState } from 'react';
// import ReactQuery from "../components/ReactQuery";
import { Modal } from "../helpers/Modal";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
    const currentTheme = useSelector((state: any) => state.theme.value.theme);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        console.log('inside show');
        setShow(true);
    }

    return <div className="home">
        <h2> THIS IS THE HOME PAGE</h2>
        User : {username ? username : 'No user logged in'}
        <span><p>Theme : {currentTheme}</p></span>
        <button onClick={handleShow}>Show Modal</button>
        <Modal show={show} title='My Modal' onClose={() => setShow(false)} />
    </div>;
};