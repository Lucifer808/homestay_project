import './chatBot.css';
import react, { useEffect, useState } from 'react';
import {IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';
function Basic(){
    const [chat,setChat] = useState([]);
    const [inputMessage,setInputMessage] = useState('');
    const [botTyping,setbotTyping] = useState(false);

    
   useEffect(()=>{
   
        console.log("called");
        const objDiv = document.getElementById('messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;
        
    
    },[chat])

    


    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const name = "shreyas";
        const request_temp = {sender : "user", sender_id : name , msg : inputMessage};
        
        if(inputMessage !== ""){
            
            setChat(chat => [...chat, request_temp]);
            setbotTyping(true);
            setInputMessage('');
            rasaAPI(name,inputMessage);
        }
        else{
            window.alert("Please enter valid message");
        }
        
    }


    const rasaAPI = async function handleClick(name,msg) {
    
        //chatData.push({sender : "user", sender_id : name, msg : msg});
        

          await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, "message": msg }),
        })
        .then(response => response.json())
        .then((response) => {
            if(response){
                const temp = response[0];
                const recipient_id = temp["recipient_id"];
                const recipient_msg = temp["custom"];        
                const recipient_msg_parse = JSON.parse(recipient_msg)
                const response_temp = {sender: "bot",recipient_id : recipient_id,msg: recipient_msg_parse};
                setbotTyping(false);
                
                setChat(chat => [...chat, response_temp]);
               // scrollBottom();

            }
        }) 
    }

    console.log(chat);

    const stylecard = {
        position: 'fixed',
        width : '26rem',
        border: '1px solid black',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '5px',
        bottom: '0',
        right: '0',
        margin: '6rem',
        zIndex: '1000',
        backgroundColor: '#fff'
        // boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

    }
    const styleHeader = {
        height: '100%',
        // borderBottom : '1px solid black',
        borderRadius: '5px 5px 0px 0px',
        backgroundColor: '#87b3fb',

    }
    const styleFooter = {
        //maxWidth : '32rem',
        // borderTop : '1px solid black',
        borderRadius: '0px 0px 5px 5px',
        backgroundColor: '#87b3fb',
        height: '100%'
        
        
    }
    const styleBody = {
        paddingTop : '10px',
        height: '28rem',
        overflowY: 'a',
        overflowX: 'hidden',
        
    }

    return (
      <div>
        {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> */}
        

        <div className="container">
        <div className="row justify-content-center">
            
                <div className="card" style={stylecard}>
                    <div className="cardHeader text-white" style={styleHeader}>
                        <h3 style={{marginBottom:'0px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.6rem 0'}}>Tư vấn khách hàng</h3>
                        
                        
                        
                    </div>
                    <div className="cardBody" id="messageArea" style={styleBody}>
                        
                        <div className="row msgarea">
                            {chat.map((user,key) => (
                                <div key={key}>
                                    {user.sender==='bot' ?
                                        (
                                            
                                            <div className= 'msgalignstart'>
                                                <BiBot className="botIcon"  /><h5 className="botmsg">{user.msg}</h5>
                                            </div>
                                        
                                        )

                                        :(
                                            <div className= 'msgalignend'>
                                                <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                            
                        </div>
                
                    </div>
                    {botTyping ? <h6>Bot Typing....</h6> : null}
                    <div className="cardFooter text-white" style={styleFooter}>
                        <div className="row">
                            <form style={{display: 'flex', justifyContent: 'space-around'}} onSubmit={handleSubmit}>
                                <div style={{paddingRight:'0px', width: "80%"}}>
                                    <input onChange={e => setInputMessage(e.target.value)} value={inputMessage} type="text" className="msginp"></input>
                                </div>
                                <div>
                                    <button type="submit" className="circleBtn" ><IoMdSend className="sendBtn" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
        </div>

      </div>
    );
}
  
export default Basic;