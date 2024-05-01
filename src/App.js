import React, { useCallback, useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import JobCard from "./component/jobCard/jobCard";
import FilterBar from "./component/filterBar/filterBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobsAPI, loadMoreJobsAPI } from "./actions/action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function App() {
  const dispatch = useDispatch();
  const {
    jobs,
    loading,
    error,
    selectedExperience,
    selectedLocation,
    selectedRole,
    selectedSalary,
    selectedCompany,
  } = useSelector((state) => state);
  // Fetch initial jobs
  React.useEffect(() => {
    dispatch(fetchJobsAPI());
  }, [dispatch]);
  // Fetch more jobs on scroll
  const handleScroll = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
      document.documentElement.offsetHeight
    ) {
      dispatch(loadMoreJobsAPI(jobs.length));
    }
  }, [dispatch, jobs.length]);
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    if (selectedExperience && job.minExp <= selectedExperience) {
      return false;
    }
    if (
      (selectedLocation &&
        selectedLocation === "Remote" &&
        job.location !== "remote") ||
      (selectedLocation !== "Remote" && job.location == "remote")
    ) {
      return false;
    }
    if (
      selectedRole &&
      !job.jobRole.toLowerCase().includes(selectedRole.toLowerCase())
    ) {
      return false;
    }
    if (selectedCompany) {
      if (
        !job.companyName.toLowerCase().includes(selectedCompany.toLowerCase())
      ) {
        return false;
      }
    }
    if (selectedSalary) {
      const jobSalaryInLakhs = job.minJdSalary
        ? job.minJdSalary
        : job.maxJdSalary
        ? job.maxJdSalary
        : 0;
      const selectedSalaryInLakhs = parseInt(selectedSalary.split("L")[0]);
      if (jobSalaryInLakhs <= selectedSalaryInLakhs) {
        return false;
      } else {
        return true;
      }
    }

    return true;
  });
  return (
    <div className="" onScroll={handleScroll}>
      <div className="">
        <h1 style={{ fontSize: 12, padding: 20 }}>Search Jobs</h1>
      </div>
      <div style={{ margin: 10, padding: "0px 10px 20px 10px" }}>
        <FilterBar />
      </div>
      <Grid
        container
        spacing={4}
        style={{
          justifyContent: "center",
          margin: "0px auto",
        }}
        xs={12}
        lg={10}
      >
        {jobs &&
          filteredJobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard job={job} />
            </Grid>
          ))}

        {error && <h1>{error}</h1>}
      </Grid>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "0px" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
