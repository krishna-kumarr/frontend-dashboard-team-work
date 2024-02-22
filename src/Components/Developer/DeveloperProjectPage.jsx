import React, { useEffect } from "react";
import "../Admin/Admin_css/AdminSidebar.css"
import "../Admin/Admin_css/AdminProjectPage.css"
import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import prepyFlowmap from '../image/prepy-flowmap.jpg';

export const DeveloperProjectPage = () =>{
    useEffect(() => {
        Aos.init()
        
    },[])


    const projectsArray = [
        {
            id: 1,
            projectTitle: "PrepyAI",
            projectDescription: "PrepyAI Generates Test Questions For Students, Helping Them Remember And Understand Their Study Material Better",
            websiteURL: "https://anatomy.adraproductstudio.com/qabot",
            wireframeURL: "https://anatomy.adraproductstudio.com/qabot",
            flowmap: prepyFlowmap,
            technologiesUsed: [
                {
                    id: 1,
                    tech: "HTML - v5",
                },
                {
                    id: 2,
                    tech: "CSS - v3",
                },
                {
                    id: 3,
                    tech: "Bootstrap - v5.0.2",
                },
                {
                    id: 4,
                    tech: "React - v18.2.0",
                },
            ],
            librariesUsed: [
                {
                    id: 1,
                    library: "axios - v1.5.1",
                },
                {
                    id: 2,
                    library: "react Bootstrap - v2.9.0",
                },
                {
                    id: 3,
                    library: "react-copy-to-clipboard - v5.1.0",
                },
                {
                    id: 4,
                    library: "react-icons - v4.11.0",
                },
                {
                    id: 5,
                    library: "react-router-dom - v6.16.0",
                },
                {
                    id: 6,
                    library: "react-toastify - v9.1.3",
                },
                {
                    id: 7,
                    library: "react-tooltip - v5.21.5",
                },
            ]
        },
        {
            id: 2,
            projectTitle: "EssenceAI",
            projectDescription: "Pick any Git repository, and understand it in detail through a chat experience. Available as a plugin for VScode, JetBrains and as a Web App in your browser.",
            websiteURL: "https://essenceai.adraproductstudio.com/",
            wireframeURL: "https://anatomy.adraproductstudio.com/qabot",
            flowmap: prepyFlowmap,
            technologiesUsed: [
                {
                    id: 1,
                    tech: "HTML - v5",
                },
                {
                    id: 2,
                    tech: "CSS - v3",
                },
                {
                    id: 3,
                    tech: "Bootstrap - v5.0.2",
                },
                {
                    id: 4,
                    tech: "React - v18.2.0",
                },
            ],
            librariesUsed: [
                {
                    id: 1,
                    library: "axios - v1.5.1",
                },
                {
                    id: 2,
                    library: "react Bootstrap - v2.9.0",
                },
                {
                    id: 3,
                    library: "react-copy-to-clipboard - v5.1.0",
                },
                {
                    id: 4,
                    library: "react-icons - v4.11.0",
                },
                {
                    id: 5,
                    library: "react-router-dom - v6.16.0",
                },
                {
                    id: 6,
                    library: "react-toastify - v9.1.3",
                },
                {
                    id: 7,
                    library: "react-tooltip - v5.21.5",
                },
            ]
        },
        {
            id: 3,
            projectTitle: "Second Careers",
            projectDescription: "Pick any Git repository, and understand it in detail through a chat experience. Available as a plugin for VScode, JetBrains and as a Web App in your browser.",
            websiteURL: "https://essenceai.adraproductstudio.com/",
            wireframeURL: "https://anatomy.adraproductstudio.com/qabot",
            flowmap: prepyFlowmap,
            technologiesUsed: [
                {
                    id: 1,
                    tech: "HTML - v5",
                },
                {
                    id: 2,
                    tech: "CSS - v3",
                },
                {
                    id: 3,
                    tech: "Bootstrap - v5.0.2",
                },
                {
                    id: 4,
                    tech: "React - v18.2.0",
                },
            ],
            librariesUsed: [
                {
                    id: 1,
                    library: "axios - v1.5.1",
                },
                {
                    id: 2,
                    library: "react Bootstrap - v2.9.0",
                },
                {
                    id: 3,
                    library: "react-copy-to-clipboard - v5.1.0",
                },
                {
                    id: 4,
                    library: "react-icons - v4.11.0",
                },
                {
                    id: 5,
                    library: "react-router-dom - v6.16.0",
                },
                {
                    id: 6,
                    library: "react-toastify - v9.1.3",
                },
                {
                    id: 7,
                    library: "react-tooltip - v5.21.5",
                },
            ]
        },
    ]

    return(
            <div className="project-height height-100 main-content ps-4 py-2 header-default-background project-component">
                <h4 className="text-center my-3 component-heading fs-3">Projects</h4>
                <hr />
                <div className="container mt-5 " >
                    <div className="accordion mb-5" id={"accordionExample"}>
                        {
                            projectsArray.map((individualArray, index) => {
                                return (
                                    <React.Fragment key={individualArray.id}>

                                        <div className="accordion-item border mb-5" 
                                             data-aos-offset="100"
                                             data-aos-duration="1000"
                                             data-aos="fade-up"
                                             data-aos-anchor-placement="top-bottom"
                                             >
                                            <h2 className="accordion-header ">
                                                <div className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded={index === 0 ? "true" : "false"} aria-controls={"#collapse" + index} >
                                                    <div className="row text-start">
                                                        <div className="col-lg-12">
                                                            <div className="card border-0 h-100" >
                                                                <div className="row g-0">
                                                                    {/* <div className="col-md-3 align-items-center h-100 justify-content-center d-flex">
                                                            <img src="https://pngfre.com/wp-content/uploads/apple-logo-10-1024x1024.png" className="img-fluid img-responsive rounded-start project-image w-50" alt="..." />
                                                        </div> */}
                                                                    <div className="col-md-10">
                                                                        <div className="card-body">
                                                                            <h5 className="card-title fw-bold">{individualArray.projectTitle}</h5>
                                                                            <p className="card-text fw-bold">{individualArray.projectDescription}</p>
                                                                            <button className="btn bg-custom">Show more</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2 d-lg-flex justify-content-center align-items-center d-none ">
                                                                        <img src="https://pngfre.com/wp-content/uploads/apple-logo-10-1024x1024.png" className="img-fluid img-responsive rounded-start project-image w-50" alt="..." />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </h2>
                                            <div id={"collapse" + index} className="accordion-collapse collapse " data-bs-parent={"#accordionExample"}>
                                                <div className="accordion-body">
                                                    <div className="row align-items-center">
                                                    <div className="col-lg-6 col-sm-12">
                                                    <strong className="website-url">Website URL : </strong>
                                                    <ul>
                                                        <li><a href="https://anatomy.adraproductstudio.com/qabot" className="website-url-link text-wrap" target="_blank">{individualArray.websiteURL}</a></li>
                                                    </ul>
                                                    <strong className="wireframe-url">Wireframe URL : </strong>
                                                    <ul>
                                                        <li><a href="https://anatomy.adraproductstudio.com/qabot" className="website-url-link" target="_blank">{individualArray.wireframeURL}</a></li>
                                                    </ul>
                                                    <strong className="technologies-used">Technologies used for Front-End development : </strong>
                                                    <div className=' mt-3' >
                                                        <ul>
                                                            {individualArray.technologiesUsed.map((tech) => {
                                                                return (
                                                                    <React.Fragment key={tech.id}>
                                                                        <li>{tech.tech}</li>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </ul>

                                                    </div>
                                                    <strong className="libraries-used">Libraries installed : </strong>
                                                    <ul>
                                                        {
                                                            individualArray.librariesUsed.map((library) => {
                                                                return (
                                                                    <React.Fragment key={library.id}>
                                                                        <li>{library.library}</li>
                                                                    </React.Fragment>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12">
                                                        <strong className="libraries-used ">Flowmap : </strong>
                                                        <img className="img-fluid" src={individualArray.flowmap}  alt="prepy-flowmap" />
                                                    </div>
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
    )
}