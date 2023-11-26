import UseAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ContestCategory from "./ContestCategory";
const AllContest = () => {
  const axiosPublic = UseAxiosPublic();
  const [tabIndex, setTabIndex] = useState(0);

  const { data: contest = [] } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contests`);
      return res.data;
    },
  });

  const businessContest = contest.filter(
    (item) => item.type === "businessContest"
  );
  const medicalContest = contest.filter(
    (item) => item.type === "medicalContest"
  );
  const articleWriting = contest.filter(
    (item) => item.type === "articleWriting"
  );
  const gamingContest = contest.filter((item) => item.type === "gamingContest");

  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className='text-center mb-4'>
          <Tab>Business Contest</Tab>
          <Tab>Medical Contest</Tab>
          <Tab>Article Writing</Tab>
          <Tab>Gaming Contest</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessContest.map((data) => (
              <ContestCategory key={data._id} data={data}></ContestCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {medicalContest.map((data) => (
              <ContestCategory key={data._id} data={data}></ContestCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articleWriting.map((data) => (
              <ContestCategory key={data._id} data={data}></ContestCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamingContest.map((data) => (
              <ContestCategory key={data._id} data={data}></ContestCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllContest;
