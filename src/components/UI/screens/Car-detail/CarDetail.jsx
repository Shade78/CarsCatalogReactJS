import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem'
import { useEffect } from 'react'
import { CarService } from '../../../../services/car.service'
import { Link } from 'react-router-dom'

const CarDetail = () => {

    const {id} = useParams()
    console.log(id)
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)
            console.log(data)
            setCar(data)
        }

        fetchData()
    }, [id])

    if(!car?.name) return <div> Car not found</div>
    
    return (
    <div>
        <Link to='/'> Back </Link>
        <CarItem car={car}/>
    </div>
    )
}

export default CarDetail