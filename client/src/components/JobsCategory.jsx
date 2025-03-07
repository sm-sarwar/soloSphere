import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const JobsCategory = () => {
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
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <JobCard></JobCard>
        </TabPanel>
        <TabPanel>
          <h2>Graphic design</h2>
        </TabPanel>
        <TabPanel>
          <h2>Digital Marketing</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobsCategory;
