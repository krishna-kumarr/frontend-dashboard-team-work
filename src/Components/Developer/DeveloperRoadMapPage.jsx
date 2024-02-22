import React, { useEffect } from "react"
import "../Admin/Admin_css/AdminTimeline.css"
import "../../App.css"
import Aos from "aos";
import 'aos/dist/aos.css'; 

export const DeveloperRoadMapPage = () =>{
    useEffect(()=>{
        Aos.init()
    },[])
    const timeLineArray =[
                            {
                                title:'Frontend Roadmap - 2024',
                                TimeLineCharts:[
                                            {
                                                heading:"Html",
                                                image:"https://www.shutterstock.com/image-photo/html-inscription-against-laptop-code-260nw-1851522412.jpg",
                                                textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                                                status: 'not started',
                                                startTime:  '1-01-2024',
                                                endTime: '10-01-2024'
                                            },
                                            {
                                                heading:"Css",
                                                image:"https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
                                                textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                                                status:"not started",
                                                startTime:  '10-01-2024',
                                                endTime: '20-01-2024'
                                            },
                                            {
                                                heading:"Sass",
                                                image:"https://uploads.sitepoint.com/wp-content/uploads/2013/03/1501598563featured-getting-started-sass.jpg",
                                                textareaCnt:"Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects",
                                                status:"not started",
                                                startTime:  '20-01-2024',
                                                endTime: '30-01-2024'
                                            },
                                            {
                                                heading:"Bootstrap",
                                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsX5atOR9Defm5JgkzMGWMVw7DNrbFTMOsQ&usqp=CAU",
                                                textareaCnt:"Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project.",
                                                status:"not started",
                                                startTime:  '1-02-2024',
                                                endTime: '15-02-2024'
                                            },
                                            {
                                                heading:"Tailwind",
                                                image:"https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
                                                textareaCnt:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching",
                                                status:"not started",
                                                startTime:  '16-02-2024',
                                                endTime: '29-02-2024'
                                            },
                                            {
                                                heading:"Javascript",
                                                image:"https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1696168910152-Why%20JavaScript%20is%20Popular.jpg",
                                                textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                                                status:"not started",
                                                startTime:  '1-03-2024',
                                                endTime: '15-03-2024'
                                            },
                                            {
                                                heading:"TypeScript",
                                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHlajw0HzGzCzM_t6p6itMenwO2CzPZq9L4qshEmDYculDHiK6Z1x59mcpVUCgjusaqs&usqp=CAU",
                                                textareaCnt:"TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading.",
                                                status:"not started",
                                                startTime:  '16-03-2024',
                                                endTime: '31-03-2024'
                                            },
                                            {
                                                heading:"React js",
                                                image:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
                                                textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                                                status:"not started",
                                                startTime:  '1-04-2024',
                                                endTime: '20-04-2024'
                                            },
                                            {
                                                heading:"Angular js",
                                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DuYsoETlLOZqOpytRClmcHHDF7qnPZVDKdsgEnvLvtqyCiq4zcj1OPfYW-h6nQAymkw&usqp=CAU",
                                                textareaCnt:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
                                                status:"not started",
                                                startTime:  '21-04-2024',
                                                endTime: '10-05-2024'
                                            },
                                            {
                                                heading:"Vue js",
                                                image:"https://images.prismic.io/northcoders/NzIxNjIyM2ItNDY0NC00MWRhLWEzM2UtM2IyZThkM2JhMWNl_vuejs.jpeg?auto=compress%2Cformat&rect=0%2C0%2C1280%2C720&w=800&fit=max&q=60",
                                                textareaCnt:"Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
                                                status:"not started",
                                                startTime:  '11-05-2024',
                                                endTime: '25-05-2024'
                                            },
                                            {
                                                heading:"Redux",
                                                image:"https://redux.js.org/img/redux-logo-landscape.png",
                                                textareaCnt:"Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable, making it easier to understand the changes happening in your app. But all of these benefits come with a set of challenges",
                                                status:"not started",
                                                startTime:  '26-05-2024',
                                                endTime: '10-06-2024'
                                            },
                                            {
                                                heading:"Redux Toolkit",
                                                image:"https://www.freecodecamp.org/news/content/images/2023/03/Freecodecamp-Banner.png",
                                                textareaCnt:"Redux Toolkit is a set of tools you can use for state management in React in place of Redux. The Redux team created it. Redux Toolkit offers a standardized approach to building Redux code and comes with libraries and tools that make it simpler to create scalable, maintainable, and effective Redux code",
                                                status:"not started'",
                                                startTime:  '11-06-2024',
                                                endTime: '22-06-2024'
                                            },
                                            {
                                                heading:"Redux Thunk",
                                                image:"https://miro.medium.com/v2/resize:fit:1400/1*5FcvZufrMDzs1ef63NjhXw.jpeg",
                                                textareaCnt:"Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises",
                                                status:"not started",
                                                startTime:  '23-06-2024',
                                                endTime: '5-07-2024'
                                            },
                                            {
                                                heading:"Redux Saga",
                                                image:"https://miro.medium.com/v2/resize:fit:1000/1*naW_p6izSmOsAM_zdcqtRA.jpeg",
                                                textareaCnt:"Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations",
                                                status:"not started",
                                                startTime:  '6-07-2024',
                                                endTime: '20-07-2024'
                                            },
                                            {
                                                heading:"Graph QL",
                                                image:"https://graphql.org/img/og-image.png",
                                                textareaCnt:"GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API",
                                                status:"not started",
                                                startTime:  '21-07-2024',
                                                endTime: '1-08-2024'
                                            },
                                            {
                                                heading:"Git",
                                                image:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191948265/original/3dcb6660d0eab6eaba4db3a2963b337da9954cf3/help-you-with-git.png",
                                                textareaCnt:"Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.",
                                                status:"not started'",
                                                startTime:  '2-08-2024',
                                                endTime: '5-08-2024'
                                            },
                                            {
                                                heading:"Github",
                                                image:"https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
                                                textareaCnt:"GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see",
                                                status:"not started",
                                                startTime:  '6-08-2024',
                                                endTime: '10-08-2024'
                                            },
                                            {
                                                heading:"Next js",
                                                image:"https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
                                                textareaCnt:"Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
                                                status:"not started'",
                                                startTime:  '11-08-2024',
                                                endTime: '25-08-2024'
                                            },
                                            {
                                                heading:"Node js",
                                                image:"https://blog.cdn.cmarix.com/blog/wp-content/uploads/2023/05/ultimate-guide-to-node-js-streams.webp",
                                                textareaCnt:"It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.",
                                                status:"not started",
                                                startTime:  '26-08-2024',
                                                endTime: '15-09-2024'
                                            },
                                            {
                                                heading:"Express js",
                                                image:"https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png",
                                                textareaCnt:"Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.",
                                                status:"not started",
                                                startTime:  '15-09-2024',
                                                endTime: '25-09-2024'
                                            },
                                            {
                                                heading:"Mongo DB",
                                                image:"https://www.gartner.com/pi/vendorimages/mongodb_cloud-database-management-systems_1697586469294.png",
                                                textareaCnt:"MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.",
                                                status:"not started",
                                                startTime:  '26-09-2024',
                                                endTime: '1-10-2024'
                                            },
                                            {
                                                heading:"Mongo DB Atlas",
                                                image:"https://techcrunch.com/wp-content/uploads/2016/06/2016-06-27_1940.png",
                                                textareaCnt:"MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.",
                                                status:"not started",
                                                startTime:  '2-10-2024',
                                                endTime: '10-10-2024'
                                            },
                                            {
                                                heading:"Mongoose",
                                                image:"https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png",
                                                textareaCnt:"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
                                                status:"not started",
                                                startTime:  '11-10-2024',
                                                endTime: '25-10-2024'
                                            },
                                            {
                                                heading:"CORS policy errors",
                                                image:"https://i.ibb.co/Vv46CBc/ASP-NET-Cors-error-fix.png",
                                                textareaCnt:"CORS errors happen when a webpage makes a request to a different domain than the one that served the page, and the server responds with an HTTP error because the “Origin” header in the request is not allowed by the server's CORS configuration.",
                                                status:"not started'",
                                                startTime:  '25-10-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Package manager",
                                                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNrSGHtpML2l6ak9tMDNKCA_IsFd0toqXaNOVT-uoKYyxfSj88vjZAMZ3hIKwxAb3Ekk&usqp=CAU",
                                                textareaCnt:"A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"JEST Unit testing",
                                                image:"https://res.cloudinary.com/practicaldev/image/fetch/s--Ua0Y2P1K--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/q5mdszh763xifqm3bikn.png",
                                                textareaCnt:"Jest is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '15-11-2024'
                                            },
                                            {
                                                heading:"Cypress End testing",
                                                image:"https://www.cypress.io/cypress_logo_social.png",
                                                textareaCnt:"Cypress is an automation web testing tool that's fast, easy, and reliable for testing the things (web components) that run in a browser. It's an open-source test automation framework for testing JavaScript web and enables you to perform unit, integration, and end-to-end tests",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"RESTful API",
                                                image:"https://cdn.vockan.com/2022/wp-content/uploads/2023/03/02194049/restapi2-1.png",
                                                textareaCnt:"A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Astro",
                                                image:"https://miro.medium.com/v2/resize:fit:1400/1*hr9dl2_mgQBJpq7TX9e4jw.jpeg",
                                                textareaCnt:"Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Lodash",
                                                image:"https://miro.medium.com/v2/resize:fit:800/1*3NrSA_osjPYn2rKVvjIGCw.png",
                                                textareaCnt:"Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"React Native",
                                                image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
                                                textareaCnt:"React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Flutter",
                                                image:"https://miro.medium.com/v2/resize:fit:1400/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
                                                textareaCnt:"Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Axios",
                                                image:"https://www.cybersecurity-strategy-masters.nyu.edu/wp-content/uploads/2019/06/axios-logo.jpg",
                                                textareaCnt:"Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"React Router DOM",
                                                image:"https://www.loginradius.com/blog/static/a53096b6796dd3d1e3f3df8bc77a6689/03979/index.png",
                                                textareaCnt:"React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            },
                                            {
                                                heading:"Web security (OWASP)",
                                                image:"https://www.secplicity.org/wp-content/uploads/2017/04/OWASP-Logo.png",
                                                textareaCnt:"The Open Web Application Security Project (OWASP) is an open community dedicated to enabling organizations to develop, purchase, and maintain applications and APIs that can be trusted.",
                                                status:"not started'",
                                                startTime:  '6-11-2024',
                                                endTime: '5-11-2024'
                                            }
                                        ],
                                    performance:0
                            }
                        ]

    return(              
        
        <div class="height-100 main-content py-2 header-default-background overflow-hidden">
            <div className="container">                         
                <div className="accordion d-flex flex-wrap" id="accordionExample">
                    {
                        timeLineArray.map((val,ind)=>{
                            return  <div className="accordion-item bg-transparent text-center col-12" key={ind}>
                                        <p className="accordion-header" id={"heading"+ind}>
                                            <button className="accordion-button bg-transparent fs-3" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+ind} aria-expanded={ind==0 ?"true" : "false"} aria-controls={"collapse"+ind}>
                                                {val.title}
                                            </button>
                                        </p>
                                        <div id={"collapse"+ind} className={ind===0 ?"accordion-collapse collapse show":"accordion-collapse collapse"} aria-labelledby={"heading"+ind} data-bs-parent="#accordionExample">
                                            <div class="accordion-body d-flex flex-wrap mt-5"> 
                                                <div className="col-11 roadmap-box">
                                                    {
                                                        val.TimeLineCharts.map((value,index)=>{
                                                            return   <div className="roadmap-content shadow text-start mb-3 ms-5 timeline-content d-flex flex-wrap align-items-center" key={index} data-aos="fade-up-left" data-aos-duration="2000">
                                                                        {
                                                                            value.image===undefined ?  
                                                                                    null
                                                                            :
                                                                                <div className="col-12 col-lg-4">
                                                                                    <img src={value.image} alt="timeline-image" className="overflow-hidden timeeline-card-image"/>
                                                                                </div>
                                                                        }
                                                                        
                                                                        <div className={value.image===undefined ? "col-12 text-color" : "col-12 col-lg-8 px-3 text-color"}>
                                                                            <h4 className="important-heading mb-3 pt-3">{value.heading}</h4>
                                                                            <p className="theory-limit-setting">{value.textareaCnt}</p>
                                                                            <div className="col-12 d-flex flex-wrap mt-4">
                                                                                <p className="col-12 col-xl-6 textAreaContent-para">
                                                                                    <span className="fw-bold">Start time : </span>
                                                                                    <span className="important-heading fw-bold">{value.startTime}</span>
                                                                                </p>
                                                                                <p className="col-12 col-xl-6 textAreaContent-para">
                                                                                    <span className="fw-bold">End time : </span>
                                                                                    <span className="important-heading fw-bold">{value.endTime}</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div> 
)}