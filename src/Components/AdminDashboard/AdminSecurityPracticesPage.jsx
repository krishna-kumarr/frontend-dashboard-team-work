import React, { useEffect, useState } from "react";
import "../Reusable-css/AdminSecurityPractices.css";
import "../../App.css";
import Aos from "aos";
import 'aos/dist/aos.css';


export const AdminSecurityPracticesPage = () =>{
    useEffect(()=>{
        Aos.init()
    },[])

    const securityPracticesArray = [
        {
            title:"Preventing cross-site scripting (XSS) attacks",
            image:"xss-attacks.jpeg",
            therory:"XSS attacks are one of the largest and most dangerous forms of attack. They're crafted in such a way that they inject code into a web application, which ends up performing malicious actions when accessed by an end user. XSS attacks are drawn to a lack of sanitization in a web application's input and output, which can lead to a variety of attacks.",
            typeOfAttacks:[
                {
                    attackType:"Clickjacking attacks",
                    toPrevent:"Clickjacking attacks rank as one of the largest types of attacks under the XSS attack umbrella, as they're simply performed by replacing legitimate parts of a web page with similar-looking, yet dangerous, elements. For example, checkout buttons can be replaced with buttons redirecting users to fake banking pages, legitimate download buttons can be replaced with buttons resulting in malware downloads, and more."
                },
                {
                    attackType:"Geolocation stealing",
                    toPrevent:"With XSS attacks, an attacker can inject JavaScript libraries, which then execute on the client side—logging the user's IP address, geolocation and other personal details. These can then be used by the attacker to target the end user with personalized scams or phishing."
                },
                {
                    attackType:"Cryptomining",
                    toPrevent:"With code injected by an XSS attack, cryptomining can be performed on end users' devices as well. While it may already seem to slow down a single device, hundreds or thousands of users visiting a web application every day means crypto mining scripts running on your web application can unknowingly cause not only slowdowns but also heating issues on users' devices. This sort of effect on your web application can lead to a negative experience on their part.Protection against XSS attacks can be achieved by the proper sanitization of inputs made into your web application, as well as by filtering inputs correctly. For example, limiting mobile numbers to digits only or not allowing special characters in names can yield a substantial benefit by preventing most injection attacks on your web application."
                }
            ],
            videoForSolveThis:"https://youtu.be/tuUMOvuPk0Y?si=mRMhIjhS0PGl3i9e"
        },
        {
            title:"DoS (denial of service) attacks",
            image:"denial_of_service.jpg",
            therory:"DoS attacks and DDoS attacks on web applications are common. They're also difficult to deal with, as they use a swarm of compromised systems to make requests to your web application. DoS attacks, which originate from a single system or small number of them, can often be tackled by simply blocking the end system's IP address. DDoS attacks, on the other hand, are more difficult to block. This is because certain DDoS attacks originate from hundreds or thousands of systems at the same time—meaning they also make multiple thousands or millions of requests to your web application simultaneously—leading to system strain and a serious slowdown of your web application. Employing rate-limiting in your web application can prevent these types of attacks. Look to services like CloudFlare or Imperva, or hardware-based solutions; these can filter such attacks before they reach their intended target.",
            videoForSolveThis:"https://youtu.be/tMvNBkpv9Qw?si=KEOcsx_3XdzWvagb"
        },
        {
            title:"Preventing cross-site request forgery (CSRF)",
            image:"csrf-attack-1.png",
            therory:"CSRF attacks are aimed at tricking users into submitting forms which end up performing a different action from the one the user wishes to perform.For example, a user is logged into his banking application and browsing the internet at the same time. The user then comes across a Download button which he clicks on, and instead of actually downloading anything for the user, that fateful click transfers funds from the user's bank account to the attacker.CSRF attacks can be prevented by using a token value similar to an md5sum or sha256sum of random characters, which is generated on every page load and passed to a form via HTTP headers, upon the submission of any form.If the header token value is missing or if there is a token mismatch, the action is not performed and the user remains safe..",
            videoForSolveThis:"https://youtu.be/eHqbh0kyRYk?si=YLN6QLuT0kUWFJoy"
        },
        {
            title:"Content Security Policy (CSP)",
            image:"content-security-policy.png",
            therory:"Using Content Security Policy is an effective form of XSS attack prevention. It calls for an HTTP flag which informs your browser about the sources that can be trusted, and included as iFrames within your web application. Any source or URL not mentioned within the Content Security Policy flag is discarded, and will not be included or rendered within an iFrame on your web application. Enabling CSP in your HTTP headers is a worthwhile method of preventing XSS attacks to a large extent. And when combined with X-Frame-Options, it provides a solid defence against XSS attacks in general.",
            videoForSolveThis:"https://youtu.be/eHqbh0kyRYk?si=YLN6QLuT0kUWFJoy"
        },
        {
            title:"modern frameworks",
            image:"modern_frameworks.png",
            therory:"Often, web application front ends are built using commonly available frameworks. These frameworks make up the core of your web application's front end, and any security vulnerability within this framework can lead to a compromise of your web application as a whole.Using modern and frequently updated frameworks can help boost your web application's security. These frameworks frequently include built-in authentication handlers and other security features that help standardize the security practises needed for your web application.",
            reference:"https://frontendmastery.com/posts/frontend-security-primer/"
        },
        {
            title:"Auditing of 3rd-party libraries in use",
            image:"Third-Party-Library.jpg",
            therory:"3rd-party libraries are in use everywhere. They help speed up coding time and make implementation of new features into your web application that much easier—but any possible vulnerability in these 3rd-party libraries can impact your web application's overall security as well.For example, many web applications rely on 3rd-party libraries for handling billing and customer purchases. Any vulnerability in these billing libraries can cause multiple security issues in your web application, such as the leaking of user information or redirecting users to phishing domains to capture card details.Keeping track of and scanning 3rd-party libraries manually can often be tricky for large web applications, but online vulnerability scanners exist to help this process along, making it straightforward, automated, and ready to alert you whenever a vulnerability is found."
        },
        {
            title:"Avoiding iFrames where possible",
            image:"how-to-prevent-a-website-from-being-loaded-in-an-iframe-clue-mediator.png",
            therory:"While iFrames make your development process easier by allowing you to incorporate/load other pages/frames in your existing view, iFrames usage is often used without appropriate X-Frame-Options. Unfortunately, this allows for clickjacking attacks and the compromise of your web application's integrity.iFrame-based attacks can be used to play videos, open malicious forms (which look legitimate), and trick users into downloading malicious content that can lead to a degraded overall experience of your web application.",
            reference:"https://www.reflectiz.com/blog/iframe-security/"
        },
        {
            title:"Restricting available Feature Policy",
            image:"feature_policy.png",
            therory:"By default, your web application can access or request any feature from your end user's device—while this may be a nice-to-have during the development stage, if left enabled it can lead to attackers exploiting your web application and using these unrestricted feature flags/policies to ask end users' devices to enable certain features that appear legitimately offered by your web application itself.Using the Feature-Policy HTTP header is ideal for preventing such requests from originating from your web application.For example, setting the following Feature-Policy will alert the end users' web browsers to not enable these features, even if requested by your web application:.",
            reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy"
        },
        {
            title:"Input Validation",
            image:"input-validation.png",
            therory:"Implement rigorous input validation to prevent malicious data from entering your application. Sanitize user inputs to protect against Cross-Site Scripting (XSS) attacks.",
            reference:"https://www.insecure.in/input-validation-attacks"
        },
        {
            title:"Secure Communication",
            image:"secure_communication.png",
            therory:"Always use HTTPS to encrypt data transmitted between the client and server. Ensure that your API endpoints and external resources are also secured with HTTPS",
            reference:"https://thenewstack.io/secure-the-web-with-an-api-driven-backend-for-frontend/"
        },
        {
            title:"Authentication and Authorization",
            image:"authorization_authentication.jpg",
            therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
            reference:"https://zivukushingai.medium.com/everything-you-need-to-know-about-frontend-and-backend-authentication-ultimate-guide-7142a752249c"
        },
        {
            title:"Avoid Hardcoding Secrets",
            image:"avoiding-hardcode-secrets.jpg",
            therory:"Implement strong user authentication and authorization mechanisms. Ensure that only authorized users can access sensitive parts of your frontend",
            reference:"https://blog.logrocket.com/best-practices-for-managing-and-storing-secrets-in-frontend-development/"
        },
        {
            title:"Session Management",
            image:"sessionManagement.webp",
            therory:"Implement secure session management practices, including session timeouts, secure cookies, and the use of HTTP-only cookies to prevent session theft.",
            reference:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
        },
        {
            title:"Error Handling",
            image:"errorHandling.png",
            therory:"Avoid exposing sensitive information in error messages. Customize error handling to display user-friendly messages without revealing implementation details.",
            reference:"https://www.rev.com/api/responsecodes"
        },
        {
            title:"Security Headers",
            image:"security-headers.webp",
            therory:"Set security headers in your web server configuration to enhance frontend security. Examples include X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection.",
            reference:"https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html"
        },
        {
            title:"Rate Limiting",
            image:"rate limiting.jpg",
            therory:"Implement rate limiting to restrict the number of requests a user can make in a given time frame, which helps protect against brute force attacks.",
            reference:"https://developers.cloudflare.com/waf/rate-limiting-rules/"
        },
        {
            title:"Cross-Origin Resource Sharing (CORS)",
            image:"Cross Origin.png",
            therory:"Configure CORS headers on your server to specify which domains are allowed to access your frontend resources. This mitigates Cross-Origin Request Forgery (CSRF) and Cross-Site Script Inclusion (XSSI) attacks.",
            reference:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
        },
        {
            title:"Dependency Scanning",
            image:"dependency-scanning-build-log.png",
            therory:"Dependency scanning generates an alert for any open-source component, direct or transitive, found to be vulnerable that your code depends upon. Direct vulnerabilities are the libraries your code directly uses. Transitive dependencies are the libraries or other software that direct dependencies use.",
            reference:"https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning?view=azure-devops"
        },
        {
            title:"Regular Security Audits",
            image:"creating-a-front-end-security-audit-checklist.png",
            therory:"A front-end security audit serves as a proactive approach to identifying vulnerabilities in your web application before they can be exploited by malicious actors. It helps in maintaining the integrity, confidentiality, and availability of your web content. A well-defined security audit checklist will allow you to ensure that your front-end is protected against common threats such as cross-site scripting (XSS), cross-site request forgery (CSRF), and other vulnerabilities.",
            reference:"https://zerosack.org/blog/231023150620/creating-a-frontend-security-audit-checklist-examples-and-tips#:~:text=It%20helps%20in%20maintaining%20the,CSRF)%2C%20and%20other%20vulnerabilities."
        },
        {
            title:" Keep Abreast of Security News",
            image:"Cross Origin.png",
            therory:"Dependency scanning generates an alert for any open-source component, direct or transitive, found to be vulnerable that your code depends upon. Direct vulnerabilities are the libraries your code directly uses. Transitive dependencies are the libraries or other software that direct dependencies use.",
            reference:"https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning?view=azure-devops"
        },
        {
            title:"Security Automation",
            image:"security-automation.png",
            therory:"Integrate security tools and automated scans into your development pipeline to catch vulnerabilities early in the development process.",
            reference:"https://owasp.org/www-pdf-archive/AutomatedSecurityTestingofWebApplications-StephendeVries.pdf"
        }
    ]

    const [modelboxContent,setModelboxContent]=useState({})
    const [videoReference,setVideoReference]=useState(true)
    const [docReference,setDocReference]=useState(true)
    const [addMoreSecurity,setAddMoreSecurity]=useState({
        title:"",
        therory:"",
        videoForSolveThis:"",
        reference:""
    })
    // const dispatch = useDispatch()
    const [err,setErr]=useState(false)
    const [image,setImage]=useState("")

    const handleSecurityPracticeModel = (obj) =>{
        console.log(obj)
        setModelboxContent(obj)
    }

    const handleAddVideoReference = () =>{
        setVideoReference(false)
    }

    const handleAddDocumentReference = () =>{
        setDocReference(false)
    }

    const handleAddSecurityInput = (event)=>{
        setErr(false)
        setAddMoreSecurity({...addMoreSecurity,[event.target.name]:event.target.value})
    }

    const handleSubmitSecurityPractices = () =>{
        // if(addMoreSecurity.title!=="" && addMoreSecurity.therory!==""){
        //     setDocReference(true)
        //     setVideoReference(true)
        //     setErr(false)
        //     var addSecurityPracticesObject = [...State.securityPractices]
        //     addSecurityPracticesObject[addSecurityPracticesObject.length]=addMoreSecurity

        //     dispatch(updateSecurityPractices(addSecurityPracticesObject))
        // }
        // else{
        //     setTimeout(()=>{
        //         setErr(true)
        //     },5000)  
            
        // }
    }
    
    const handleCancelAddSecurityPractices = () =>{
        setDocReference(true)
        setVideoReference(true)
    }

    return(
        <>
            <div class="height-100 main-content py-2 header-default-background">
                <div className="container">
                    <div className="mt-5 security-practice-chart-height rounded">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="col-11 d-flex flex-wrap align-items-center">
                                <h2 className="col-8 col-md-10 text-start ps-4 my-4 text-secondary">Frontend security practices</h2>
                                <div className="col-4 col-md-2 text-end">
                                    <button className="col-12 col-md-10 col-lg-6 py-1 me-3 add-securityPractices-btn border-0 text-light" data-bs-toggle="modal" data-bs-target="#staticBackdropAddSecurityPractices">Add</button>
                                </div>
                            </div>
                            {securityPracticesArray.map((v,i)=>{
                                return <div className="col-11 m-3" key={i}>
                                    <div className="shadow d-flex flex-wrap align-items-center security-card overflow-hidden" >
                                        <div className="col-12 col-lg-4 p-4">
                                            <img src={require('../image/'+v.image)} alt="security-attack-image" className="col-12 security-attack-image"/>
                                        </div>
                                        <div className="col-12 col-lg-8 p-4">
                                            <h4 className="pb-4 important-heading">{v.title}</h4>
                                            <p className="set-solving-height security-card-content">{v.therory}</p>
                                        
                                            <div className="col-12 d-flex justify-content-end">
                                                <div className="col-4 col-md-5 col-lg-3 text-center read-more-btn"  data-bs-toggle="modal" data-bs-target="#staticBackdropReadMore" >
                                                    <p className="m-0 rounded">Read more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    

                    {/* security practice adding modal box  */}
                    <div className="modal modal-md fade" id="staticBackdropAddSecurityPractices" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content overflow-scroll security-practice-modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title text-dark fs-5" id="staticBackdropLabel">Add more security related issues</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {err ? <p className="text-danger">Some inputs are missing</p> : null}
                                    <form className="col-12 p-3 d-flex flex-wrap justify-content-center">
                                        <input type="text" placeholder="New attack" className="col-12 mt-4 ps-3 addsecurity-input py-1 rounded" name="title" />
                                        <textarea cols="3" rows="5" placeholder="Detail explaination of this attack" name="therory" className="mt-4 addsecurity-input py-1 rounded" />
                                        
                                        
                                        {
                                            videoReference ?  
                                                <div className="col-6 px-5 mt-5">
                                                    <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddVideoReference}>Add video</button>
                                                </div>
                                            :
                                                <input type="text" placeholder="Reference video link " className="addsecurity-input col-12 mt-4 ps-3 py-1 rounded" name="videoForSolveThis" />
                                        }

                                        {
                                            docReference ? 
                                                <div className="col-6 px-1 mt-5">
                                                    <button type="button" className="col-12 add-securityPractices-btn text-light border-0" onClick={handleAddDocumentReference}>Add document</button>
                                                </div>
                                            :
                                                <input type="text" placeholder="Reference document link " className="addsecurity-input col-12 mt-4 ps-3 py-1 rounded" name="reference" />
                                        }
                                        


                                        <button type="button" className="mt-5 col-6 py-1 add-securityPractices-btn text-light border-0" data-bs-dismiss={addMoreSecurity.title!=="" && addMoreSecurity.therory!=="" ? "modal" : null} aria-label={addMoreSecurity.title!=="" && addMoreSecurity.therory!=="" ? "Close" : null} onClick={handleSubmitSecurityPractices}>Add</button>
                                    </form>                            
                                </div>
                            </div>
                        </div>
                    </div>
                                        
                    {/* security attack modal box  */}
                    <div className="modal fade " id="staticBackdropReadMore" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content overflow-scroll security-practice-modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title text-dark fs-5" id="staticBackdropLabel">{modelboxContent.title}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {
                                        modelboxContent.image!==undefined ? 
                                            <div className="col-12 p-1 security-attack-image-modelBox">
                                                {/* <img src={require('../images/'+modelboxContent.image)} alt="security-attack-image"/> */}
                                            </div>
                                        :
                                            null
                                    }
                                

                                    {/* <h3 className="m-0 ps-1 important-heading fs-5">security practices to secure : </h3> */}
                                    <p className="set-solving-model p-2 text-secondary">{modelboxContent.therory}</p>
                                    
                                    {   
                                        modelboxContent.typeOfAttacks!==undefined ?
                                            <>
                                                <div className="col-12 d-flex flex-wrap border p-3">
                                                    <h4 className="fw-bold text-decoration-underline pb-3 text-dark">Types of attack</h4>
                                                    {modelboxContent.typeOfAttacks.map((v,i)=>{
                                                        return <div className="col-12">
                                                                    <h6 className="text-dark">{v.attackType}</h6>
                                                                    <p className="set-solving-model text-secondary">{v.toPrevent}</p>
                                                                </div>
                                                    })}
                                                </div>                                          
                                            </>
                                        :
                                            null
                                    }
                                    
                                    {
                                        modelboxContent.reference!==undefined ?
                                                <div className="p-2">
                                                    <h4 className="text-dark">Refernce document :</h4>
                                                    <a href={modelboxContent.reference} target="_blank">{modelboxContent.reference}</a>
                                                </div>
                                        :
                                            null
                                    }

                                    {
                                        modelboxContent.videoForSolveThis!==undefined ?
                                            <div className="p-4">
                                                <h6 className="mt-3 text-dark">To overcome this problem this video link helps you</h6>
                                                <a href={modelboxContent.videoForSolveThis} target="_blank">{modelboxContent.videoForSolveThis}</a>
                                            </div>
                                        :
                                            null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}