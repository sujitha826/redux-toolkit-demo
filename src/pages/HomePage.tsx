import { useSelector } from "react-redux";
// import ReactQuery from "../components/ReactQuery";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
    const currentTheme = useSelector((state: any) => state.theme.value.theme);

    return <div className="home">
        <h2> THIS IS THE HOME PAGE</h2>
        User : {username ? username : 'No user logged in'}
        <span><p>Theme : {currentTheme}</p></span>
    </div>;
};