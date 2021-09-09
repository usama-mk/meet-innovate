import React from 'react'
import './AboutBody.css'
import about_group from '../../assets/images/about_group.png'
import mission_image from '../../assets/images/mission_image.png'
import vision_image from '../../assets/images/vision_image.png'



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
            </div>
        </div>
    )
}

export default AboutBody
