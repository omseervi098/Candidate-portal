// actions.js
import axios from "axios";
import {
  fetchJobs,
  loadMoreJobs,
  fetchJobsError,
  loadMoreJobsError,
  fetchJobsLoading,
  loadMoreJobsLoading,
  setExperience,
  setRole,
  setLocation,
  setSalary,
  setCompany,
  setNoOfEmployees,
} from "./actionTypes";
export const fetchJobsAPI = () => {
  return async (dispatch) => {
    dispatch(fetchJobsLoading());
    try {
      //Fetch 9 jobs
      const resp = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 9,
          offset: 0,
        }
      );
      console.log("Initial Fetch", resp.data.jdList);
      dispatch(fetchJobs(resp.data.jdList));
    } catch (error) {
      console.log(error);
      dispatch(fetchJobsError(error.message));
    }
  };
};
export const loadMoreJobsAPI = (offset) => {
  return async (dispatch) => {
    dispatch(loadMoreJobsLoading());
    try {
      console.log("offset", offset);
      const resp = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 9,
          offset: offset,
        }
      );
      const data = resp.data.jdList;
      console.log("load more", data);
      dispatch(loadMoreJobs(data));
    } catch (error) {
      console.log(error);
      dispatch(loadMoreJobsError(error.message));
    }
  };
};
