import {
  FETCH_JOBS,
  LOAD_MORE_JOBS,
  FETCH_JOBS_ERROR,
  LOAD_MORE_JOBS_ERROR,
  FETCH_JOBS_LOADING,
  LOAD_MORE_JOBS_LOADING,
  SET_EXPERIENCE,
  SET_LOCATION,
  SET_ROLE,
  SET_SALARY,
  SET_COMPANY,
  SET_NO_OF_EMPLOYEES,
} from "../actions/actionTypes";
const initialState = {
  jobs: [],
  loading: false,
  error: null,
  selectedExperience: null,
  selectedLocation: null,
  selectedRole: null,
  selectedSalary: null,
  selectedCompany: "",
  selectedNoOfEmployees: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_LOADING:
    case LOAD_MORE_JOBS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case LOAD_MORE_JOBS:
      console.log("load more reducer", action.payload);
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
      };
    case FETCH_JOBS_ERROR:
    case LOAD_MORE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_EXPERIENCE:
      return {
        ...state,
        selectedExperience: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    case SET_ROLE:
      return {
        ...state,
        selectedRole: action.payload,
      };
    case SET_SALARY:
      return {
        ...state,
        selectedSalary: action.payload,
      };
    case SET_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload,
      };
    case SET_NO_OF_EMPLOYEES:
      return {
        ...state,
        selectedNoOfEmployees: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
