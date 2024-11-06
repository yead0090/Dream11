import PropTypes from 'prop-types';

import SePlayer from "./SePlayer";
const SePlayers = ({handleDelPlayer, selPlayers,handleAvailableBtn}) => {
    
    return (
        <div className='mb-60 max-w-6xl mx-auto'>
             {
                selPlayers.map((selPlayers)=><SePlayer handleDelPlayer={handleDelPlayer} selPlayers={selPlayers} key={selPlayers.id} ></SePlayer>)
                
                
                
            }
            <div className='mt-10'>
            <a onClick={()=>handleAvailableBtn("available")} className=' bg-yellow-300 font-bold text-black p-3 border hover:bg-yellow-600 rounded-2xl' ><button >Add More Players</button></a>
            </div>
        </div>
    );
};
SePlayers.propTypes = {
    selPlayers: PropTypes.array.isRequired,
    handleDelPlayer:PropTypes.func.isRequired,
    handleAvailableBtn:PropTypes.func.isRequired
};


export default SePlayers;