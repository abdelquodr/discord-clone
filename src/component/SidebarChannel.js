import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/sidebarChannel.css'
import { setChannelInfo } from '../features/appSlice';

const SidebarChannel = ({ id, channelName }) => {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName,
        }))}>
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channelName}
                {console.log(channelName)}
            </h4>
        </div>
    );
}

export default SidebarChannel 