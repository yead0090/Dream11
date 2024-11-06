
import PropTypes from 'prop-types';
const Navbar = ({balance}) => {
    return (
        <div className=' sticky top-0 z-20 bg-transparent backdrop-blur-2xl'>
            <div className='flex justify-between max-w-7xl mx-auto mt-2  '>
                <div><img src="/assets/logo-footer.png" alt="" /></div>
                <div className='font-bold text-slate-500 flex gap-4 items-center'>
                    <p>Home</p>
                    <p>Feature</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                    <p className='border border-b-slate-300 p-1 rounded-lg text-black'>{balance} coin 💰</p>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    balance:PropTypes.number.isRequired
}
export default Navbar;