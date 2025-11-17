import Card from "./components/card";

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    nameOfCompany: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    nameOfCompany: "Amazon",
    datePosted: "10 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 48,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    nameOfCompany: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    nameOfCompany: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    nameOfCompany: "Microsoft",
    datePosted: "4 weeks ago",
    post: "AI Research Assistant",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    nameOfCompany: "Tesla",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    nameOfCompany: "NVIDIA",
    datePosted: "9 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    nameOfCompany: "Uber",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Muscat, Oman",
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    nameOfCompany: "Airbnb",
    datePosted: "7 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 47,
    location: "Muscat, Oman",
  },
];

function App() {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            (
            <Card
              company={elem.nameOfCompany}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
            />
            );
          </div>
        );
      })}
    </div>
  );
}

export default App;
