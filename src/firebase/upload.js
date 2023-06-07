import MOCK_DATA from '../Data/MOCK_DATA.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

MOCK_DATA.forEach((el) => delete el.id)

const serviciosRef = collection(db, 'servicios')

MOCK_DATA.forEach((el) => {
    addDoc(serviciosRef, el)
})