import React, { useState } from "react";
import "../Admin/Admin_css/AdminSidebar.css"
import "../Admin/Admin_css/AdminHomePage.css"
import { SiMessenger } from "react-icons/si";
import { CgSpinner } from "react-icons/cg";
import ReactPaginate from "react-paginate";
import { DeveloperHomePagePagination } from "./DeveloperHomePagePagination";

export const DeveloperHomePage = () =>{
    const [noOfEntries, setNoOfEntries] = useState(0)

    const [selectedCard,setSelectedCard] = useState("Projects");

    const cardsArray = [
        {
            id: 1,
            icon: <SiMessenger />,
            title : "Projects",
            text : "text",
            statusIcon :<CgSpinner />,
            count : 10,

        },
        {
            id: 2,
            icon: <SiMessenger />,
            title : "Developers",
            text : "text",
            statusIcon :<CgSpinner />,
            count : 4,



        },
        {
            id: 3,
            icon: <SiMessenger />,
            title : "Trainees",
            text : "text",
            statusIcon :<CgSpinner />,
            count : 2,



        },
        {
            id: 4,
            icon: <SiMessenger />,
            title : "Interns",
            text : "text",
            statusIcon :<CgSpinner />,
            count : 2,



        },
    ]

    const existingProjectsData = [
            {
                id : 1,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 2,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 3,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 4,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 5,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 6,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 7,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 8,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 9,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
            {
                id : 10,
                title : "Existing",
                status : "Ongoing",
                percentage : 64,
            },
    
    ]

    const currentProjectsData = [
        {
            id : 1,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 2,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 3,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 4,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 5,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 6,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 7,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 8,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 9,
            title : "Current",
            status : "Ongoing",
            percentage : 64,
        },

    ]

    const upcomingProjectsData = [
        {
            id : 1,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 2,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 3,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 4,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 5,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 6,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 7,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 8,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 9,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },
        {
            id : 10,
            title : "Upcoming",
            status : "Ongoing",
            percentage : 64,
        },

    ]

    const familiarWithArray =[
        {
            title:'Frontend Roadmap - 2024',
            TimeLineCharts:[
                        {
                            heading:"Html",
                            image:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png",
                            textareaCnt:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
                            status: 'not started',
                            startTime:  '1-01-2024',
                            endTime: '10-01-2024'
                        },
                        {
                            heading:"Css",
                            image:"data:image/png;base64,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",
                            textareaCnt:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
                            status:"not started",
                            startTime:  '10-01-2024',
                            endTime: '20-01-2024'
                        },
                        {
                            heading:"Sass",
                            image:"data:image/png;base64,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",
                            textareaCnt:"Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects",
                            status:"not started",
                            startTime:  '20-01-2024',
                            endTime: '30-01-2024'
                        },
                        {
                            heading:"Bootstrap",
                            image:"https://image.pngaaa.com/770/3801770-middle.png",
                            textareaCnt:"Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project.",
                            status:"not started",
                            startTime:  '1-02-2024',
                            endTime: '15-02-2024'
                        },
                        {
                            heading:"Javascript",
                            image:"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
                            textareaCnt:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
                            status:"not started",
                            startTime:  '1-03-2024',
                            endTime: '15-03-2024'
                        },
                        {
                            heading:"React js",
                            image:"https://www.liblogo.com/img-logo/re269r227-react-logo-react-logo-import-io.png",
                            textareaCnt:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
                            status:"not started",
                            startTime:  '1-04-2024',
                            endTime: '20-04-2024'
                        },
                        {
                            heading:"Redux Toolkit",
                            image:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
                            textareaCnt:"Redux Toolkit is a set of tools you can use for state management in React in place of Redux. The Redux team created it. Redux Toolkit offers a standardized approach to building Redux code and comes with libraries and tools that make it simpler to create scalable, maintainable, and effective Redux code",
                            status:"not started'",
                            startTime:  '11-06-2024',
                            endTime: '22-06-2024'
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
                            heading:"Github",
                            image:"https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
                            textareaCnt:"GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see",
                            status:"not started",
                            startTime:  '6-08-2024',
                            endTime: '10-08-2024'
                        },
                        {
                            heading:"Node js",
                            image:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
                            textareaCnt:"It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.",
                            status:"not started",
                            startTime:  '26-08-2024',
                            endTime: '15-09-2024'
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
                            heading:"Flutter",
                            image:"https://miro.medium.com/v2/resize:fit:1400/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
                            textareaCnt:"Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.",
                            status:"not started'",
                            startTime:  '6-11-2024',
                            endTime: '5-11-2024'
                        },
                    ],
                performance:0
        }
    ]

    const developersData = [
        {
            id : 1,
            name : "Angusiva",
            inProgress : "Second Careers"
        },
        {
            id : 2,
            name : "Pradeep",
            inProgress : "PrepyAI"
        },
        {
            id : 3,
            name : "Sureshkrishna",
            inProgress : "Flutter"
        },
        {
            id : 4,
            name : "Krishnakumar",
            inProgress : "Admin Dashboard"
        },
        {
            id : 5,
            name : "Aravind",
            inProgress : "Admin Dashboard"
        },
    ]

    const TraineesData = [
        {
            id : 1,
            name : "Mohan",
            currentTask : "PrepyAI Task"
        },
        {
            id : 2,
            name : "Gokul",
            currentTask : "Flutter Task"
        },
        {
            id : 3,
            name : "Chandru",
            currentTask : "Admin Dashboard Task"
        },
        {
            id : 4,
            name : "David",
            currentTask : "Admin Dashboard Task"
        },
        {
            id : 5,
            name : "Elango",
            currentTask : "Admin Dashboard Task"
        },
    ]
    const internsData = [
        {
            id : 1,
            name : "Ajay",
            currentTask : "PrepyAI Task"
        },
        {
            id : 2,
            name : "Siva",
            currentTask : "Flutter Task"
        },
        {
            id : 3,
            name : "Ram",
            currentTask : "Admin Dashboard Task"
        },
        {
            id : 4,
            name : "Kannan",
            currentTask : "Admin Dashboard Task"
        },
        {
            id : 5,
            name : "Mohan",
            currentTask : "Admin Dashboard Task"
        },
    ]

    const [selectedCardTable, setSelectedTable] = useState(currentProjectsData)

   
    const handleCardClick = (selectedCard) => {
        setSelectedCard(selectedCard);
        if(selectedCard === "Projects"){
            setSelectedTable(currentProjectsData)
        }
        else if(selectedCard === "Developers"){
            setSelectedTable()
        }
        else if(selectedCard === "Trainees"){
            setSelectedTable(currentProjectsData)
        }
        else{
            setSelectedTable(currentProjectsData)
        }

    }

    return(
        <> 
                <div class="home-height main-content header-default-background" >
                    <div className="container-fluid admin-dashboard px-4">
                      

                        <div className="developer-cards ">
                            <div className="container-fluid ">
                                <div className="row">
                                    {
                                        cardsArray.map((card) => {
                                            return (
                                                <React.Fragment key={card.id}>
                                                    <div className="col-lg-3 col-sm-12 my-auto px-3 py-2">
                                                        <div className={selectedCard === card.title ? "card py-4 px-4 card-active" : "card py-4 px-4"}  onClick={() => handleCardClick(card.title)}>
                                                            <div className="small-card d-flex justify-content-between align-items-center" >
                                                                <div>
                                                                    <h5 className="m-0 mb-2">{card.title}</h5>
                                                                    <h5 className="m-0 mb-2">{card.icon}</h5>
                                                                    <p className="m-0 mb-2">{card.text}</p>
                                                                </div>
                                                                <div>
                                                                    <h2 className="m-0 mb-2">{card.count}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="projects-container  ">
                            <div className="container-fluid " >
                                <div className="row ">
                                    <div className="col-lg-8 col-sm-12 current-projects-container ">
                                        {
                                            selectedCard === "Projects" ? 
                                                            <DeveloperHomePagePagination
                                                            noOfEntries={noOfEntries} 
                                                            setNoOfEntries={setNoOfEntries}
                                                            currentProjects={currentProjectsData}
                                                            upcomingProjects={upcomingProjectsData}
                                                            existingProjects={existingProjectsData}
                                                            /> : 

                                                selectedCard === "Developers" ? 
                                                            <div className="mx-2 w-100 developers-table pb-4 pt-4 ps-3 selected-card-active ">
                                                                <div className='d-flex justify-content-between'>
                                                                    <div className='selected-card-heading'>
                                                                        <button className='btn bg-custom ms-2' >Developers Details</button>

                                                                    </div>
                                                                    <div className='search-container pe-3'>
                                                                        <div class="input-group mb-3">
                                                                            <input type="text" class="form-control " placeholder="Search " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <table className="table table-bordered table-hover mt-3  ps-5">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">S.No</th>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col">Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            developersData.map((developer, index) => {
                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        <tr>
                                                                                            <td>{developer.id}</td>
                                                                                            <td>{developer.name}</td>
                                                                                            <td>{developer.inProgress}</td>
                                                                                        </tr>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tbody>
                                                                </table>

                                                            <div className="container-fluid">
                                                                <div className="row align-items-center">
                                                                    <div className="col-lg-6 p-0">
                                                                        <p className='m-0 '>No.of entries : {noOfEntries}</p>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                        <ReactPaginate
                                                                            previousLabel={"previous"}
                                                                            nextLabel={"next"}
                                                                            breakLabel={'...'}
                                                                            pageCount={1}
                                                                            marginPagesDisplayed={2}
                                                                            pageRangeDisplayed={2}
                                                                            // onPageChange={handlePageNoClick}
                                                                            containerClassName={"pagination pagination-sm float-end pe-3 pt-3"}
                                                                            pageClassName={"page-item"}
                                                                            pageLinkClassName={"page-link"}
                                                                            previousClassName={"page-item"}
                                                                            previousLinkClassName={"page-link"}
                                                                            nextClapassName={"page-item"}
                                                                            nextLinkClassName={"page-link"}
                                                                            breakClassName={"page-item"}
                                                                            breakLinkClassName={"page-link"}
                                                                            activeClassName={"active"}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            </div> : 
                                                    selectedCard === "Trainees" ? 
                                                                    <div className="mx-2 w-100 trainees-table pb-4 pt-4 ps-3 selected-card-active ">
                                                                        <div className='d-flex justify-content-between'>
                                                                            <div className='selected-card-heading'>
                                                                                <button className='btn bg-custom ms-2' >Trainees Details</button>
                                                                            </div>
                                                                            <div className='search-container pe-3'>
                                                                                <div class="input-group mb-3">
                                                                                    <input type="text" class="form-control " placeholder="Search " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <table className="table table-bordered table-hover mt-3  ps-5">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">S.No</th>
                                                                                    <th scope="col">Title</th>
                                                                                    <th scope="col">Current Task</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    TraineesData.map((trainee, index) => {
                                                                                        return (
                                                                                            <React.Fragment key={index}>
                                                                                                <tr>
                                                                                                    <td>{trainee.id}</td>
                                                                                                    <td>{trainee.name}</td>
                                                                                                    <td>{trainee.currentTask}</td>
                                                                                                </tr>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                        </table>

                                                                        <div className="container-fluid">
                                                                <div className="row align-items-center">
                                                                    <div className="col-lg-6 p-0">
                                                                        <p className='m-0 '>No.of entries : {noOfEntries}</p>
                                                                    </div>
                                                                    <div className="col-lg-6">

                                                                    <ReactPaginate
                                                                            previousLabel={"previous"}
                                                                            nextLabel={"next"}
                                                                            breakLabel={'...'}
                                                                            pageCount={1}
                                                                            marginPagesDisplayed={2}
                                                                            pageRangeDisplayed={2}
                                                                            // onPageChange={handlePageNoClick}
                                                                            containerClassName={"pagination pagination-sm float-end pe-3 pt-3"}
                                                                            pageClassName={"page-item"}
                                                                            pageLinkClassName={"page-link"}
                                                                            previousClassName={"page-item"}
                                                                            previousLinkClassName={"page-link"}
                                                                            nextClapassName={"page-item"}
                                                                            nextLinkClassName={"page-link"}
                                                                            breakClassName={"page-item"}
                                                                            breakLinkClassName={"page-link"}
                                                                            activeClassName={"active"}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                                    </div> : 
                                                                    <div className="mx-2 w-100 trainees-table pb-4 pt-4 ps-3 selected-card-active ">
                                                                        <div className='d-flex justify-content-between'>
                                                                            <div className='selected-card-heading'>
                                                                                <button className='btn bg-custom ms-2' >Interns Details</button>
                                                                            </div>
                                                                            <div className='search-container pe-3'>
                                                                                <div class="input-group mb-3">
                                                                                    <input type="text" class="form-control " placeholder="Search " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    <table className="table table-bordered table-hover mt-3  ps-5">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">S.No</th>
                                                                                <th scope="col">Title</th>
                                                                                <th scope="col">Current Task</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                internsData.map((trainee, index) => {
                                                                                    return (
                                                                                        <React.Fragment key={index}>
                                                                                            <tr>
                                                                                                <td>{trainee.id}</td>
                                                                                                <td>{trainee.name}</td>
                                                                                                <td>{trainee.currentTask}</td>
                                                                                            </tr>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tbody>
                                                                    </table>

                                                                <div className="container-fluid">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-lg-6 p-0">
                                                                            <p className='m-0 '>No.of entries : {noOfEntries}</p>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <ReactPaginate
                                                                                previousLabel={"previous"}
                                                                                nextLabel={"next"}
                                                                                breakLabel={'...'}
                                                                                pageCount={1}
                                                                                marginPagesDisplayed={2}
                                                                                pageRangeDisplayed={2}
                                                                                // onPageChange={handlePageNoClick}
                                                                                containerClassName={"pagination pagination-sm float-end pe-3 pt-3"}
                                                                                pageClassName={"page-item"}
                                                                                pageLinkClassName={"page-link"}
                                                                                previousClassName={"page-item"}
                                                                                previousLinkClassName={"page-link"}
                                                                                nextClapassName={"page-item"}
                                                                                nextLinkClassName={"page-link"}
                                                                                breakClassName={"page-item"}
                                                                                breakLinkClassName={"page-link"}
                                                                                activeClassName={"active"}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                </div>


                                                
                                        }
                                    </div>
                                    <div className="col-lg-4 col-sm-12 upcoming-projects-container ">
                                        <div className="mx-2 upcoming-projects">
                                            <div className="card" >
                                                <div className="card-header">
                                                    <h4>Upcoming Projects</h4>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                    <li className="list-group-item">MXA</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="trainee-container px-3 ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-8 py-3">
                                        <h4 className="mb-3">We are familiar with</h4>
                                        <div className="container-fluid">
                                            <div className="row align-items-center">
                                                {
                                                    familiarWithArray.map((familiar,index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                {
                                                                    familiar.TimeLineCharts.map((timeLineChart, index) => {
                                                                        return (
                                                                            <React.Fragment key={index}>
                                                                                <div className="col-lg-2 technology-logos">
                                                                                    <img className="w-50" src={timeLineChart.image} />
                                                                                </div>
                                                                            </React.Fragment>
                                                                        )
                                                                    })
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    })

                                                }
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </>
    )
}