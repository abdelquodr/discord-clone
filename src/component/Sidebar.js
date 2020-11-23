import React, { useState, useEffect } from 'react';
import '../css/sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import db from '../firebase'


const Sidebar = () => {
    const user = useSelector(selectUser);
    { console.log(user) }
    const [channels, setChannels] = useState();

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
            )
        })
        console.log(channels)
    }, []);

    const handleAddChannel = (e) => {
        const channelName = prompt('Enter a new channel name');

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            })
            console.log(channels)
        }
    }

    return (
        // <div style={{ maxHeight: '100vh !mportant' }} >
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>Ace Dev</h2>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4> Add Channel</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
                </div>

                <div className="sidebar__channelList">

                    {channels?.map((channel) => (
                        <SidebarChannel channelName={channel.channelName} id={channel.id} key={channel.id} />
                    ))}

                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">

                <Avatar onClick={() => auth.signOut()} src={user?.photo} />

                <div className="sidebar__profileInfo">
                    <h3> {user?.displayName} </h3>
                    <p>#{user?.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
        // </div >
    );
}

export default Sidebar;
