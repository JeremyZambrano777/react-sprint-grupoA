function PlayerCard({ jugador }) {

    return (

        <div className="card">

            <img
                src={jugador.strThumb}
                alt={jugador.strPlayer}
                width="200"
            />

            <h2>{jugador.strPlayer}</h2>

            <p>Equipo: {jugador.strTeam}</p>

            <p>Nacionalidad: {jugador.strNationality}</p>

        </div>

    );

}

export default PlayerCard;