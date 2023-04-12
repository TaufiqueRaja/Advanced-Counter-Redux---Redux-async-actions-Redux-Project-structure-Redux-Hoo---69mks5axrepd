const initialState={
    islogged:false,
    counter:0
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,counter:state.counter+1
            }
        case "DECREMENT":
            return{
                ...state,counter:state.counter-1
            }
        case "INCREMENTBYAMOUNT":
            return{
                ...state,counter:state.counter+action.payload
            }
        case "SIGN_IN":
            return{
                ...state,islogged:true
            }
        case "SIGN_OUT":
            return{
                ...state,islogged:false
            }
            
        default:
            return state;
    }
}
export default reducer