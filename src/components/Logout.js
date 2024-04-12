import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
       
        localStorage.clear();
    
        window.location.href = '/'; // Redirect to login page
    }, []);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default Logout;
