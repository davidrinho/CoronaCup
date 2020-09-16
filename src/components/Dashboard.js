import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad, faListUl, faUsers} from '@fortawesome/free-solid-svg-icons';
import '../css/dashboard.css';


const Dashboard = (props) => {
    return (
        <div className="containerDiv">
            <div className="navigationDiv">
                <div className="navItemDiv" onClick={() => props.history.push('/games')}>
                    <FontAwesomeIcon
                        className="navItemIcon"
                        icon={faGamepad}
                        size={"5x"}
                        color={"#69083f"}
                    />
                    <h1>Games</h1>
                </div>
                <div className="navItemDiv" onClick={() => props.history.push('/scoreboard')}>
                    <FontAwesomeIcon
                        className="navItemIcon"
                        icon={faListUl}
                        size={"5x"}
                        color={"#69083f"}
                    />
                    <h1>Scoreboard</h1>
                </div>
                <div className="navItemDiv" onClick={() => props.history.push('/contestants')}>
                    <FontAwesomeIcon
                        className="navItemIcon"
                        icon={faUsers}
                        size={"5x"}
                        color={"#69083f"}
                    />
                    <h1>Contestants</h1>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;