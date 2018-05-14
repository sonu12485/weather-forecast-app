export default function(state = [], action)
{
    console.log('action',action);

    switch(action.type)
    {
        case 'FETCH_WEATHER':
            if(action.payload.data)
                return [action.payload.data].concat(state);
            else
                alert("Invalid City!!");
//Donot use .push as it manipulates the old existing state and doesn't create a new array
//Use .concat instead as it creates a new array and doesn't manipulate existing state 
    }

    return state;
}