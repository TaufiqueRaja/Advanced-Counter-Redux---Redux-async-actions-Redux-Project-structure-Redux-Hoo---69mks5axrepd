export const inc =()=>{
    return {
        type: 'INCREMENT'
    }
}
export const dec = ()=>{
    return{
        type: 'DECREMENT'
    }
}
export const incByNum = num=>{
    return{
        type: 'INCREMENTBYAMOUNT',
        payload:num
    }
}
export const signIn=()=>{
    return{
        type: 'SIGN_IN'
    }
}
export const signOut=()=>{
    return{
        type: 'SIGN_OUT'
    }
}
