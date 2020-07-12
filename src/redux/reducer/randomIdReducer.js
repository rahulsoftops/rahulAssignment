export default (state= [] , action)=>{
    switch (action.type){
        case 'RANDOM_ID':
            return action.payload;
            default :
            return state;
    }
}