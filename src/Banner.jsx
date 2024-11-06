import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({handleAddMoney}) => {
    return (
        <div>
            <div className="banner mx-auto flex justify-between flex-col  items-center gap-6 mt-4 rounded-2xl z-0">
                <img className=" w-56 " src="/assets/banner-main.png" alt=""/>
                <div className=' font-bold text-center'><p className='text-3xl text-white'>Assemble Your Ultimate Dream 11 Team</p>
                <p className='text-slate-500 mt-2 mb-2'>Beyond Boundaries Beyond Limits</p>
                <button  onClick={handleAddMoney} className='border border-yellow-500 p-2 rounded-lg bg-yellow-300 mb-8 hover:hover:bg-yellow-600'>Claim Free Credits</button></div>
            </div>
            
            <div className=''>

            </div>
            
        </div>
    );
};

Banner.propTypes = {
    
    handleAddMoney:PropTypes.func.isRequired
};
export default Banner;