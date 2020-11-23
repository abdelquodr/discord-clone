import React, { useState, useEffect } from 'react';
import '../css/chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectedChaneId, selectedChanelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import firebase from 'firebase'


const Chat = () => {
    const channelId = useSelector(selectedChaneId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectedChanelName)
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState();

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                });
            console.log(messages)
        }
    }, [channelId]);

    const sendMessages = e => {
        e.preventDefault();

        console.log('from USER chat>>>>>>', user)
        console.log('from MESSAGE chat>>>>>>', messages)


        db.collection('channels').doc('channelId').collection('messages').add(
            {
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user.displayName,
            }
        );
        setInput('');

    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages?.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form  >
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder={`Message #${channelName}`}
                    />
                    <button onClick={sendMessages} className="chat__inputButton" type='submit'>
                        Send Message
                    </button>
                </form>

                <div className="chat__inputActions">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
}

export default Chat;
