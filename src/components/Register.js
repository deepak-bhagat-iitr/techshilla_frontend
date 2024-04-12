import React, { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/register.module.css"; // Import CSS module

function Register() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        // console.log(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        axios.post("http://localhost:5000/register", formData).then(user => {
            console.log(user);

            navigate('/login')
        }).catch(err => {
            console.log(err);
        })
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/user", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            // console.log(res)
            navigate('/user')
        }).catch(err => {
            console.log(err);
            navigate('/register')
        })
    }, [])
    return (
        <div className={styles.register}> {/* Use className from CSS module */}
            <div className={styles.register_container}> {/* Use className from CSS module */}
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Name" name="name" value={formData.name} onChange={handleChange} required />
                    <input type="email" placeholder="Enter your Email Address" name="email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" placeholder="Enter your Telephone Number" name="telephone" value={formData.telephone} onChange={handleChange} required />
                    <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} required />
                    <input type="submit" value="Register" />
                </form>
                <div className={styles["register-link"]}> {/* Use className from CSS module */}
                    <p>Already have an Account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
