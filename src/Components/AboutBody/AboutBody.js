import React from 'react'
import './AboutBody.css'
import about_group from '../../assets/images/about_group.png'
import mission_image from '../../assets/images/mission_image.png'
import vision_image from '../../assets/images/vision_image.png'
import talentImage from '../../assets/images/talentImage.png'




function AboutBody() {
    return (
        <div className="aboutBody">
            <div className="about_group_image_wrapper">
            <img className="about_group_image" src={about_group} alt="" />
            </div>

            <div className="companyDefinition" >
                <div className="intro">
                    <div className="introText">
                        Company Definition
                    </div>
                    <div className="intro_desc">
                    Meet & Innovate is a professional networking platform that connects minority talent to career and networking opportunities. We help companies drive pipeline diversity.

                    </div>
                </div>

                <div className="missionVision">
                    <div className="mission" >
                        <div className="mission_image_wrapper">
                            <img className="mission_image" src={mission_image} alt="" />
                        </div>
                        <div className="mission_text">
                            Mission
                        </div>

                        <div className="mission_desc">
                        To work every day to ensure that companies are doing everything they can do to create a fair and equitable opportunity when diverse candidates apply for a job.
                        </div>
                    </div>

                    {/* Vision */}

                    <div className="vision" >
                       
                        <div className="vision_text">
                            Vision
                        </div>

                        <div className="vision_desc">
                        To work every day to ensure that companies are doing everything they can do to create a fair and equitable opportunity when diverse candidates apply for a job.
                        </div>

                        <div className="vision_image_wrapper">
                            <img className="vision_image" src={vision_image} alt="" />
                        </div>
                    </div>
                </div>

                <div className="talent">
                    <div className="talent_image_wrapper">
                        <img className="talentImage" src={talentImage} alt="" />
                    </div>

                    <div className="talent_desc_wrapper">
                        <div className="talent_text">
                            Talent Ecosystem
                        </div>
                        <div className="talent_desc">
                        When you work with us you’re not just pulling random talent, you’re receiving talent directly from our ecosystem. We focus on people development, skills verification, and talent that is actively seeking employment
                        </div>
                    </div>
                </div>

                <div className="getInTouch">
                    <div className="getInTouchText">
                        Get In Touch
                    </div>

                    <div className="getForm">
                        <div className="getRight">
                        <div className="sendMessage">
                            Send A Message
                        </div>

                        <form action="">
                            <div className="inTwo" >
                            <input placeholder="First Name" type="text" name="" id="" />
                            
                            <input placeholder="First Name" type="text" name="" id="" />
                            </div>
                            
                            <div className="inTwo">
                            <input placeholder="First Name" type="text" name="" id="" />
                            <input placeholder="First Name" type="text" name="" id="" />
                            </div>

                            <div className="inFull">
                            <input placeholder="First Name" type="text" name="" id="" />
                            </div>

                            <div className="inFull">
                            <input placeholder="First Name" type="text" name="" id="" />
                            </div>

                            <div className="submitWrapper"> 
                                <div  className="submit">
                                Submit
                                </div>
                            </div>
                        </form>
                        </div>

                        <div className="getContact">
                            <div className="contactInfoText">
                                Contact Info
                            </div>

                            <div className="contacts">
                                <div>
                                    sadlkns
                                </div>

                                <div>
                                    kjsandisna
                                </div>

                                <div>7898y29</div>
                            </div>

                            <div className="socialContact">
                                social icons
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody
