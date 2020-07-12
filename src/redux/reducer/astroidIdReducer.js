

export default (state= [] , action)=>{
    switch (action.type){
        case 'ASTROID_ID':
            return action.payload;
            default :
            return state;
    }
}