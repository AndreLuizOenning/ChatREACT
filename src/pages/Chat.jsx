import Cabecalho from "../components/Cabecalho";
import Msg from "../components/Msg";
import './chat.css'
export function Chat(){
 

    return(
        <div>
            <Cabecalho/>
            <div id="telachat" className="msglist">
                <Msg user='Atendente:' text='Oi'/>
                <Msg user='Atendente:' text='Recebemos seu ticket, qual seu problema?'/>
            </div>
            <form id="form-chat-send" method="post">
                <input type="text" id="message" name="message" placeholder="Digite sua mensagem aqui:" required/>
                <button id="btnchat" onClick={newMSG} type="submit">ENVIAR</button>
            </form>
        </div>
    )
}
function newMSG(event){
    event.preventDefault();
    const txtPessoa = document.querySelector('#message')


    const nwM = document.createElement("div")
    nwM.classList.add("msg", 'message-user')
    nwM.innerHTML = `
    <div className="user">Usuário:</div>
    <div className="txt">${txtPessoa.value}</div>`;        

  
    const inputItem = document.querySelector("#telachat")
    inputItem.appendChild(nwM)

    txtPessoa.value = ''
  };

