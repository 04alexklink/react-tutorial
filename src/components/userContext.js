import {createContext} from 'react'

const UserContext = createContext('Adam K')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}