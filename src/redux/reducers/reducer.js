 const Inital_State ={
    User_data:[]
 }

export const todoreducers =(state=Inital_State,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "ADD_DATA" :
        return{
                  ...state,
                    User_data:[...state.User_data, action.payload ]
                    
                }
                case "RMV_DATA":

                const dltdata = state.User_data.filter((ele, k) => k !== action.payload)
    
                return {
                    ...state,
                    User_data: dltdata
                }
                case "UPDATE_DATA" : 
                const updatedata = state.User_data.map((ele,k)=> k == action.d ? action.payload : ele)
    
                return {
                    ...state,
                    User_data: updatedata
                }
        default :
         return state        
    } 
}