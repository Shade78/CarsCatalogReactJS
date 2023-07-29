import CarItem from './car-item/CarItem.jsx'
import { useState, useEffect, useCallback } from 'react';
import {cars as carsData} from './cars.data'
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import axios from 'axios';
import { CarService } from '../../../../services/car.service.js';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './Payer.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider.jsx';


function Home() {

    const [colorTheme, setColorTheme] = useState('black')
    const [button, setButton] = useState(false)

    const [cars, setCars] = useState([])

    const {user, setUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll()

            setCars(data)
        }

        fetchData()

    }, [])
    
    const nav = useNavigate()

    

    useEffect(() => {
              
        document.body.style.backgroundColor = colorTheme
        console.log(colorTheme)
        setButton(false)
    }, [button])
    
    return (
        <div className='container'>
            <div>
                <input className='myInput' type='color' onChange={(e) => setColorTheme(e.target.value) }></input>
                <button className='btn' onClick={(e) => setButton(true)}>set color theme</button>
            </div>
            
            <h1>Cars catalog</h1>

            {user ?
            <> 
                <h2>
                    Welcome, {user.name}
                </h2>
                <button className='btn' onClick={() => setUser(null)}> Logout </button>
            </>
            : <button className='btn' onClick={() => setUser({
                name: 'Damir'
            })}> Login </button>
            }
            <VideoPlayer />

            <button className='btn' onClick={() => nav('/car/1')}>go to car #1 </button>
            <button className='btn' onClick={() => nav('/car/2')}>go to car #2 </button>
            <CreateCarForm setCars={setCars}/>
            <h3>By the way, you can add to /car/1 etc. into address bar to get in car's page without reloading or press button "read more"</h3>
            <div className='cars__container'>   
                {cars.length ? (
                    cars.map((car) => <CarItem className='cars' key={car.id} car={car} />)
                ) : (
                    <p>There are no cars</p>
                )}
            </div>
            <footer>made by me</footer>
        </div>
    );
}

export default Home;
