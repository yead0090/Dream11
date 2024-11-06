
import './App.css'
import Navbar from './navbar'
import Banner from './Banner'
import Footer from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import BtnSelection from './BtnSelection'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('/Fakedata.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }
    , [])
  // build for btn toggle
  const [status, setStatus] = useState("available")

  const handleAvailableBtn = (status) => {
    if (status == "selected") {
      setStatus("selected");
      document.getElementById("se-btn").style.cssText = `background-color:yellow;
      font-weight:bold;`;
      document.getElementById("av-btn").style.cssText = `background-color:white;
      font-weight:normal;`;
    }
    else if (status == "available") {
      setStatus("available");
      document.getElementById("av-btn").style.cssText = `background-color:yellow;
      font-weight:bold;`;
      document.getElementById("se-btn").style.cssText = `background-color:none;
      font-weight:normal;`;
    }
  }


  // build for select player
  const [selPlayers, setSelPlayers] = useState([]);

  const handleSelPlayers = (player) => {
    const isExist = selPlayers.find((p) => p.id == player.id);

    if (isExist) {
      toast.error("player already selected !");
    }
    else {


      if (balance < player.Price) {
        toast.error("Insufficient Balance")
      }

      else {
        if (selPlayers.length >= 6) {
          toast.error("Player full")
        }
        else {
          const newSelPlayers = [...selPlayers, player]
          setSelPlayers(newSelPlayers);
          toast.success("Congrats! the Player is added to your team. ");
          const newBalance = balance - player.Price;
          setBalance(newBalance)

        }
      }
      // 




    }

  }

  // build for delete player
  const handleDelPlayer = (id) => {
    const newSelPlayers = selPlayers.filter((p) => p.id != id)
    setSelPlayers(newSelPlayers)
    toast.warning("Player Removed! ");
    
  }

  // build for add money

  const [balance, setBalance] = useState(0);

  const handleAddMoney = () => {
    const newBalance = balance + 7000;
    setBalance(newBalance);
    toast.success("Credit Added To Your Account");

  }

  return (
    <>
      <div>
        <Navbar balance={balance}></Navbar>
        <ToastContainer position='top-center' ></ToastContainer>
        <Banner handleAddMoney={handleAddMoney}></Banner>
        <BtnSelection handleDelPlayer={handleDelPlayer} selPlayers={selPlayers} handleSelPlayer={handleSelPlayers} players={players} status={status} handleAvailableBtn={handleAvailableBtn}></BtnSelection>

        <Footer></Footer>
      </div>


    </>
  )
}

export default App
