import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";


export const AdminHomePagePagination = (props) => {
    const recordsPerPage = 5;
    const [projects, setProjects] = useState([])


    const [pageCount, setPageCount] = useState(0)
    const [inputProject, setInputProject] = useState("")


    const renderTableDetails = (input) => {
        setInputProject(input)
    }


    useEffect(() => {
        const firstIndex = 0;
        const lastIndex = recordsPerPage;
        if (inputProject === 'Current') {
            const currentResult = props.currentProjects.slice(firstIndex, lastIndex)
            setProjects(currentResult);
            var a = Math.ceil(props.currentProjects.length / recordsPerPage)
            setPageCount(a)
            props.setNoOfEntries(props.currentProjects.length)

        }

        else if (inputProject === 'Upcoming') {
            const upcomingResult = props.upcomingProjects.slice(firstIndex, lastIndex)
            setProjects(upcomingResult);
            var b = Math.ceil(props.upcomingProjects.length / recordsPerPage)
            setPageCount(b)
            props.setNoOfEntries(props.upcomingProjects.length)
        }

        else if (inputProject === 'Existing') {
            const existingResult = props.existingProjects.slice(firstIndex, lastIndex)
            setProjects(existingResult);
            var c = Math.ceil(props.existingProjects.length / recordsPerPage)
            setPageCount(c)
            props.setNoOfEntries(props.existingProjects.length)

        }
        else {
            const existingResult = props.existingProjects.slice(firstIndex, lastIndex)
            setProjects(existingResult);
            var c = Math.ceil(props.existingProjects.length / recordsPerPage)
            setPageCount(c)
            props.setNoOfEntries(props.existingProjects.length)

        }

    }, [inputProject])


    const handlePageNoClick = (value) => {
        const firstIndex = value.selected * recordsPerPage;
        const lastIndex = firstIndex + recordsPerPage;

        if (inputProject === 'Current') {
            const currentResult = props.currentProjects.slice(firstIndex, lastIndex)
            setProjects(currentResult);
        }
        else if (inputProject === 'Upcoming') {
            const currentResult = props.upcomingProjects.slice(firstIndex, lastIndex)
            setProjects(currentResult);
        }
        else if (inputProject === 'Existing') {
            const currentResult = props.existingProjects.slice(firstIndex, lastIndex)
            setProjects(currentResult);
        }
        else {
            const currentResult = props.existingProjects.slice(firstIndex, lastIndex)
            setProjects(currentResult);
        }
    }
    return (
        <div className="mx-2 current-projects pb-4 pt-4 ps-3 selected-card-active">
            <div className='d-flex justify-content-between'>
                <div className='selected-card-heading'>
                    <button className='btn bg-custom ms-2' onClick={() => renderTableDetails("Exist")}>Existing Projects</button>
                    <button className='btn bg-custom ms-2' onClick={() => renderTableDetails("Current")}>Current Projects</button>
                    <button className='btn bg-custom ms-2' onClick={() => renderTableDetails("Upcoming")}>Upcoming Projects</button>
                </div>
                <div className='search-container pe-3'>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control " placeholder="Search " aria-label="Recipient's username" aria-describedby="basic-addon2" /> 
                    </div>
                </div>
            </div>
            <table className="table table-bordered table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Completed percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>{project.id}</td>
                                        <td>{project.title}</td>
                                        <td>{project.status}</td>
                                        <td>{project.percentage}%</td>
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
                <p className='m-0 '>No.of entries : {props.noOfEntries}</p>
            </div>
            <div className="col-lg-6">
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageNoClick}
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
    )
}
