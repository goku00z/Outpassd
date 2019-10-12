import React from "react";
import {Link} from "react-router-dom";
import UserHistory from "./UserHistory";
import registerApplication from './registerApplication'

const Dashboard = () => {
    return(
        <div className='container'>

            {/* <Link to="/studentlogs">History</Link>
            <h2> Start </h2> */}
            <registerApplication />
            {/* <h2> Start </h2> */}
        </div>
    )
};

export default Dashboard;