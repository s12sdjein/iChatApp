const socket=io('http://localhost:8000');
const form=documnet.getElementById('send-container');
const messageinp=documnet.getElementById('mess');
const messagec=documnet.querySelector('.container');

var audio=new Audio(ting.mp3);

const append=(message,position)=>{
    const messageElement=documnet.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position=='left'){
        audio.play();

    }
}

form.addeventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append('you:${message}','right');
    socket.emit('send',message);
    messageInput.value=''
})

const name=prompt("Enter your name to join");
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
    append('${name} joined the chat',' ')
})

socket.on('recieve',name=>{
    append('${data.message}:${data.user}','right ');
})

socket.on('left',name=>{
    append('${data.user}:${data.message}','left');
})