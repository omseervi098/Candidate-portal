import * as React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

import styles from "./filterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setRole,
  setCompany,
  setExperience,
  setLocation,
  setNoOfEmployees,
  setSalary,
} from "../../actions/actionTypes";
const roleOptions = [
  "frontend",
  "backend",
  "fullstack",
  "ios",
  "android",
  "devops",
  "data analyst",
  "data scientist",
];
const experienceOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const locationOptions = ["Remote", "Onsite"];
const salaryOptions = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];
const noOfEmployeesOptions = [
  "1-10",
  "10-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];
export default function FilterBar() {
  const dispatch = useDispatch();
  const {
    selectedRole,
    selectedCompany,
    selectedExperience,
    selectedLocation,
    selectedNoOfEmployees,
    selectedSalary,
  } = useSelector((state) => state);
  const handleRoleChange = (event, value) => {
    dispatch(setRole(value));
  };
  const handleCompanyChange = (event, value) => {
    dispatch(setCompany(value));
  };
  const handleExperienceChange = (event, value) => {
    dispatch(setExperience(value));
  };
  const handleLocationChange = (event, value) => {
    dispatch(setLocation(value));
  };
  const handleNoOfEmployeesChange = (event, value) => {
    dispatch(setNoOfEmployees(value));
  };
  const handleSalaryChange = (event, value) => {
    dispatch(setSalary(value));
  };
  return (
    <div className={styles.filterbar}>
      <Autocomplete
        disablePortal
        id="role"
        onChange={handleRoleChange}
        options={roleOptions}
        value={selectedRole}
        sx={{ width: 250 }}
        className={styles.autocomplete}
        renderInput={(params) => <TextField {...params} label="Roles" />}
      />
      <Autocomplete
        disablePortal
        id="noofemp"
        onChange={handleNoOfEmployeesChange}
        value={selectedNoOfEmployees}
        options={noOfEmployeesOptions}
        sx={{ width: 200 }}
        className={styles.autocomplete}
        renderInput={(params) => (
          <TextField {...params} label="Number of Employees" />
        )}
      />
      <Autocomplete
        disablePortal
        id="exp"
        onChange={handleExperienceChange}
        value={selectedExperience}
        options={experienceOptions}
        className={styles.autocomplete}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
        disablePortal
        id="loc"
        onChange={handleLocationChange}
        value={selectedLocation}
        options={locationOptions}
        sx={{ width: 120 }}
        className={styles.autocomplete}
        renderInput={(params) => <TextField {...params} label="Remote" />}
      />
      <Autocomplete
        disablePortal
        id="minsal"
        onChange={handleSalaryChange}
        value={selectedSalary}
        options={salaryOptions}
        sx={{ width: 200 }}
        className={styles.autocomplete}
        renderInput={(params) => (
          <TextField {...params} label="Mimimum Base Pay Salary" />
        )}
      />
      <input
        className={styles.btn}
        type="text"
        value={selectedCompany}
        onChange={handleCompanyChange}
        placeholder="Search Company Name"
      />
    </div>
  );
}
