import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";
import voypostLogoSrc from "@/assets/jobLogos/voypost-logo.jpeg";

export function VoypostJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Fullstack developer, Voypost, Remote"
        subtitle="September 2019 - June 2020"
        src={voypostLogoSrc}
        alt="voypost-logo"
      />
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Writing tests, and documentation for projects with legacy codebase (till 2017).</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Jest, Microservices, Azure Pipelines, MongoDB, Koa</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>
            Adding new features and redesigning a project helps managers measure the job satisfaction of their subordinates.
          </AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>React, Apollo Client, Microservices, RabitMQ, MariaDB, Express, Apollo Server, Sequelize.js</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>Building react native application for IoT project used BLE.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>RN, Redux, Redux-thunk, Reselect</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
