import './AboutMe.css'
import { FaGraduationCap, FaBook  } from "react-icons/fa";

function AboutMe(){
    return (
        <section id = 'about'>
            <div className = 'aboutText'>
                <br></br>
            <h5>Meet Me</h5>
            <h2>About Me</h2>
            </div>
            <div className = 'aboutMePage'>
                <div className = 'aboutMe'>
                    <div className = 'aboutMe-Image'>
                        <img src = "https://t3.ftcdn.net/jpg/02/47/02/84/360_F_247028431_yPo8nwG9HuQN6oHyix8YnhYBeOXtF0c4.jpg"></img>
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
                    <div className = 'about_writing'><p>This is a paragraph about who I am, my position, where I study, what I want from a job, academic experience, work experience, excited to learn and challenge myself. This is a paragraph about who I am, my position, where I study, what I want from a job, academic experience, work experience, excited to learn and challenge myself. This is a paragraph about who I am, my position, where I study, what I want from a job, academic experience, work experience, excited to learn and challenge myself. This is a paragraph about who I am, my position, where I study, what I want from a job, academic experience, work experience, excited to learn and challenge myself. </p></div>
                    
                </div>
            </div>
    </section>
    )
}

export default AboutMe;