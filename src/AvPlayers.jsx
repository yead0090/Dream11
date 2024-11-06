import PropTypes from 'prop-types';
import AvPlayer from './AvPlayer';

const AvPlayers = ({players ,handleSelPlayer}) => {

    // const [players, setPlayers] = useState([])

    // useEffect(()=> {fetch('/public/Fakedata.json')
    //     .then(res => res.json())
    //     .then(data => setPlayers(data))}
    //     , [])
    
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-11 mb-60 '>
            
            {
            players.map((player)=><AvPlayer handleSelPlayer={handleSelPlayer} key={player.id} player={player}></AvPlayer>)
                
                
                
            }
            
        </div>
        </div>
    );
};
AvPlayers.propTypes = {
    players: PropTypes.array.isRequired,
    handleSelPlayer:PropTypes.func.isRequired
};

export default AvPlayers;