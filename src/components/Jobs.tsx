import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface JobProps {
  title: string;
  jobId: string;
  datePosted: string;
  salary: string;
  description: string[];
  image: string;
}

const jobList: JobProps[] = [
  {
    title: "Technical Lead IT Architect x 2",
    jobId: "1",
    salary: "$180 - $200 per hour (inc super)",
    datePosted: "25 Jun 2025",
    description: [
      "12 + 12 month contract - NV1 clearance required",
      "Flexible work arrangement",
      "Flexible pay",
    ],
    image: image4,
  },
  {
    title: "Salesforce Developer x 3",
    jobId: "2",
    salary: "$150 - $180 per hour (inc super)",
    datePosted: "10 Apr 2025",
    description: [
      "12 + 12 month contract - NV1 clearance required",
      "Flexible work arrangement",
      "Flexible pay",
    ],
    image: image3,
  },
  {
    title: "Senior Devops Engineer x 1",
    jobId: "3",
    salary: "$160 - $180 per hour (inc super)",
    datePosted: "15 Jun 2025",
    description: [
      "12 + 12 month contract - NV1 clearance required",
      "Flexible work arrangement",
      "Flexible pay",
    ],
    image: image,
  },
];

export const Jobs = () => {
  if (jobList.length >= 1) {
    return (
      <section id="jobs" className="container py-24 sm:py-32 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Job Openings
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobList.map(
            ({ title, jobId, salary, description, datePosted }: JobProps) => (
              <Card key={jobId}>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <b>Salary:&nbsp; </b>
                  {salary}
                </CardContent>
                <CardContent>
                  <ul></ul>
                  {description.map((item) => {
                    return <li>{item}</li>;
                  })}
                </CardContent>
                <CardFooter>
                  <b>Date posted: </b>&nbsp;
                  {datePosted}
                </CardFooter>
              </Card>
            )
          )}
        </div>
        <div className="text-xl lg:text-xl font-bold md:text-center">
          <span>
            <a
              href="#footer"
              className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
            >
              Contact us
            </a>{" "}
            to register your interest for future openings.
          </span>
        </div>
      </section>
    );
  } else {
    return (
      <section id="jobs" className="container py-24 sm:py-32 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Job Openings
          </span>
        </h2>
        <div className="text-xl lg:text-xl font-bold md:text-center">
          <span>
            There are currently no job openings.{" "}
            <a
              href="#footer"
              className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
            >
              Contact us
            </a>{" "}
            to register your interest for future openings.
          </span>
        </div>
      </section>
    );
  }
};
