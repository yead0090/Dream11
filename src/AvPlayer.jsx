import PropTypes from 'prop-types';
import { FaRegUserCircle } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const AvPlayer = ({ player,handleSelPlayer }) => {
    const { name, role, country, image_url, bowling_style, batting_style,Price } = player;


    return (
        <div>

            <div className='border border-slate-200 rounded-lg p-4'>
                <img className='w-full h-[250px] rounded-lg' src={image_url} alt="" />
                <p className='flex items-center gap-2 font-bold text-xl'><FaRegUserCircle /> {name}</p>
                <div className='flex justify-between mb-2'>
                    <p className='flex items-center gap-2'><IoFlagSharp />{country}</p>
                    <p className='bg-slate-200 p-1 rounded-md'>{role}</p>
                </div>
                <hr />
                <p className='my-2 font-bold'>Rating</p>
                <div className='flex items-center justify-between font-bold'><p>Batting style</p> <p className='  font-normal '>{batting_style}</p></div>
                <div className='flex items-center justify-between my-2 font-bold'><p>Bowling style </p>
                    <p className='  font-normal'>{bowling_style}</p></div>
                    <div className='flex items-center justify-between'>
                    <p>Price: ${Price}</p>
                    <button onClick={()=>handleSelPlayer(player)} className='p-1 border border-slate-200  rounded-lg  hover:bg-yellow-400 hover:font-semibold '>Choose Player</button>
                    </div>




            </div>
        </div>
    );
};


AvPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelPlayer:PropTypes.func.isRequired
};

export default AvPlayer;