import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div data-testid='users-page'>
            {users.map((user) => {
                return (
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}
                        data-testid='user-item'
                    >
                    {user.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default Users;
