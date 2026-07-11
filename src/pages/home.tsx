import { useEffect, useState } from "react";
import Playercard from "../componentes/Playercard";

interface Player {
  idPlayer: string;
  strPlayer: string;
  strThumb: string;
  strNationality: string;
  strTeam: string;
  strSport: string;
  strPosition: string;
  dateBorn: string;
}

const Home = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [search, setSearch] = useState<string>("Messi");

  const buscarJugador = async (nombre: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${nombre}`
      );

      const data = await response.json();

      setPlayers(data.player || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    buscarJugador("Messi");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    buscarJugador(search);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚽ Buscador de Jugadores</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar jugador..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
          }}
        />

        <button type="submit">Buscar</button>
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {players.length > 0 ? (
          players.map((player) => (
            <Playercard key={player.idPlayer} player={player} />
          ))
        ) : (
          <h2>No se encontraron jugadores.</h2>
        )}
      </div>
    </div>
  );
};

export default Home;