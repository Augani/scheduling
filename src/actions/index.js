import {OPEN_DRAWER, CLOSE_DRAWER} from './types'

export const OpenDrawer = ()=>{
    return {
        type: OPEN_DRAWER,
        payload: true
    }
}
export const CloseDrawer = ()=>{
    return {
        type: CLOSE_DRAWER,
        payload: false
    }
}