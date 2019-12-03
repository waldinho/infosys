const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEE':
            return { 
                ...state, 
                loading: true,
                displayDetails: false,
            }
        case 'EMPLOYEE_RECEIVED':
            return { 
                ...state, 
                employee: action.json, 
                loading: false,
                displayDetails: false,
            }
        case 'DISPLAY_EMPLOYEE':
            console.log('state: ', state)
            return  {
                ...state,
                lightbox: action.employee,
                displayDetails: true,
            }
        default:
            return state
    }
   }
   export default reducer