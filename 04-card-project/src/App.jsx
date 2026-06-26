// iss file mai humne sab se phle card banaya - card.jsx file mai .
// phir uski styling ki - index.css file mai .
// phir gpt se user ka code likha lo like : array of 10 objects of jobs openings.
// phir usko app.jsx file mai import kiya aur map function se card ko render kar diya. or card.jsx file mai props ke through data pass kiya.
// har element ko react uniquely identify kar paye eslia hum ek key pass krte hai

import React from 'react'
import Card from './component/Card';

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    logo: "https://imgs.search.brave.com/OkEKmNpOGwqjMqucY74nAB_p3y2B-LTUnA6ABNTEzVw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/bG9nby1zbWlsZS1p/Y29uLXZlY3Rvci0z/NDI0Mzk4Ny5qcGc",
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    logo: "https://imgs.search.brave.com/17zRUpxGIfv51vP4KzWshb_aKfmqwcn_EuI-oR05-G0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MzAxLzkyMC9zbWFs/bC9nb29nbGUtbG9n/by1vbi1idXR0b24t/ZnJlZS1wbmcucG5n",
    company: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Bengaluru, India",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    company: "Meta",
    posted: "1 week ago",
    position: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "3 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Noida, India",
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    posted: "6 days ago",
    position: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Bengaluru, India",
  },
  {
    id: 6,
    logo: "https://imgs.search.brave.com/cuSlAR5WJOPiH4XZwL4Q3HzjTJhHXqDj7hHBHdk4TdE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ3YzdlYzc2/YjgyZmIyMWZjZTMu/cG5n",
    company: "Netflix",
    posted: "2 weeks ago",
    position: "Backend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$145/hr",
    location: "Remote",
  },
  {
    id: 7,
    logo: "https://imgs.search.brave.com/8T-__DAGXwJ5A6qEKIIbBOW4k_PtpTuX69VjwAVCLcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9icmFu/ZC9leHBlcmllbmNl/LWd1aWRlcy9kZXZl/bG9wZXIvOGY0ZTNj/YzJiNWQ1MjM1NGE2/ZDQzYzhlZGJhMWUz/YzkvMDJfOC1iYXIt/cmV2ZXJzZS5zdmc",
    company: "IBM",
    posted: "4 days ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Pune, India",
  },
  {
    id: 8,
    logo: "https://imgs.search.brave.com/KIf_E8vlvO-OR8Py_-ggSP2U9n3g0J-IapYFAOgtgBQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlyc3Rwb3N0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wOS91YmVy/LW5ldy1sb2dvLmpw/Zz9pbT1GaXRBbmRG/aWxsPSg1OTYsMzM2/KQ",
    company: "Uber",
    posted: "1 day ago",
    position: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Hyderabad, India",
  },
  {
    id: 9,
    logo: "https://imgs.search.brave.com/QVgvvifTiqr9qIUDXrk_f3pyGENax36j0i7adlN6hcI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk0L0xvZ29fb3Jh/Y2xlLmpwZz9fPTIw/MTMxMTI1MjAxODIy",
    company: "Oracle",
    posted: "5 days ago",
    position: "Java Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Mumbai, India",
  },
  {
    id: 10,
    logo: "https://imgs.search.brave.com/w5AmJubuVl-DEmuBjukinj3u_TZS6wbl-Ri_Jub1tdg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAy/L0ludGVsLUxvZ28t/MjAwNS02MDZ4NDAw/LnBuZw",
    company: "Intel",
    posted: "3 weeks ago",
    position: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Bengaluru, India",
  },
];
  //  console.log(jobOpenings);

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem, idx){
         return <div key={idx}>
         <Card 
         company={elem.company} 
         logo={elem.logo} 
         posted={elem.posted} 
         position={elem.position} 
         tag1={elem.tag1} 
         tag2={elem.tag2} 
         pay={elem.pay} 
         location={elem.location} />
          </div>
     })}
    
    </div>
  )
}

export default App

