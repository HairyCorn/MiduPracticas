import { preguntas, respuestas } from "./preguntas";
import { useState, useEffect } from "react";
export function App() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    function handleAnswerSubmit(e) {
        e.target.classList.add("correct");
        setTimeout(() => {
            if (preguntaActual == preguntas.length - 1) {
                setIsFinished(true);
            } else {
                e.target.classList.remove("correct");
                setPreguntaActual(preguntaActual + 1);
            }
        }, 1500);

    }
    if (isFinished) {
        return (
            <main className="app">
                <div className="juego-terminado">
                    <span className="mensaje-final">Has terminado con las preguntas 🤓</span>
                    <button className="btn-finalizado" onClick={() => (window.location.href = "/")}>Regenerar preguntas</button>
                </div>
            </main>
        );
    }
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
                {respuestas.map((respuesta) => (
                    <button key={respuesta}
                        onClick={(e) => handleAnswerSubmit(e)}
                    >
                        {respuesta}
                    </button>
                ))}
            </div>
        </main>
    );
}
