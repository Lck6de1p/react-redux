import {ADD_PERSON} from '../constant'

// 创建一个person action
export const addPerson = (personObj) => ({type: ADD_PERSON, data: personObj})