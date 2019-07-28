const addTech = tech => ({
  type: 'tech/ADD_TECH',
  payload: { tech }
})

const getTechsSuccess = techs => ({
  type: 'tech/GET_TECHS_SUCCESS',
  payload: { techs }
})

const getTechsFailure = () => ({
  type: 'tech/GET_TECHS_FAILURE'
})

export { addTech, getTechsSuccess, getTechsFailure }
