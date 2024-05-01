import React from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import styles from "./jobCard.module.css";
export default function JobCard(props) {
  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.date}>⏳ Posted 10 days ago</div>
        <div className={styles.companycontanier}>
          <div className={styles.companylogo}>
            <img
              src="https://assets-global.website-files.com/63359abeb97bf0d5ca346052/633db75041f93472df563fe6_New%20Project-p-500.png"
              alt="Company Logo"
              style={{
                backgroundColor: "black",
                width: "50px",
                height: "50px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className={styles.companydetail}>
            <div className={styles.companyname}>
              {props.job.companyName ? props.job.companyName : "Weekday"}
            </div>
            <div className={styles.rolename}>{props.job.jobRole}</div>
            <div className={styles.location}>{props.job.location}</div>
          </div>
        </div>
        <div className={styles.salary}>
          Estimated Salary:
          <span>
            {props.job.minJdSalary !== null && props.job.maxJdSalary !== null
              ? `₹ ${props.job.minJdSalary} - ₹ ${props.job.maxJdSalary} LPA`
              : props.job.maxJdSalary !== null
              ? `₹ ${props.job.maxJdSalary} LPA`
              : props.job.minJdSalary !== null
              ? `₹ ${props.job.minJdSalary} LPA`
              : `Not Disclosed`}
          </span>
        </div>
        <div className={styles.about}>
          <p className={styles.aboutheading}>About Company</p>
          <div>
            <span className={styles.aboutsubhead}>About Us</span>
            <Typography className={styles.aboutcontent}>
              {props.job.jobDetailsFromCompany}
            </Typography>
            <div className={styles.viewjob}>
              <a href={props.job.jdLink} target="_blank" rel="noreferrer">
                View Job
              </a>
            </div>
          </div>
        </div>
        <div className={styles.experiencecontainer}>
          <div>Minimum Experience</div>
          <div className={styles.experience}>
            {props.job.minExp ? props.job.minExp : `2`} years
          </div>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <button className={styles.btn1}>⚡ Easy Apply</button>
      </CardActions>
    </Card>
  );
}
