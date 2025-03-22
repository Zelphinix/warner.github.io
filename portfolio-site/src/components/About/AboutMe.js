import './AboutMe.css'
import { FaGraduationCap, FaBook  } from "react-icons/fa";

function AboutMe(){
    return (
        <section id = 'about'>
            <h5>Meet Me</h5>
            <h2>About Me</h2>
            <div className = 'aboutMePage'>
                <div className = 'aboutMe'>
                    <div className = 'aboutMe-Image'>
                        <img src = "https://images.freeimages.com/variants/Nct7VHHK9FeQMo6LkvAmpZ5Z/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500" alt = "Profile Pic"></img>
                </div>
                </div>
                
                <div className = 'aboutMeInformation'>
                    <div className = 'about_cards'>

                        <article className = 'about_card'>
                            <div className = 'aboutIcon' style={{display: "flex", justifyContent: "center"}}><FaGraduationCap/></div>
                                <h5>Degree</h5>
                                    <small>
                                    BIT
                                    <br></br>
                            <i>Southern Institute of Technology</i>
                        </small>
                        </article>

                        <article className = 'about_card'>
                        <div className = 'aboutIcon' style={{display: "flex", justifyContent: "center"}}><FaBook/></div>
                            <h5>GPA</h5>
                            <small>A-</small>
                        </article>

                    </div>

                    <p>This is a paragraph about who I am, my position, where I study, what I want from a job, academic experience, work experience, excited to learn and challenge myself</p>
                </div>
            </div>
    </section>
    )
}

export default AboutMe;