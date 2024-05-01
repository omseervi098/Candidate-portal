export const FETCH_JOBS = "FETCH_JOBS";
export const LOAD_MORE_JOBS = "LOAD_MORE_JOBS";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";
export const LOAD_MORE_JOBS_ERROR = "LOAD_MORE_JOBS_ERROR";
export const FETCH_JOBS_LOADING = "FETCH_JOBS_LOADING";
export const LOAD_MORE_JOBS_LOADING = "LOAD_MORE_JOBS_LOADING";
export const SET_ROLE = "SET_ROLE";
export const SET_LOCATION = "SET_LOCATION";
export const SET_NO_OF_EMPLOYEES = "SET_NO_OF_EMPLOYEES";
export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const SET_SALARY = "SET_SALARY";
export const SET_COMPANY = "SET_COMPANY";
export const fetchJobs = (jobs) => ({
  type: FETCH_JOBS,
  payload: jobs,
});
export const loadMoreJobs = (jobs) => ({
  type: LOAD_MORE_JOBS,
  payload: jobs,
});

export const fetchJobsError = (error) => ({
  type: FETCH_JOBS_ERROR,
  payload: error,
});
export const loadMoreJobsError = (error) => ({
  type: LOAD_MORE_JOBS_ERROR,
  payload: error,
});
export const fetchJobsLoading = () => ({
  type: FETCH_JOBS_LOADING,
});
export const loadMoreJobsLoading = () => ({
  type: LOAD_MORE_JOBS_LOADING,
});
export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});
export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});
export const setNoOfEmployees = (noOfEmployees) => ({
  type: SET_NO_OF_EMPLOYEES,
  payload: noOfEmployees,
});
export const setExperience = (experience) => ({
  type: SET_EXPERIENCE,
  payload: experience,
});
export const setSalary = (salary) => ({
  type: SET_SALARY,
  payload: salary,
});
export const setCompany = (company) => ({
  type: SET_COMPANY,
  payload: company,
});
