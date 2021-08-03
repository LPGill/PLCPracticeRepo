import { atom } from 'recoil';

const defaultImage=require('../assets/default.jpg')
export const imageState = atom({
    key:'imageState',
    default:{name:'Default Image',image:defaultImage}
})