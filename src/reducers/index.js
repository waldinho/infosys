const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEE':
            return { 
                ...state, 
                loading: true,
            }
        case 'EMPLOYEE_RECEIVED':
            return { 
                ...state, 
                employee: action.json, 
                loading: false,
            }
        case 'DISPLAY_EMPLOYEE':
            return  {
                ...state,
                lightbox: action.employee,
                displayDetails: true,
            }
        case 'CLOSE_LIGHTBOX':
            return  {
                ...state,
                displayDetails: false,
            }
        default:
            return state
    }
   }
   export default reducer