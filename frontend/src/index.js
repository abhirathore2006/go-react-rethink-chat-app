import React from "react";
import ReactDOM from "react-dom";
import {ChannelSection} from './channels/ChannelSection'
import {Socket} from './util/Socket'
import {UserSection} from './users/UserSection'
import {MessageSection} from './messages/MessageSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {connected:false, channels:[], activeChannel:null, users:[], messages:[]}
  }
  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on("connect", this.onConnect)
    socket.on("disconnect", this.onDisconnect)
    socket.on('channel add', this.onAddChannel)
    socket.on('user add', this.onAddUser)
    socket.on('user edit', this.onEditUser)
    socket.on('user remove', this.onRemoveUser)
    socket.on('message add', this.onMessageAdd)
  }



  onConnect = () =>{
    this.setState({connected:true})
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }
  onDisconnect = () => {
    this.setState({connected:false})
  }

  onMessageAdd = message =>{
    let {messages} = this.messages;
    messages.push(message);
    this.setState({messages})
  }

  onAddUser = user => {
    let {users} = this.state;
    users.push(user);
    this.setState({users})
  }


  onEditUser = editUser => {
    let {users} = this.state;
    users = users.map(user=>{
      if(user.id===editUser.id){
        return editUser;
      }
      return user;
    });
    this.setState({users})
  }

  onRemoveUser = removeUser => {
    let {users} = this.state;
    users = users.filter(user=>user.id !== removeUser.id);
    this.setState({users})
  }

  addChannel = name => {
    this.socket.emit('channel add', {name})
  }

  onAddChannel = channel => {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels})
  }

  setChannel = activeChannel => {
    this.socket.emit('message unsubscribe');
    this.setState({activeChannel, messages:[]})
    this.socket.emit('message subscribe', {channelId: activeChannel.id});
    // TODOL ge channel Messages
  }

  setUserName = name => {
    this.socket.emit("user edit", {name})
  }

  addMessage = body => {
    let {activeChannel} = this.state;
    this.socket.emit("message add", {channelId: activeChannel.id, body})
  }
  render(){
    let {channels, activeChannel, users, messages} = this.state;
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection  channels={channels} activeChannel={activeChannel} addChannel={this.addChannel} setChannel={this.setChannel} />
          <UserSection  users={users} setUserName={this.setUserName} />
        </div>
        <MessageSection messages={messages} addMessage={this.addMessage}  activeChannel={activeChannel}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
