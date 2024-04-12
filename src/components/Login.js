import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/login.module.css";

function LoginComponent() {
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helper, setHelper] = useState(null); // Changed initial state to null

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("https://techshilla-backend.onrender.com/user", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res)
            navigate('/user')
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    }, []);

    useEffect(() => {
        // Fetch users and filter based on email
        axios.get("https://techshilla-backend.onrender.com/users")
            .then(res => {
                const filteredUsers = res.data.filter(item => item.email === email);
                setHelper(filteredUsers.length > 0 ? filteredUsers[0] : null);
            })
            .catch(err => {
                console.log(err);
            });
    }, [email]); // Run this effect whenever email changes
    const submit = (e) => {
        e.preventDefault();
        localStorage.setItem('helper', JSON.stringify(helper));

        axios.post("https://techshilla-backend.onrender.com/login", { email, password })
            .then(user => {
                console.log(user);
                localStorage.setItem('token', user.data.token);
                if (email === 'ceo@gmail.com') {
                    // Navigate to CEO or Manager route
                    navigate(`/ceo`);
                }
                else if (email === 'manager@gmail.com') {
                    // Navigate to CEO or Manager route
                    navigate(`/manager}`);
                } else {
                    const nextState = helper ? { state: helper } : null;
                    navigate('/user', nextState);
                }

                // Check if helper is not null before accessing its properties

            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={styles.login}>
            <div className={styles.login_div}>
                <h2><i className={`${styles.icon} fas fa-lock`}></i> Login</h2>
                <form onSubmit={submit}>
                    <input type="email" value={email} id="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" required />
                    <input type="submit" value="Login" />
                </form>
                <div className={styles["register-link"]}>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
