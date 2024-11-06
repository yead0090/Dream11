import AvPlayers from './AvPlayers';
import SePlayers from './SePlayers';
import PropTypes from 'prop-types';
const BtnSelection = ({ handleDelPlayer,handleAvailableBtn, players, status ,handleSelPlayer,selPlayers}) => {
    return (
        
    < div >
        
        
        <div className="flex justify-between max-w-6xl mx-auto my-9">
       { status==="available"?<p className='font-bold text-2xl'>Available Players</p>:
        <div className='font-bold text-2xl flex'><p>Selected Players</p><p>({selPlayers.length}/6)</p></div>}
        <div className='border border-slate-300 flex   rounded-xl '>
                <button id='av-btn' className='px-4 py-3   rounded-l-xl' onClick={() => { handleAvailableBtn("available") }}>Available</button>
                <button id='se-btn' className=' px-4 py-3 rounded-r-xl' onClick={() => { handleAvailableBtn("selected") }}>Selected({selPlayers.length}/6)</button>
            </div>
        </div>

            { status === "available" ? <AvPlayers handleSelPlayer={handleSelPlayer} players={players}></AvPlayers> : <SePlayers handleAvailableBtn={handleAvailableBtn} handleDelPlayer={handleDelPlayer} selPlayers={selPlayers} ></SePlayers> };
    </div >
    );
};
BtnSelection.propTypes = {
    handleAvailableBtn: PropTypes.func.isRequired,
    handleDelPlayer:PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
    status:PropTypes.string.isRequired,
    handleSelPlayer:PropTypes.func.isRequired,
    selPlayers:PropTypes.array.isRequired

};

export default BtnSelection;