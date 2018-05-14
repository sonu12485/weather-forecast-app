export default function(state = null, action)
{
    switch(action.type)
    {
        case 'SELECT_WEATHER':
            console.log(action.payload);
            return action.payload;
        default :
            return state;
    }
}