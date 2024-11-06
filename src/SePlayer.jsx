import PropTypes from 'prop-types';
import { MdDeleteOutline } from "react-icons/md";
const SePlayer = ({handleDelPlayer,selPlayers}) => {
    
    return (
    
        <div>
            <div className="mb-3 flex justify-between  border border-green-300  rounded-xl">

                <div className="flex items-center  ">
                    <img className=" rounded-2xl p-2 w-28 h-20" src={selPlayers.image_url} alt="" />
                    <div className="">
                        <p className="font-bold text-black ">{selPlayers.name}</p>
                        <p className="text-slate-500">{selPlayers.role}</p>
                        <p> ${selPlayers.Price}</p>

                    </div>

                </div>
                <button onClick={()=>handleDelPlayer(selPlayers.id)}><MdDeleteOutline /></button>

            </div>
        </div>
    );
};
SePlayer.propTypes = {
    selPlayers: PropTypes.object.isRequired,
    handleDelPlayer:PropTypes.func.isRequired
};

export default SePlayer;