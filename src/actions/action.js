import axios from "axios";
import {
  fetchJobs,
  loadMoreJobs,
  fetchJobsError,
  loadMoreJobsError,
  fetchJobsLoading,
  loadMoreJobsLoading,
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
      // load next 9 jobs
      console.log("offset", offset);
      const resp = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 9,
          offset: offset,
        }
      );
      const data = resp.data.jdList;
      dispatch(loadMoreJobs(data));
    } catch (error) {
      console.log(error);
      dispatch(loadMoreJobsError(error.message));
    }
  };
};
