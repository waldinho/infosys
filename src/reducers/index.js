const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_EMPLOYEE':
           return { ...state, loading: true };
      case 'EMPLOYEE_RECEIVED':
           return { ...state, employee: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;