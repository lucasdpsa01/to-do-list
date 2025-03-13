import { useState } from "react"

export default function Create() {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);

    const addTarefa = () => {
        if (tarefa.trim() !== "") {
            setLista([...lista, tarefa]);
            setTarefa("");
        }
    };

    return (
        <div className="create">
            <div>
                <textarea name="create" id="create" value={tarefa} onChange={(e) => setTarefa(e.target.value)}></textarea>
                <button className="add" onClick={addTarefa}>+</button>
            </div>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}