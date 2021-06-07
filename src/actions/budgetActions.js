export const FETCH_BUDGET_SUCCESS = 'FETCH_BUDGET_SUCCESS';
export const FETCH_BUDGET_FAILURE = 'FETCH_BUDGET_FAILURE';

export const UPDATE_ADS_BUDGET = 'UPDATE_ADS_BUDGET';

export const fetchBudgetSuccess = (budget) => ({
  type: FETCH_BUDGET_SUCCESS,
  payload: budget,
});

export const fetchBudgetFailure = (error) => ({
  type: FETCH_BUDGET_FAILURE,
  payload: error,
});

export function fetchBudget(){
    return async dispatch => {
        try {
            
        } catch (error) {
            
        }
    }
}
