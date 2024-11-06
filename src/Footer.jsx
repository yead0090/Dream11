

const Footer = () => {
    return (
        <div className="">
           
            <div className="bg-[#02051f] pt-52 pb-6 z-3 relative max-w-7xl mx-auto">
            <div className=" gradient-bg  absolute -top-32  left-1/2 -translate-x-1/2 z-2  border border-green-200 text-center flex flex-col items-center p-14 w-3/5  rounded-xl">
            <p className="text-3xl font-bold ">Subscribe to our Newsletter</p>
            <p className="my-4">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-2">
            <input className="border border-green-300 rounded-xl px-8 py-2" type="Email" name="" placeholder="Enter your email" id="" />
            <button className="rounded-xl px-5  font-bold py-2 text-black gradient-btn">Subscribe</button>
            </div>
            </div>
            <div className="mb-14  justify-center flex">
             <img className="" src="/assets/logo-footer.png "alt="" />
            </div>
            <div className=" flex justify-around">
                
                <div> <p className="text-white font-bold text-lg">About Us</p>
                    <p className=" text-slate-600">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p></div>
                <div><p className="font-bold text-lg text-white">Quick Links</p>
                    <ul className="text-slate-600"><li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li></ul></div>
                <div><p className="text-white font-bold text-lg ">Subscribe</p>
                <p className="text-slate-600 my-4">Subscribe to our newsletter for the latest updates.</p>
                <div className="flex flex-row  border border-green-300 rounded-xl ">
                <input className="rounded-l-xl px-8 py-2" type="email" placeholder="Enter your email" />
                <button className="rounded-r-xl px-5  font-bold py-2 gradient-btn text-black ">
                    Subscribe
                </button>
                </div>
                </div>
            </div>
            <div className="text-center">

            <hr className=" border-slate-700 mt-16"/>
            <p className="text-slate-600 mt-4">@2024 Dream11 All rights Reserved</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;