import React from 'react';
import '../css/chatheader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpOutlined'

const ChatHeader = ({ channelName }) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#
                        {channelName}
                    </span>
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltRoundedIcon />
            </div>

            <div className="chatHeader__search">
                <input type="text" placeholder='Search' />
                <SearchRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    );
}

export default ChatHeader;
