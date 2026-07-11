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

interface PlayerCardProps {
  player: Player;
}

const Playercard = ({ player }: PlayerCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img
        src={player.strThumb}
        alt={player.strPlayer}
        width={200}
      />

      <h2>{player.strPlayer}</h2>

      <p>
        <strong>País:</strong> {player.strNationality}
      </p>

      <p>
        <strong>Equipo:</strong> {player.strTeam}
      </p>

      <p>
        <strong>Deporte:</strong> {player.strSport}
      </p>

      <p>
        <strong>Posición:</strong> {player.strPosition}
      </p>

      <p>
        <strong>Nacimiento:</strong> {player.dateBorn}
      </p>
    </div>
  );
};

export default Playercard;