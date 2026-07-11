import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

function PlayerList() {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {

        fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Messi")

            .then((respuesta) => respuesta.json())

            .then((datos) => {

                setJugadores(datos.player || []);

            });

    }, []);

    return (

        <div>

            {

                jugadores.map((jugador) => (

                    <PlayerCard
                        key={jugador.idPlayer}
                        jugador={jugador}
                    />

                ))

            }

        </div>

    );

}

export default PlayerList;