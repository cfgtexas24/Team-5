import React, { useState, useEffect } from 'react';

const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data); // Set the fetched users into state
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this runs only once on component mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>List of Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersComponent;
