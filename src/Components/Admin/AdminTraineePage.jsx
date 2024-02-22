import React, { useEffect, useState } from "react";
import "../Admin/Admin_css/AdminSidebar.css"
import "../Admin/Admin_css/AdminTraineePage.css"
import { CiUser } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import ReactPaginate from "react-paginate";


export const AdminTraineePage = () =>{
    const traineeTasks=[
        {
            level:'fresher',
            task:[
                {
                    heading:"Html",
                    image:"https://www.shutterstock.com/image-photo/html-inscription-against-laptop-code-260nw-1851522412.jpg",
                    textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                    status: 'not started',
                    tutorialVideo:['https://youtu.be/kUMe1FH4CHE?si=YVBn24VTblMvNI5m','https://youtu.be/tfN9gPFmUfA?si=aWUp3717UnqGtySX','https://youtu.be/4VXLcPMtIeo?si=prC88aNbrSBTtV1F'],
                    learningWebsite:'https://www.w3schools.com/html/default.asp',
                    taskAssignedFor:[]
                },
                {
                    heading:"Css",
                    image:"https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
                    textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/OXGznpKZ_sA?si=YMTA4-C0Oq6AObTw','https://youtu.be/GlEY28YLffs?si=hh4GHWqp6VzsGPf-'],
                    learningWebsite:'https://www.w3schools.com/css/default.asp',
                    taskAssignedFor:[]
                },
                {
                    heading:"Sass",
                    image:"https://uploads.sitepoint.com/wp-content/uploads/2013/03/1501598563featured-getting-started-sass.jpg",
                    textareaCnt:"Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/jfMHA8SqUL4?si=5LTusq9ydXAX2Onq','https://youtube.com/playlist?list=PL73Obo20O_7hdxU99FNNE-rowIltEwsNe&si=F3aQzNwDgYG4HJdK'],
                    learningWebsite:'https://sass-lang.com/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Bootstrap",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsX5atOR9Defm5JgkzMGWMVw7DNrbFTMOsQ&usqp=CAU",
                    textareaCnt:"Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLp50dWW_m40WzAh2wY0a9iFYb0QlPzoxx&si=mXLO281yZIVL4CCq','https://youtube.com/playlist?list=PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ&si=axo1O1ulRAhpV9pP','https://youtu.be/AS5NRIo_Vyo?si=WItWuCUaN2k5GouU'],
                    learningWebsite:'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Tailwind",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
                    textareaCnt:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/lZp4salRFFc?si=MmeIIRtMghigAlmw','https://youtube.com/playlist?list=PLXCfOoPnFIbtcyk6OYaSlVKfSJ1A24Qhp&si=HiRxHnUy4GkqIIuQ','https://youtu.be/H8JJCZm9dzU?si=VvCk7i_ZcZ2ayNnx'],
                    learningWebsite:'https://tailwindcss.com/docs/installation',
                    taskAssignedFor:[]
                },
                {
                    heading:"Javascript",
                    image:"https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1696168910152-Why%20JavaScript%20is%20Popular.jpg",
                    textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&si=Fn5Px3tCg4a3PkX8','https://youtu.be/toymwoKBtbM?si=ANjaBsjBuTLhRBDf','https://youtu.be/5hwdCPRcSMk?si=Oycy4xy-S1v6tN6B'],
                    learningWebsite:'https://www.w3schools.com/js/default.asp',
                    taskAssignedFor:[]
                },
                {
                    heading:"TypeScript",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHlajw0HzGzCzM_t6p6itMenwO2CzPZq9L4qshEmDYculDHiK6Z1x59mcpVUCgjusaqs&usqp=CAU",
                    textareaCnt:"TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/d56mG7DezGs?si=-Atq0AnsfHGJtyzm','https://youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&si=Sr6k2agQGofWASfK','https://youtube.com/playlist?list=PLQeZxRj52I-EoyqWJjuw6Wm_g1x-RKW-e&si=d8c2tEA_R0CgIWdd'],
                    learningWebsite:'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/',
                    taskAssignedFor:[]
                },
                {
                    heading:"React js",
                    image:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
                    textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=IoyWlxnyAd7P_5eS','https://youtu.be/Uv7cKlZFXU8?si=5iV7uvkuIbGjquo9','https://youtu.be/2sVeyo2tYbE?si=dZD8V9ay8TRlCmKg'],
                    learningWebsite:'https://www.w3schools.com/REACT/DEFAULT.ASP',
                    taskAssignedFor:[]
                },
                {
                    heading:"Angular js",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DuYsoETlLOZqOpytRClmcHHDF7qnPZVDKdsgEnvLvtqyCiq4zcj1OPfYW-h6nQAymkw&usqp=CAU",
                    textareaCnt:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4cUxeGkcC9gsJS5QgFT2IvWIX78dV3_v&si=968J9RplBj-HcGe3','https://youtu.be/9b9pLgaSQuI?si=KtFWDjRtRtMV5zZV','https://youtu.be/9TuCkh-09vc?si=oUqd9v-xyKrtBvRI'],
                    learningWebsite:'https://www.w3schools.com/angular/default.asp',
                    taskAssignedFor:[]
                },
                {
                    heading:"Vue js",
                    image:"https://images.prismic.io/northcoders/NzIxNjIyM2ItNDY0NC00MWRhLWEzM2UtM2IyZThkM2JhMWNl_vuejs.jpeg?auto=compress%2Cformat&rect=0%2C0%2C1280%2C720&w=800&fit=max&q=60",
                    textareaCnt:"Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&si=mDQG9hEkwmyBD8pA','https://youtu.be/cIuzcr7MWSE?si=DWFVjMwpLhOsY18A'],
                    learningWebsite:'https://www.w3schools.com/vue/index.php',
                    taskAssignedFor:[]
                },
                {
                    heading:"Redux",
                    image:"https://www.pistalix.in/wp-content/uploads/2018/10/redux_centre.png",
                    textareaCnt:"Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable, making it easier to understand the changes happening in your app. But all of these benefits come with a set of challenges",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/9boMnm5X9ak?si=4Sr7acpfh3keO2xI','https://youtu.be/NqzdVN2tyvQ?si=L81bns0Rf5is5IEy','https://youtu.be/XUSGOAZh7rg?si=ix_J0k7K-dYOsM1J','https://youtu.be/mz6J9yyqjxs?si=xoEfR26gzyxz_H7H'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Redux Toolkit",
                    image:"https://www.freecodecamp.org/news/content/images/2023/03/Freecodecamp-Banner.png",
                    textareaCnt:"Redux Toolkit is a set of tools you can use for state management in React in place of Redux. The Redux team created it. Redux Toolkit offers a standardized approach to building Redux code and comes with libraries and tools that make it simpler to create scalable, maintainable, and effective Redux code",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/A_vRvDAZuOo?si=BUZvnU-s7lJCDe3t','https://youtu.be/pX0SBJF01EU?si=6Ph6o-pi7hBjJzsm','https://youtu.be/YybdD3Q4BL0?si=8SSfAr_eOblodwle'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Redux Thunk",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*5FcvZufrMDzs1ef63NjhXw.jpeg",
                    textareaCnt:"Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/JDZRfLGNWdc?si=Qohz56XWW_1qkZmu','https://youtu.be/8dBbwNKYJyU?si=PoPbKd2imEX8hOkw'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Redux Saga",
                    image:"https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png",
                    textareaCnt:"Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/GtPDoEHhuOE?si=_pYIwPRXh6aIhlcT','https://youtu.be/ftXQGvQG97o?si=9-dy4q_ssVDJqT6Q','https://youtu.be/9BYTwJ1rf_8?si=fCvVhJ891SD4aYQy'],
                    learningWebsite:'https://redux-saga.js.org/docs/introduction/BeginnerTutorial/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Graph QL",
                    image:"https://graphql.org/img/og-image.png",
                    textareaCnt:"GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&si=tfyrHkw4xl4UF3Iy','https://youtu.be/yqWzCV0kU_c?si=CJOEr5cm1XUFEKi5','https://youtu.be/GB58uNY3iHU?si=DBnGsYefxFX848pu'],
                    learningWebsite:'https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Git",
                    image:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191948265/original/3dcb6660d0eab6eaba4db3a2963b337da9954cf3/help-you-with-git.png",
                    textareaCnt:"Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.",
                    status:"not started'",
                    tutorialVideo:['https://www.youtube.com/live/akD-DpolilE?si=CF7d2I7l7CWHw05O','https://youtu.be/vwj89i2FmG0?si=YG4zNYA9Q_SA1ZP8','https://youtu.be/HnuZ04XYfjs?si=7pN_kZgjDoky4OyT','https://youtu.be/436xDqkfU-s?si=rV8Jf4BAHwawXfBM'],
                    learningWebsite:'https://www.w3schools.com/git/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Github",
                    image:"https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
                    textareaCnt:"GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/apGV9Kg7ics?si=rD34SVGY0wWfCYc9','https://youtu.be/WzO6VynQ7UM?si=60pYvWkt6xolUPd0'],
                    learningWebsite:'https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github',
                    taskAssignedFor:[]
                },
                {
                    heading:"Next js",
                    image:"https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
                    textareaCnt:"Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/9P8mASSREYM?si=dFtnOAwx1x8UC5Nz','https://youtu.be/iNSf_7RyaXw?si=6K9LngeV3CEs4s9T'],
                    learningWebsite:'https://nextjs.org/learn-pages-router/basics/create-nextjs-app',
                    taskAssignedFor:[]
                },
                {
                    heading:"Node js",
                    image:"https://blog.cdn.cmarix.com/blog/wp-content/uploads/2023/05/ultimate-guide-to-node-js-streams.webp",
                    textareaCnt:"It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/f2EqECiTBL8?si=2oww_f6onTVwh4h4','https://youtu.be/7hTtRfoAcLk?si=uIclc-hazVl9_1K6','https://youtu.be/SdyzXQoQO18?si=nHWt4uCHsBU2QiCF'],
                    learningWebsite:'https://www.w3schools.com/nodejs/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Express js",
                    image:"https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png",
                    textareaCnt:"Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/nH9E25nkk3I?si=uabU9dpCyb4hCKBt','https://youtu.be/bo3fi5se1OM?si=-zOrNeIQ7wzCeGZK','https://youtu.be/KUoBYPMbaps?si=1gWaYPYUTCnqUveU'],
                    learningWebsite:'https://www.tutorialspoint.com/expressjs/index.htm',
                    taskAssignedFor:[]
                },
                {
                    heading:"Mongo DB",
                    image:"https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
                    textareaCnt:"MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/8eJJe4Slnik?si=p79Z4_CjNoYJht_k','https://youtu.be/CKaywM2qXpo?si=Pn2vxgsPCE-4aupq',"https://youtu.be/Otdxk0Mmdmo?si=SmIBHc6rVx2oU6Rz"],
                    learningWebsite:'https://www.tutorialspoint.com/mongodb/index.htm',
                    taskAssignedFor:[]
                },
                {
                    heading:"Mongo DB Atlas",
                    image:"https://techcrunch.com/wp-content/uploads/2016/06/2016-06-27_1940.png",
                    textareaCnt:"MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf&si=uEZDKyko82m18SqO','https://youtu.be/Svo-tPQ4GGU?si=xzQee_F8BKC-Q-Cc'],
                    learningWebsite:'https://www.mongodb.com/docs/atlas/getting-started/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Mongoose",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png",
                    textareaCnt:"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/DZBGEVgL2eE?si=8dYRlOejVJx1s28H','https://youtu.be/HgePOoxoNZU?si=UATxs242JrLUxTKV','https://youtu.be/CgpxM31UBec?si=3rbhjSQ2Z7SoA1-f'],
                    learningWebsite:'https://www.geeksforgeeks.org/mongoose-tutorial/',
                    taskAssignedFor:[]
                },

                {
                    heading:"CORS policy errors",
                    image:"https://i.ibb.co/Vv46CBc/ASP-NET-Cors-error-fix.png",
                    textareaCnt:"CORS errors happen when a webpage makes a request to a different domain than the one that served the page, and the server responds with an HTTP error because the “Origin” header in the request is not allowed by the server's CORS configuration.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:'',
                    taskAssignedFor:[]
                },
                {
                    heading:"Package manager",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNrSGHtpML2l6ak9tMDNKCA_IsFd0toqXaNOVT-uoKYyxfSj88vjZAMZ3hIKwxAb3Ekk&usqp=CAU",
                    textareaCnt:"A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:'',
                    taskAssignedFor:[]
                },

                {
                    heading:"JEST Unit testing",
                    image:"https://miro.medium.com/v2/resize:fit:300/1*veOyRtKTPeoqC_VlWNUc5Q.png",
                    textareaCnt:"Jest is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/IPiUDhwnZxA?si=WqqaWA7YsLFfDWpa','https://youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&si=rzyxFp0iMIzPc0WU'],
                    learningWebsite:'https://www.lambdatest.com/learning-hub/unit-testing-with-jest',
                    taskAssignedFor:[]
                },
                {
                    heading:"Cypress End testing",
                    image:"https://www.cypress.io/cypress_logo_social.png",
                    textareaCnt:"Cypress is an automation web testing tool that's fast, easy, and reliable for testing the things (web components) that run in a browser. It's an open-source test automation framework for testing JavaScript web and enables you to perform unit, integration, and end-to-end tests",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLpmrn9zBXhkiu9XRplvq3ir9G2j0-O_pc&si=8rRfSBkUZvuTmq5v'],
                    learningWebsite:'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test',
                    taskAssignedFor:[]
                },
                {
                    heading:"RESTful API",
                    image:"https://cdn.vockan.com/2022/wp-content/uploads/2023/03/02194049/restapi2-1.png",
                    textareaCnt:"A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLTCrU9sGybupzS5-3iYTsYUI1emBDKdHu&si=mLBnB4xwSvcfjjMY','https://youtu.be/Io4bjADJ2rs?si=FGGOwlAX92qXLv1N'],
                    learningWebsite:'https://www.geeksforgeeks.org/rest-api-introduction/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Astro",
                    image:"https://astro.build/assets/press/astro-logo-dark.svg",
                    textareaCnt:"Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/e-hTm5VmofI?si=z34AOc-ko3upaJCl'],
                    learningWebsite:'https://bejamas.io/blog/practical-guide-to-astro-js-framework/',
                    taskAssignedFor:[]
                },
                {
                    heading:"Lodash",
                    image:"https://miro.medium.com/v2/resize:fit:800/1*3NrSA_osjPYn2rKVvjIGCw.png",
                    textareaCnt:"Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript.",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLTgRMOcmRb3OL-PKT5FvIBdXVazTNTl-_&si=OVZypdcW3xrDHSoc'],
                    learningWebsite:'https://www.tutorialspoint.com/lodash/index.htm',
                    taskAssignedFor:[]
                },
                {
                    heading:"React Native",
                    image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
                    textareaCnt:"React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&si=iqI7Fe_0M4wXYpXB','https://youtu.be/UVZ5LGhiBkY?si=r8DCp5z8FTqFMSOd'],
                    learningWebsite:'https://www.tutorialspoint.com/react_native/index.htm',
                    taskAssignedFor:[]
                },
                {
                    heading:"Flutter",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
                    textareaCnt:"Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/IfUjHNODRoM?si=22JQPRmMAjPhcqh4','https://youtube.com/playlist?list=PLvggmUWAbezlotfOFfdZ4mOgK4QyMqLEv&si=YAW1vgsUyXniUBm9'],
                    learningWebsite:'https://www.tutorialspoint.com/flutter/index.htm',
                    taskAssignedFor:[]
                },
                {
                    heading:"Axios",
                    image:"https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png",
                    textareaCnt:"Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLnHJACx3NwAdSOK3BoQ7wjCDT1Iw7hs_u&si=2T43HMDNV8w4FRC4','https://youtu.be/O7DBVCiqrzU?si=WatUYYL-E25aO7Co'],
                    learningWebsite:'https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/',
                    taskAssignedFor:[]
                },
                {
                    heading:"React Router DOM",
                    image:"https://www.codesmith.io/hs-fs/hubfs/Blog%20Images/Blog%20Photos/react-router-logo.png?width=600&name=react-router-logo.png",
                    textareaCnt:"React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/nDGA3km5He4?si=-qs0n3OlTxowvgzV','https://youtube.com/playlist?list=PLQeZxRj52I-ExG_DbqG-MuOfFT442i08A&si=ElCzsl1j9jA16Qme'],
                    learningWebsite:'https://www.sitepoint.com/react-router-complete-guide/',
                    taskAssignedFor:[]
                }
                ,
                {
                    heading:"Web security (OWASP)",
                    image:"https://www.secplicity.org/wp-content/uploads/2017/04/OWASP-Logo.png",
                    textareaCnt:"The Open Web Application Security Project (OWASP) is an open community dedicated to enabling organizations to develop, purchase, and maintain applications and APIs that can be trusted.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:'',
                    taskAssignedFor:[]
                }
            ],
        },
        {
            level:'beginner',
            task:[
                {
                    heading:"Html",
                    image:"https://www.shutterstock.com/image-photo/html-inscription-against-laptop-code-260nw-1851522412.jpg",
                    textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                    status: 'not started',
                    tutorialVideo:['https://youtu.be/kUMe1FH4CHE?si=YVBn24VTblMvNI5m','https://youtu.be/tfN9gPFmUfA?si=aWUp3717UnqGtySX','https://youtu.be/4VXLcPMtIeo?si=prC88aNbrSBTtV1F'],
                    learningWebsite:'https://www.w3schools.com/html/default.asp'
                },
                {
                    heading:"Css",
                    image:"https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
                    textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/OXGznpKZ_sA?si=YMTA4-C0Oq6AObTw','https://youtu.be/GlEY28YLffs?si=hh4GHWqp6VzsGPf-'],
                    learningWebsite:'https://www.w3schools.com/css/default.asp'
                },
                {
                    heading:"Sass",
                    image:"https://uploads.sitepoint.com/wp-content/uploads/2013/03/1501598563featured-getting-started-sass.jpg",
                    textareaCnt:"Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/jfMHA8SqUL4?si=5LTusq9ydXAX2Onq','https://youtube.com/playlist?list=PL73Obo20O_7hdxU99FNNE-rowIltEwsNe&si=F3aQzNwDgYG4HJdK'],
                    learningWebsite:'https://sass-lang.com/'
                },
                {
                    heading:"Bootstrap",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsX5atOR9Defm5JgkzMGWMVw7DNrbFTMOsQ&usqp=CAU",
                    textareaCnt:"Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLp50dWW_m40WzAh2wY0a9iFYb0QlPzoxx&si=mXLO281yZIVL4CCq','https://youtube.com/playlist?list=PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ&si=axo1O1ulRAhpV9pP','https://youtu.be/AS5NRIo_Vyo?si=WItWuCUaN2k5GouU'],
                    learningWebsite:'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                },
                {
                    heading:"Tailwind",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
                    textareaCnt:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/lZp4salRFFc?si=MmeIIRtMghigAlmw','https://youtube.com/playlist?list=PLXCfOoPnFIbtcyk6OYaSlVKfSJ1A24Qhp&si=HiRxHnUy4GkqIIuQ','https://youtu.be/H8JJCZm9dzU?si=VvCk7i_ZcZ2ayNnx'],
                    learningWebsite:'https://tailwindcss.com/docs/installation'
                },
                {
                    heading:"Javascript",
                    image:"https://dev-updates-uploads.s3.ap-south-1.amazonaws.com/1696168910152-Why%20JavaScript%20is%20Popular.jpg",
                    textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV&si=Fn5Px3tCg4a3PkX8','https://youtu.be/toymwoKBtbM?si=ANjaBsjBuTLhRBDf','https://youtu.be/5hwdCPRcSMk?si=Oycy4xy-S1v6tN6B'],
                    learningWebsite:'https://www.w3schools.com/js/default.asp'
                },
                {
                    heading:"TypeScript",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHlajw0HzGzCzM_t6p6itMenwO2CzPZq9L4qshEmDYculDHiK6Z1x59mcpVUCgjusaqs&usqp=CAU",
                    textareaCnt:"TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/d56mG7DezGs?si=-Atq0AnsfHGJtyzm','https://youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&si=Sr6k2agQGofWASfK','https://youtube.com/playlist?list=PLQeZxRj52I-EoyqWJjuw6Wm_g1x-RKW-e&si=d8c2tEA_R0CgIWdd'],
                    learningWebsite:'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/'
                },
                {
                    heading:"React js",
                    image:"https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
                    textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=IoyWlxnyAd7P_5eS','https://youtu.be/Uv7cKlZFXU8?si=5iV7uvkuIbGjquo9','https://youtu.be/2sVeyo2tYbE?si=dZD8V9ay8TRlCmKg'],
                    learningWebsite:'https://www.w3schools.com/REACT/DEFAULT.ASP'
                },
                {
                    heading:"Angular js",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DuYsoETlLOZqOpytRClmcHHDF7qnPZVDKdsgEnvLvtqyCiq4zcj1OPfYW-h6nQAymkw&usqp=CAU",
                    textareaCnt:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4cUxeGkcC9gsJS5QgFT2IvWIX78dV3_v&si=968J9RplBj-HcGe3','https://youtu.be/9b9pLgaSQuI?si=KtFWDjRtRtMV5zZV','https://youtu.be/9TuCkh-09vc?si=oUqd9v-xyKrtBvRI'],
                    learningWebsite:'https://www.w3schools.com/angular/default.asp'
                },
                {
                    heading:"Vue js",
                    image:"https://images.prismic.io/northcoders/NzIxNjIyM2ItNDY0NC00MWRhLWEzM2UtM2IyZThkM2JhMWNl_vuejs.jpeg?auto=compress%2Cformat&rect=0%2C0%2C1280%2C720&w=800&fit=max&q=60",
                    textareaCnt:"Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&si=mDQG9hEkwmyBD8pA','https://youtu.be/cIuzcr7MWSE?si=DWFVjMwpLhOsY18A'],
                    learningWebsite:'https://www.w3schools.com/vue/index.php'
                },
                {
                    heading:"Redux",
                    image:"https://www.pistalix.in/wp-content/uploads/2018/10/redux_centre.png",
                    textareaCnt:"Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable, making it easier to understand the changes happening in your app. But all of these benefits come with a set of challenges",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/9boMnm5X9ak?si=4Sr7acpfh3keO2xI','https://youtu.be/NqzdVN2tyvQ?si=L81bns0Rf5is5IEy','https://youtu.be/XUSGOAZh7rg?si=ix_J0k7K-dYOsM1J','https://youtu.be/mz6J9yyqjxs?si=xoEfR26gzyxz_H7H'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/'
                },
                {
                    heading:"Redux Toolkit",
                    image:"https://www.freecodecamp.org/news/content/images/2023/03/Freecodecamp-Banner.png",
                    textareaCnt:"Redux Toolkit is a set of tools you can use for state management in React in place of Redux. The Redux team created it. Redux Toolkit offers a standardized approach to building Redux code and comes with libraries and tools that make it simpler to create scalable, maintainable, and effective Redux code",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/A_vRvDAZuOo?si=BUZvnU-s7lJCDe3t','https://youtu.be/pX0SBJF01EU?si=6Ph6o-pi7hBjJzsm','https://youtu.be/YybdD3Q4BL0?si=8SSfAr_eOblodwle'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/'
                },
                {
                    heading:"Redux Thunk",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*5FcvZufrMDzs1ef63NjhXw.jpeg",
                    textareaCnt:"Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/JDZRfLGNWdc?si=Qohz56XWW_1qkZmu','https://youtu.be/8dBbwNKYJyU?si=PoPbKd2imEX8hOkw'],
                    learningWebsite:'https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/'
                },
                {
                    heading:"Redux Saga",
                    image:"https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png",
                    textareaCnt:"Redux Saga is a middleware library used to allow a Redux store to interact with resources outside of itself asynchronously. This includes making HTTP requests to external services, accessing browser storage, and executing I/O operations",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/GtPDoEHhuOE?si=_pYIwPRXh6aIhlcT','https://youtu.be/ftXQGvQG97o?si=9-dy4q_ssVDJqT6Q','https://youtu.be/9BYTwJ1rf_8?si=fCvVhJ891SD4aYQy'],
                    learningWebsite:'https://redux-saga.js.org/docs/introduction/BeginnerTutorial/'
                },
                {
                    heading:"Graph QL",
                    image:"https://graphql.org/img/og-image.png",
                    textareaCnt:"GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&si=tfyrHkw4xl4UF3Iy','https://youtu.be/yqWzCV0kU_c?si=CJOEr5cm1XUFEKi5','https://youtu.be/GB58uNY3iHU?si=DBnGsYefxFX848pu'],
                    learningWebsite:'https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/'
                },
                {
                    heading:"Git",
                    image:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/191948265/original/3dcb6660d0eab6eaba4db3a2963b337da9954cf3/help-you-with-git.png",
                    textareaCnt:"Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.",
                    status:"not started'",
                    tutorialVideo:['https://www.youtube.com/live/akD-DpolilE?si=CF7d2I7l7CWHw05O','https://youtu.be/vwj89i2FmG0?si=YG4zNYA9Q_SA1ZP8','https://youtu.be/HnuZ04XYfjs?si=7pN_kZgjDoky4OyT','https://youtu.be/436xDqkfU-s?si=rV8Jf4BAHwawXfBM'],
                    learningWebsite:'https://www.w3schools.com/git/'
                },
                {
                    heading:"Github",
                    image:"https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
                    textareaCnt:"GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/apGV9Kg7ics?si=rD34SVGY0wWfCYc9','https://youtu.be/WzO6VynQ7UM?si=60pYvWkt6xolUPd0'],
                    learningWebsite:'https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github'
                },
                {
                    heading:"Next js",
                    image:"https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
                    textareaCnt:"Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/9P8mASSREYM?si=dFtnOAwx1x8UC5Nz','https://youtu.be/iNSf_7RyaXw?si=6K9LngeV3CEs4s9T'],
                    learningWebsite:'https://nextjs.org/learn-pages-router/basics/create-nextjs-app'
                },
                {
                    heading:"Node js",
                    image:"https://blog.cdn.cmarix.com/blog/wp-content/uploads/2023/05/ultimate-guide-to-node-js-streams.webp",
                    textareaCnt:"It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/f2EqECiTBL8?si=2oww_f6onTVwh4h4','https://youtu.be/7hTtRfoAcLk?si=uIclc-hazVl9_1K6','https://youtu.be/SdyzXQoQO18?si=nHWt4uCHsBU2QiCF'],
                    learningWebsite:'https://www.w3schools.com/nodejs/'
                },
                {
                    heading:"Express js",
                    image:"https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png",
                    textareaCnt:"Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/nH9E25nkk3I?si=uabU9dpCyb4hCKBt','https://youtu.be/bo3fi5se1OM?si=-zOrNeIQ7wzCeGZK','https://youtu.be/KUoBYPMbaps?si=1gWaYPYUTCnqUveU'],
                    learningWebsite:'https://www.tutorialspoint.com/expressjs/index.htm'
                },
                {
                    heading:"Mongo DB",
                    image:"https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
                    textareaCnt:"MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/8eJJe4Slnik?si=p79Z4_CjNoYJht_k','https://youtu.be/CKaywM2qXpo?si=Pn2vxgsPCE-4aupq',"https://youtu.be/Otdxk0Mmdmo?si=SmIBHc6rVx2oU6Rz"],
                    learningWebsite:'https://www.tutorialspoint.com/mongodb/index.htm'
                },
                {
                    heading:"Mongo DB Atlas",
                    image:"https://techcrunch.com/wp-content/uploads/2016/06/2016-06-27_1940.png",
                    textareaCnt:"MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf&si=uEZDKyko82m18SqO','https://youtu.be/Svo-tPQ4GGU?si=xzQee_F8BKC-Q-Cc'],
                    learningWebsite:'https://www.mongodb.com/docs/atlas/getting-started/'
                },
                {
                    heading:"Mongoose",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png",
                    textareaCnt:"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
                    status:"not started",
                    tutorialVideo:['https://youtu.be/DZBGEVgL2eE?si=8dYRlOejVJx1s28H','https://youtu.be/HgePOoxoNZU?si=UATxs242JrLUxTKV','https://youtu.be/CgpxM31UBec?si=3rbhjSQ2Z7SoA1-f'],
                    learningWebsite:'https://www.geeksforgeeks.org/mongoose-tutorial/'
                },
                {
                    heading:"CORS policy errors",
                    image:"https://i.ibb.co/Vv46CBc/ASP-NET-Cors-error-fix.png",
                    textareaCnt:"CORS errors happen when a webpage makes a request to a different domain than the one that served the page, and the server responds with an HTTP error because the “Origin” header in the request is not allowed by the server's CORS configuration.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:''
                },
                {
                    heading:"Package manager",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNrSGHtpML2l6ak9tMDNKCA_IsFd0toqXaNOVT-uoKYyxfSj88vjZAMZ3hIKwxAb3Ekk&usqp=CAU",
                    textareaCnt:"A package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:''
                },

                {
                    heading:"JEST Unit testing",
                    image:"https://miro.medium.com/v2/resize:fit:300/1*veOyRtKTPeoqC_VlWNUc5Q.png",
                    textareaCnt:"Jest is a delightful JavaScript Testing Framework with a focus on simplicity.It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/IPiUDhwnZxA?si=WqqaWA7YsLFfDWpa','https://youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&si=rzyxFp0iMIzPc0WU'],
                    learningWebsite:'https://www.lambdatest.com/learning-hub/unit-testing-with-jest'
                },
                {
                    heading:"Cypress End testing",
                    image:"https://www.cypress.io/cypress_logo_social.png",
                    textareaCnt:"Cypress is an automation web testing tool that's fast, easy, and reliable for testing the things (web components) that run in a browser. It's an open-source test automation framework for testing JavaScript web and enables you to perform unit, integration, and end-to-end tests",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLpmrn9zBXhkiu9XRplvq3ir9G2j0-O_pc&si=8rRfSBkUZvuTmq5v'],
                    learningWebsite:'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test'
                },
                {
                    heading:"RESTful API",
                    image:"https://cdn.vockan.com/2022/wp-content/uploads/2023/03/02194049/restapi2-1.png",
                    textareaCnt:"A RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLTCrU9sGybupzS5-3iYTsYUI1emBDKdHu&si=mLBnB4xwSvcfjjMY','https://youtu.be/Io4bjADJ2rs?si=FGGOwlAX92qXLv1N'],
                    learningWebsite:'https://www.geeksforgeeks.org/rest-api-introduction/'
                },
                {
                    heading:"Astro",
                    image:"https://astro.build/assets/press/astro-logo-dark.svg",
                    textareaCnt:"Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/e-hTm5VmofI?si=z34AOc-ko3upaJCl'],
                    learningWebsite:'https://bejamas.io/blog/practical-guide-to-astro-js-framework/'
                },
                {
                    heading:"Lodash",
                    image:"https://miro.medium.com/v2/resize:fit:800/1*3NrSA_osjPYn2rKVvjIGCw.png",
                    textareaCnt:"Lodash is a JavaScript library that helps programmers write more concise and maintainable JavaScript.",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLTgRMOcmRb3OL-PKT5FvIBdXVazTNTl-_&si=OVZypdcW3xrDHSoc'],
                    learningWebsite:'https://www.tutorialspoint.com/lodash/index.htm'
                },
                {
                    heading:"React Native",
                    image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
                    textareaCnt:"React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.",
                    status:"not started",
                    tutorialVideo:['https://youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&si=iqI7Fe_0M4wXYpXB','https://youtu.be/UVZ5LGhiBkY?si=r8DCp5z8FTqFMSOd'],
                    learningWebsite:'https://www.tutorialspoint.com/react_native/index.htm'
                },
                {
                    heading:"Flutter",
                    image:"https://miro.medium.com/v2/resize:fit:1400/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
                    textareaCnt:"Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/IfUjHNODRoM?si=22JQPRmMAjPhcqh4','https://youtube.com/playlist?list=PLvggmUWAbezlotfOFfdZ4mOgK4QyMqLEv&si=YAW1vgsUyXniUBm9'],
                    learningWebsite:'https://www.tutorialspoint.com/flutter/index.htm'
                },
                {
                    heading:"Axios",
                    image:"https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png",
                    textareaCnt:"Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE",
                    status:"not started'",
                    tutorialVideo:['https://youtube.com/playlist?list=PLnHJACx3NwAdSOK3BoQ7wjCDT1Iw7hs_u&si=2T43HMDNV8w4FRC4','https://youtu.be/O7DBVCiqrzU?si=WatUYYL-E25aO7Co'],
                    learningWebsite:'https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/'
                },
                {
                    heading:"React Router DOM",
                    image:"https://www.codesmith.io/hs-fs/hubfs/Blog%20Images/Blog%20Photos/react-router-logo.png?width=600&name=react-router-logo.png",
                    textareaCnt:"React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.",
                    status:"not started'",
                    tutorialVideo:['https://youtu.be/nDGA3km5He4?si=-qs0n3OlTxowvgzV','https://youtube.com/playlist?list=PLQeZxRj52I-ExG_DbqG-MuOfFT442i08A&si=ElCzsl1j9jA16Qme'],
                    learningWebsite:'https://www.sitepoint.com/react-router-complete-guide/'
                },
                {
                    heading:"Web security (OWASP)",
                    image:"https://www.secplicity.org/wp-content/uploads/2017/04/OWASP-Logo.png",
                    textareaCnt:"The Open Web Application Security Project (OWASP) is an open community dedicated to enabling organizations to develop, purchase, and maintain applications and APIs that can be trusted.",
                    status:"not started'",
                    tutorialVideo:[],
                    learningWebsite:''
                }
            ],
        },
        {
            level:'intermediate',
            task:[
                {
                    heading:'Sign in page',
                    textareaCnt:'create a responsive sign-in page',
                    image:require('../image/intermediateTasks/question1.png')
                },
                {
                    heading:'Sign up page',
                    textareaCnt:'create a responsive sign-up page for user registration',
                    image:require('../image/intermediateTasks/question2.png')
                },
                {
                    heading:'Gird and flex',
                    textareaCnt:'design the boxes using grid or flex',
                    image:require('../image/intermediateTasks/question3.png')
                },
                {
                    heading:'Crud operation',
                    textareaCnt:'you can create,read,update,delete operation using react js',
                    image:require('../image/intermediateTasks/question4.png')
                }
            ]
        }
    ]

    const traineeDetails=[
        {
            name:'krishna kumar',
            username:'krishna123',
            password:'app@123',
            position:'fresher',
            dateOfJoining:'22 jan 2024'
        },
        {
            name:'suresh kumar',
            username:'suresh123',
            password:'app@123',
            position:'fresher',
            dateOfJoining:'22 jan 2024'
        },
        {
            name:'pradeep',
            username:'pradeep123',
            password:'app@123',
            position:'fresher',
            dateOfJoining:'22 jan 2024'
        }
    ]
    
    // admin can view the task detalils 
    const [showTaskObject,setShowTaskObject]=useState({})
    const handleViewAndEditModel = (object) =>{
        setShowTaskObject(object)
    }

    //setting trainee level
    const [traineeLevel,setTraineeLevel]=useState("fresher")
    const [displayTraineeArray,setDisplayTraineeArray]=useState([])
    const [displayTableData,setdisplayTableData]=useState([])
    const [traineeLevelFilter,setTraineeLevelFilter]=useState([])
    const [traineeLevelFilterDuplicate,setTraineeLevelFilterDuplicate]=useState([])
    const [newTraineeData,setnewTraineeData]=useState({})
    const [SendTaskNameForModel,SetSendTaskNameForModel]=useState("")
    const [assignedExistingArray,setAssignedExistingArray]=useState([])
    const [fresherCount,setFresherCount]=useState(Number)
    const [beginnerCount,setBeginnerCount]=useState(Number)
    const [intermediateCount,setIntermediateCount]=useState(Number)
    const [traineeModelList,setTraineeModelList]=useState(Array)
    const [traineeModelRole,setTraineeModelRole]=useState(String)
    // const []


    //react pagination
    const [pageCount,setPageCount]=useState(Number)
    const [paginationTableSerialNo,setpaginationTableSerialNo]=useState(Number)
   

    useEffect(()=>{
        var traineeTaskFilterMethod=traineeTasks.filter((v,i)=>{
            return v.level===traineeLevel ? v : null
        })
        setDisplayTraineeArray([...traineeTaskFilterMethod[0].task])

        //trainees count checking
        var fc=0;
        var bc=0;
        var ic=0;
        for(var i=0;i<traineeDetails.length;i++){
            if(traineeDetails[i].position==='fresher'){
                fc++
            }
            else if(traineeDetails[i].position==='beginner'){
                bc++
            }
            else{
                ic++
            }
        }
        setFresherCount(fc)
        setBeginnerCount(bc)
        setIntermediateCount(ic)

        //pagination 
        const recordsPerPage=5
        const firstIndex=0
        const lastIndex=1*recordsPerPage       
        setpaginationTableSerialNo(firstIndex)
        const records=traineeTaskFilterMethod[0].task.slice(firstIndex,lastIndex)
        setdisplayTableData(records)
        const npages=Math.ceil(traineeTaskFilterMethod[0].task.length/recordsPerPage)
        setPageCount(npages) 


        var traineeLevelFilterMethod=traineeDetails.filter((v,i)=>{
            return v.position===traineeLevel
        })
        setTraineeLevelFilter(traineeLevelFilterMethod)
        setTraineeLevelFilterDuplicate(traineeLevelFilterMethod)
    },[traineeLevel])

    //search task in table
    const handleSearchTaskInTable=(e)=>{
        var a=[...displayTraineeArray]
        var b=e.target.value
        if(b.length>0){
            var obj=[]
            var count=0
            for(var i=0;i<a.length;i++){
                count=0
                for(var j=0;j<b.length;j++){
                    var nme=a[i].heading[j].toLowerCase()
                    if(nme===b[j]){
                        ++count
                    }
                } 
                if(count===b.length){
                    obj[obj.length]=a[i]
                }
            } 
            // setting search array data in main aray 
            setDisplayTraineeArray(obj)

            const recordsPerPage=5
            const lastIndex=1*recordsPerPage
            const firstIndex=lastIndex-recordsPerPage 
            const records=obj.slice(firstIndex,lastIndex)
            setdisplayTableData(records)
            const npages=Math.ceil(obj.length/recordsPerPage)
            setPageCount(npages)
            
        }
        else{
            //resetting search
            var traineeTaskFilterMethod=traineeTasks.filter((v,i)=>{
                return v.level===traineeLevel ? v : null
            })
            setDisplayTraineeArray([...traineeTaskFilterMethod[0].task])

            const recordsPerPage=5
            const lastIndex=1*recordsPerPage
            const firstIndex=lastIndex-recordsPerPage 
            const records=traineeTaskFilterMethod[0].task.slice(firstIndex,lastIndex)
            setdisplayTableData(records)
            const npages=Math.ceil(traineeTaskFilterMethod[0].task.length/recordsPerPage)
            setPageCount(npages)
        }
    }

    //pagination button clicking 
    const handlePageClick= (id) =>{  
        const recordsPerPage=5
        const lastIndex=id.selected*recordsPerPage
        setpaginationTableSerialNo(lastIndex)
        const records=displayTraineeArray.slice(lastIndex,lastIndex+5)
        setdisplayTableData(records)
    }

    //admin entering new trainee email and doj for trainee login 
    const handleNewTrainee = (event) =>{

    }

    //updating trainee name in task
    const handleAddTraineeNameInArray = (event)=>{
        var findTraineeLevelObject=traineeTasks.filter((value,index)=>{
            return value.level===traineeLevel 
        })

        var updateTraineeAddingData=findTraineeLevelObject[0].task.map((val,ind)=>{
            if(val.heading===SendTaskNameForModel){
                var spreadTaskAssignedFor={...val}
                var TaskAssignedForArray=[...spreadTaskAssignedFor.taskAssignedFor]
                TaskAssignedForArray[TaskAssignedForArray.length]=event.target.value

                spreadTaskAssignedFor.taskAssignedFor=TaskAssignedForArray
                return spreadTaskAssignedFor
            }
            else{
                return val
            }
        })

        var finalDispatc=traineeTasks.map((value,index)=>{
            return value.level===traineeLevel ? {...value,task:updateTraineeAddingData} : value
        })
        console.log(finalDispatc)
    }

    //add task search box
    const handleSearchTrainee=(event)=>{
        var userSearchMatch=traineeLevelFilter.filter((v,i)=>{
            return v.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setTraineeLevelFilterDuplicate(userSearchMatch)
    }

    const handleSelectAllTraineeAndAssignTask = (event) =>{
        var checkboxQueryData=document.querySelectorAll('.checkboxInput')
        if(event.target.checked){
            for(var i=0;i<checkboxQueryData.length;i++){
                document.querySelectorAll('.checkboxInput')[i].checked=true
            }
        }
        else{
            for(var j=0;j<checkboxQueryData.length;j++){
                document.querySelectorAll('.checkboxInput')[j].checked=false
            }
        }
       
    }

    // assign button function 
    const handleSendTaskNameForModel=(heading,assignedArray)=>{
        SetSendTaskNameForModel(heading)
        setAssignedExistingArray(assignedArray)
    }

    //changing array of object by clicling difficulty level
    const handleTraineeDificultyLevel=(traineeLevel)=>{
        setTraineeLevel(traineeLevel)

        //pagination array changing 
        const paginationButtonDisable=document.querySelectorAll('.page-item')
        for(var i=0;i<paginationButtonDisable.length;i++){
            paginationButtonDisable[i].classList.remove('active')
        }

        //dificulty card changing
        var cardIndex=0
        if(traineeLevel==="fresher"){
            cardIndex=0
        }
        else if(traineeLevel==="beginner"){
            cardIndex=1
        }
        else{
            cardIndex=2
        }

        var difficultyDiv=document.querySelectorAll('.dificulty-card')
        for(var j=0;j<difficultyDiv.length;j++){
            if(j===cardIndex){
                difficultyDiv[j].classList.add('trainee-card-active')
            }
            else{
                difficultyDiv[j].classList.remove('trainee-card-active')
            }
        }
    }


    //display trainee list to admin
    const handleTraineeList=(traineeType)=>{
        var listOfTrainee=traineeDetails.filter((v,i)=>{
            return v.position===traineeType
        })
        setTraineeModelList(listOfTrainee)

        if(listOfTrainee.length>0){
            setTraineeModelRole(listOfTrainee[0].position)
            setTraineeModelRole(traineeType)
        }
        else{
            setTraineeModelRole("no users in "+traineeType)
        }
    }


    return(
        <>
         
            <div class="trainee-height main-content py-2 header-default-background" id="trainee">
                <div className="container d-flex flex-wrap">
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <div className="trainee-card trainee-card-active dificulty-card position-relative pointer" onClick={()=>handleTraineeDificultyLevel('fresher')}>
                            <div className="trainee-card-image">
                                <img src={require('../image/fresher.jpg')} alt="card-image" className="col-12"/>
                            </div> 
                            <div className="trainee-candidate-div" onClick={()=>handleTraineeList('fresher')}>
                                <p className="m-0" data-bs-toggle="modal" data-bs-target="#displayListOfTrainee">
                                    <CiUser className="fs-5"/>
                                    <span className="ps-3">{fresherCount} Candidate</span>
                                </p>
                            </div>

                            <div className="trainee-adding-part">
                                <div className="plus-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span><FiPlus/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <div className="trainee-card dificulty-card position-relative pointer" onClick={()=>handleTraineeDificultyLevel('beginner')}>
                            <div className="trainee-card-image">
                                <img src={require('../image/Beginners.jpg')} alt="card-image" className="col-12"/>
                            </div> 
                            <div className="trainee-candidate-div" onClick={()=>handleTraineeList('beginner')}>
                                <p className="m-0" data-bs-toggle="modal" data-bs-target="#displayListOfTrainee">
                                    <CiUser className="fs-5"/>
                                    <span className="ps-3">{beginnerCount} Candidate</span>
                                </p>
                            </div>

                            <div className="trainee-adding-part">
                                <div className="plus-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span><FiPlus/></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <div className="trainee-card dificulty-card position-relative pointer" onClick={()=>handleTraineeDificultyLevel('intermediate')}>
                            <div className="trainee-card-image">
                                <img src={require('../image/Intermediate.jpg')} alt="card-image" className="col-12"/>
                            </div> 
                            <div className="trainee-candidate-div" onClick={()=>handleTraineeList('intermediate')} >
                                <p className="m-0" data-bs-toggle="modal" data-bs-target="#displayListOfTrainee">
                                    <CiUser className="fs-5"/>
                                    <span className="ps-3">{intermediateCount} Candidate</span>
                                </p>
                            </div>

                            <div className="trainee-adding-part">
                                <div className="plus-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span><FiPlus/></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 d-inline-flex pe-3 mt-4">
                        <h3 className="col-6 ps-3">{traineeLevel.charAt(0).toUpperCase()+ traineeLevel.slice(1)} task lists</h3>
                        <div className="col-6 d-inline-flex justify-content-end">
                            <div className="col-5">
                                <input type="email" class="form-control col-6" placeholder="search" onChange={handleSearchTaskInTable}/>
                            </div>
                            <div className="col-3 text-end">
                                <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#addTaskModel">Add Tasks</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 m-2">
                        <table className="col-12 p-2 text-center trainee-card trainee-card-table" cellSpacing={"20px"}>
                            <thead>
                                <tr>
                                    <th>Task no</th>
                                    <th>Task title</th>
                                    {
                                        traineeLevel!=='intermediate' ?
                                            <>
                                                <th >Task tutorial video</th>
                                                <th>Task reference document</th>
                                            </>
                                    :   
                                        <>
                                            <th>Task description</th>
                                            <th>Task images</th>
                                        </>
                                    }
                                    <th>view</th>
                                    <th>Assign</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    displayTableData.map((v,i)=>{
                                        return <tr key={i}>
                                                    <td>{paginationTableSerialNo+1+i}</td>
                                                    <td>{v.heading}</td>

                                                    {traineeLevel!=='intermediate' ?
                                                            <>                                                               
                                                                <td className={v.tutorialVideo!==undefined && v.tutorialVideo.length>0 ? "text-success" : "text-danger"}>
                                                                    {v.tutorialVideo!==undefined && v.tutorialVideo.length>0 ? "Available" : "Unavailable"}
                                                                </td>
                                                                <td className={v.learningWebsite!==undefined && v.learningWebsite.length>0 ? "text-success" : "text-danger"}>
                                                                    {v.learningWebsite!==undefined && v.learningWebsite.length>0 ?  "Available" : "Unavailable"}
                                                                </td>
                                                            </>
                                                        :
                                                            <>
                                                                <td className={v.textareaCnt!==undefined && v.textareaCnt.length>0 ? "text-success":"text-danger"}>
                                                                    {v.textareaCnt!==undefined && v.textareaCnt.length>0 ? "Available":"Unavailable"}
                                                                </td>
                                                                <td className={v.image!==undefined && v.image!=='' ? "text-success":"text-danger"}>
                                                                    {v.image!==undefined && v.image.length!=='' ? "Available" : "Unavailable"}
                                                                </td>
                                                            </>
                                                    }

                                                    <td>
                                                        <HiOutlineViewfinderCircle className="fs-5 pointer" data-bs-toggle="modal" data-bs-target="#viewObjectandEdit" onClick={()=>handleViewAndEditModel(v)}/>
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#assignTaskModel" onClick={()=>handleSendTaskNameForModel(v.heading,v.taskAssignedFor)}>Assign</button>
                                                    </td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12 d-inline-flex mt-3">
                        <div className="col-4">
                            <p className="ps-3">Total number of task for {traineeLevel.charAt(0).toUpperCase()+ traineeLevel.slice(1)} :{displayTraineeArray.length}</p>
                        </div>
                        <div className="col-8 d-inline-flex justify-content-end">
                            <ReactPaginate 
                                previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={'...'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination justify-content-center"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                activeClassName={"active"}
                            />
                        </div>
                    </div>
                    
                </div>
                
            </div>



            {/* add trainees*/}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">New trainee</h5>
                    </div>
                        <form class="modal-body p-3">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" name="traineeMail" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticDoj" class="col-sm-2 col-form-label">Date of joining</label>
                                <div class="col-sm-10">
                                <input type="date" class="form-control" id="staticDoj" name="traineeDoj" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword" value="Applied@123" readOnly/>
                                </div>
                            </div>

                            <div className="text-end">
                                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* add Tasks*/}
            <div class="modal fade" id="addTaskModel" tabindex="-1" aria-labelledby="addTaskModelLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add tasks</h5>
                    </div>
                        <form class="modal-body p-3">
                            <div class="mb-3 row">
                                <label for="taskTitle" class="col-sm-4 col-form-label">Task title</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="taskTitle" name="taskTitle" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="taskDescription" class="col-sm-4 col-form-label">Task description</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="taskDescription" name="taskDescription" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="taskImage" class="col-sm-4 col-form-label">Task image</label>
                                <div class="col-sm-8">
                                <input type="file" accept="image/png, image/gif, image/jpeg" class="form-control" id="taskImage" name="taskImage" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="taskVideo" class="col-sm-4 col-form-label">Task related video</label>
                                <div class="col-sm-8">
                                    <input type="url" class="form-control" id="taskVideo" name="taskVideo" onChange={handleNewTrainee}/>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <label for="taskDocument" class="col-sm-4 col-form-label">Task related documents</label>
                                <div class="col-sm-8">
                                    <input type="url" class="form-control" id="taskDocument" name="taskDocument" onChange={handleNewTrainee}/>
                                </div>
                            </div>
                          

                            <div className="text-end">
                                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* assign Tasks*/}
            <div class="modal fade" id="assignTaskModel" tabindex="-1" aria-labelledby="assignTaskModel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Assign tasks</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <form class="modal-body p-3">
                            <div class="mb-3 row">
                                <label for="searchTrainee" class="col-sm-4 col-form-label">search trainee</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" id="searchTrainee" name="searchTrainee" onChange={handleSearchTrainee}/>
                                </div>
                            </div>
                            
                            <table className="col-12 text-center trainee-assign-user-table" cellSpacing={"15px"}>
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" class="checkboxInput" onChange={handleSelectAllTraineeAndAssignTask}/>
                                        </th>
                                        <th>Name</th>
                                        <th>Date of joining</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traineeLevelFilterDuplicate.map((v,i)=>{
                                        return  <tr key={i}>
                                                    <td>
                                                        <input type="checkbox" class="checkboxInput" value={v.name} onChange={handleAddTraineeNameInArray}/>
                                                    </td>
                                                    <td>{v.name}</td>
                                                    <td>{v.dateOfJoining}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>

                            <div className="text-end py-4">
                                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>

            {/* view and edit Tasks*/}
            <div class="modal fade" id="viewObjectandEdit" tabindex="-1" aria-labelledby="viewObjectandEditLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">view task details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        {
                            traineeLevel==='intermediate'?
                                <div className="modal-body p-3">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="col-12 col-lg-5 text-center">
                                            <img src={showTaskObject.image} alt="card-image" className="col-12"/>
                                        </div>
                                        <div className="col-12 col-lg-7 p-2">
                                            <h4>{showTaskObject.heading!=='' ? showTaskObject.heading : null}</h4>
                                            <p>{showTaskObject.textareaCnt!='' ? showTaskObject.textareaCnt : null}</p>
                                        </div>
                                    </div>     
                                    <div className="text-end my-3">
                                        <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                    </div>           
                                </div> 
                            :
                                <div className="modal-body p-3 d-flex flex-wrap align-items-center">
                                    <div className="col-12 col-lg-5 text-center">
                                        <img src={showTaskObject.image!=='' ? showTaskObject.image : null} alt="task-image" className="col-10 rounded"/>
                                    </div>
                                    <div className="col-12 col-lg-7 p-2">
                                        <p>{showTaskObject.textareaCnt!='' ? showTaskObject.textareaCnt : null}</p>
                                        <div className="col-12">
                                            <h5>Task related videos</h5>
                                            {
                                                showTaskObject.tutorialVideo!==undefined ?
                                                    showTaskObject.tutorialVideo.map((v,i)=>{
                                                        return <div className="col-12 p-2">
                                                                    <span>
                                                                    video - {i+1}
                                                                    <a href={v} target="_blank" className="ps-4">{v}</a>
                                                                    </span>
                                                                </div>
                                                    })
                                                :
                                                    null
                                            }
                                        </div>
                                        <div className="col-12 mt-3">
                                            <h5>Task related documents</h5>
                                            <a href={showTaskObject.learningWebsite!=='' ? showTaskObject.learningWebsite : null} target="_blank">{showTaskObject.learningWebsite!=='' ? showTaskObject.learningWebsite : null}</a>
                                        </div>
                                        <div className="text-end my-3">
                                            <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                                        </div>  
                                    </div> 
                                </div>
                        }
                    </div>
                </div>
            </div>
             
            {/* displaying list of trainees*/}
            <div class="modal fade" id="displayListOfTrainee" tabindex="-1" aria-labelledby="exampledisplayListOfTrainee" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{traineeModelRole} list</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            traineeModelList.length>0 ?
                                    <table className="col-12 text-center trainee-assign-user-table" cellSpacing={"15px"}>
                                        <thead>
                                            <tr>
                                                <th>S.no</th>
                                                <th>Name</th>
                                                <th>Date of joining</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {traineeModelList.map((v,i)=>{
                                                return  <tr key={i}>
                                                            <td>{i+1}</td>
                                                            <td>{v.name}</td>
                                                            <td>{v.dateOfJoining}</td>
                                                        </tr>
                                            })}
                                        </tbody>
                                    </table>
                            :
                                <p className="text-danger text-center">No trainee found</p>
                        }
                        <div className="text-end my-3">
                            <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}