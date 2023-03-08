import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, AppDispatch } from '../store';
import { saveTheme, resetTheme } from '../reducers/ThemeReducer';
import { langChange } from '../reducers/LanguageReducer';
import { fetchUsers } from '../reducers/FetchUsersReducer';
import '../App.css';
import { THEMES, LanguageOptions } from '../common';


interface langOption {
    id: string;
    text: string;
}

// interface user {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

export const Login = () => {
    const [newUsername, setNewUsername] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();        // used to dispatch necessary actions defined in store from component
    const username = useSelector((state: any) => state.user.value.username);   // used to get the value from store to any component in the entire app without passing in props
    const currentTheme = useSelector((state: any) => state.theme.value.theme);
    const selectedLang = useSelector((state: any) => state.lang.value.lang);
    const userFetched = useSelector((state: any) => state.fetchUsers.entities);
    const isLoading = useSelector((state: any) => state.fetchUsers.loading);
    console.log(userFetched, isLoading);

    const [langOptions] = useState(LanguageOptions);

    function onSwitchTheme(e: ChangeEvent<HTMLInputElement>) {
        console.log("Checkbox changed", currentTheme, e.target.checked);
        if (e.target.checked) {
            console.log("Inside DARK");
            dispatch(saveTheme({ theme: THEMES.DARK }));
        }
        else {
            dispatch(saveTheme({ theme: THEMES.LIGHT }));
        }
    }

    function onSelectLanguage(item: langOption) {
        dispatch(langChange({ lang: item.text }));
        console.log("selected language", selectedLang);
    }

    function handleLogout() {
        setNewUsername('');
        dispatch(logout());
    }

    // run twice on mount since StrictMode is enabled in React 18, even if empty dependency array is provided.
    useEffect(() => {
        const loadUsers = async () => {
            //dispatch the thunk as needed in the app
            dispatch(fetchUsers(4));
        };
        loadUsers();
    }, [dispatch]); 

    return <div className='login'> <h2>{username}</h2>
        <input type="text" value={newUsername} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value)} />

        <button onClick={() => dispatch(login({ username: newUsername }))}>Login</button>

        <button onClick={handleLogout}>Logout</button>

        { /* <button onClick={() => dispatch(saveTheme({ theme: currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT' }))}>Change Theme</button>*/}
        <label className='label'>
            <input type="checkbox"
                onChange={onSwitchTheme}
                checked={currentTheme === 'DARK'}
            /> Change Theme
        </label>
        <button onClick={() => dispatch(resetTheme())}>Reset Theme</button>

        <div>
            {langOptions.map((item, index) => {
                return <div key={index} className='list-language' onClick={() => onSelectLanguage(item)}>
                    <span>{item.text}</span>
                    <input type="radio"
                        value={item.text}
                        checked={item.text === selectedLang}
                        onChange={e => { }}
                    />
                </div>
            })}
            <span><h4>Selected Language:</h4>{selectedLang}</span>
        </div>
        <div>
            {isLoading === 'succeeded' ? <div className='users-list'>
                <h2>Users List</h2>
                <ul>
                    {userFetched.map((data: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                        <li key={data.id}> {data.name}</li>
                    ))}
                </ul>
            </div> : isLoading === 'pending' ? <h4>Please wait..Users data fetching is in progress</h4>
                : isLoading === 'failed' ? <h4>Unable to fetch Users data..Please try after a while..</h4> : null}
        </div>
    </div>
};