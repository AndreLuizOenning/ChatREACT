import Cabecalho from "../components/Cabecalho";
import { useNavigate } from "react-router-dom";
import './home.css'

export function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <Cabecalho/>
            <div className="lgn">
                <div className="input">
                    <label htmlFor="inputn">Digite seu nome:</label>
                    <input id='inputn' type="text" />
                    <button onClick={() => navigate('/chat')} >Entrar</button>
                </div>
            </div>
        </div>
    )
}