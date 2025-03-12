import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";

const JobsCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_api_URL}/all-jobs`
    );
    console.log(data);
    setJobs(data);
  };
  return (
    <div className="mt-20 max-w-screen-xl mx-auto ">
      <h2 className="text-center font-bold text-3xl ">
        Browse Jobs By Categories
      </h2>
      <p className="text-center my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
        repudiandae, cupiditate quasi sunt dicta <br />
        commodi nemo quos rerum neque libero, dolore, molestiae aperiam officia.
        Beatae excepturi facere distinctio hic delectus!
      </p>

      <Tabs className={"mb-20 mt-10"}>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.filter((job)=> job.category === 'Web Development').map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.filter(job => job.category ==='Graphics Design').map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.filter(job => job.category === 'Digital Marketing').map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobsCategory;
