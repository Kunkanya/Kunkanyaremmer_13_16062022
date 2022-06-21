import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {createStore} from 'redux'
import { rootReducer } from './rootReducer';

const baseURL = 'http://localhost:3001'
const endpointLogin = baseURL + '/user/login'
// set initial states 

// create store from Redux
export const store = createStore(rootReducer)



// create action
const loginAction  =(user)=> {
    return {type : 'USER_LOGIN'}
}


