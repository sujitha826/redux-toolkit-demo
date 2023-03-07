import { useSelector } from "react-redux";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
    const currentTheme = useSelector((state: any) => state.theme.value.theme);

    return <div>
        <h2> THIS IS THE HOME PAGE</h2>
        User : {username ? username : 'No user logged in'}
        <p>Theme : {currentTheme}
        </p>
    </div>;
};