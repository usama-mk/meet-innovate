import React, { useState } from 'react'
import './JobsBody.css'
import jobsCommunity from '../../assets/images/jobsCommunity.png'

function JobsBody() {
    const[cards, setCards]= useState([{
        title: 'Usama'
    },
    {
        title: 'Sohaib'
    },
    {
        title: 'Majeed'
    }])
    const [pages,_]= useState([0, 1, 2, 3, 4, 5, 6])
    return (
        <div className="jobsBodyWrapper">
            <div className="jobsBody">
                <div className="search">
                    <div className="searchText">
                        Search For you next Job
                    </div>

                    <div className="searchElements">
                        <div className="element">
                            <div className="elementText">
                                I'm looking for
                            </div>
                            <div className="elementInput">
                                <input type="text" name="" id="" />
                            </div>
                        </div>

                        <div className="element">
                            <div className="elementText">
                                I'm looking for
                            </div>
                            <div className="elementInput">
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="searchButton">Search</div>
                       
                    </div>
                </div>

                <div className="recommendedTexts">
                    <div className="recommendedTitle">
                        Recommended for you
                    </div>
                    <div className="recommendedSub">
                    Based on your profile and search history
                    </div>
                </div>

                <div className="jobCards">
                        {
                            cards.map((card, key)=>{
                               return <h5>Card: {card.title}</h5>
                            })
                        }
                </div>

                <div className="pageNumbers">
                    {pages.map((page, key)=>{
                        return <h5>{page}</h5>
                    })}
                </div>


                <div className="jobsCommunity">
                    <div className="communityText">
                        Community
                    </div>
                    <div className="communityDesc">
                    We are focused on building a community that connects you to meaningful opportunities
                    </div>

                    <img src={jobsCommunity} alt="" />

                    <div className="afterImageDesc">
                    Join our community and gain access to career opportunities, networking events, conferences, and more. 

                    </div>

                    <div className="joinSlackButton">Join On Slack</div>Button
                </div>
            </div>
        </div>
    )
}

export default JobsBody
