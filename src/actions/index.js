export const getEmployee = () => ({
    type: 'GET_EMPLOYEE',
})

export const displayEmployee = (employee) => ({
    type: 'DISPLAY_EMPLOYEE',
    employee,
})

