import React from 'react'
import './JobCard.css'
import fire from '../../assets/images/fire.png'
import bookmark from '../../assets/images/bookmark.png'
import fenty from '../../assets/images/fenty.png'

function JobCard({position, company, address, days}) {
    return (
        <div className="jobCard">
            <img className="bookmark" src={bookmark} alt="" />
            <img className="fire" src={fire} alt="" />
            <div className="jobCardContent">
                <img className="jobCardImage" src={fenty} alt="" />

                <div className="jobPosition">{position}</div>

                <div className="jobCompany">{company}</div>

                <div className="jobAddress">{address}</div>
            </div>

            <div className="jobStatus">
                <hr className="hr" />
                <div className="statusDays">{days} days ago</div>
            </div>
        </div>
    )
}

export default JobCard
