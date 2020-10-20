import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './components/Message';
import FlipMove from 'react-flip-move';

import db from './config/firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';




function App() {
  //hooks
  //{ username: 'Jaman', message: 'Kibali chako' },
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    document.title = "naitao";
  }, []);
  //useEffect run on a condtion
  //runs anytime app renders
  useEffect(() => {
    //run once when app component loads
    //pulls data from the store
    db.collection("messages")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))//map the ids
      });
  }, [])




  useEffect(() => {
    //run code
    setUsername(prompt('Please enter your name'))
  }, []) //no condition

  //All the logic for sending messages
  //listener
  const sendMessage = (e) => {
    e.preventDefault(); // stops automatic refresh on the browser
    //sending data to db
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { username: username, message: input }
    // ]);
    setInput('')
  }


  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&amp;_nc_sid=6825c5&amp;_nc_ohc=6YQrl9oFqlkAX-Ckflb&amp;_nc_ht=scontent-arn2-1.xx&amp;oh=c6e0b8e75482a2742e59e818124abd64&amp;oe=5FAFACFD" alt="Messenger" />
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)} />

          <IconButton
           className="app__iconButton"
            disabled={!input} variant="contained" color="primary" type="submit"
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>


        </FormControl>
      </form>

      <FlipMove>
        {
          //we need the key so that React can identify the part that should be updated
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
