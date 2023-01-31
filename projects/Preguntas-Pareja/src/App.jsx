import preguntas from "./preguntas";
import { useState, useEffect } from "react";
export function App() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    return (
        <main className="app">
            <div className="pregunta">
                <div className="numero-pregunta">
                    <span>Pregunta {preguntaActual + 1} de </span>{preguntas.length}
                </div>
                <div className="titulo-pregunta">
                    {preguntas[preguntaActual].titulo}
                </div>
            </div>
            <div className="respuesta">
                <button>Respuesta 1</button>
                <button>Respuesta 2</button>
            </div>
        </main>
    );
}
