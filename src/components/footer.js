import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections } from '../actions/newsAction'
import { Link } from 'react-router-dom'
import { userDelete } from '../actions/userAction'


export default function Footer(props) {

    useEffect(() => {


    }, [])


    return (
        <footer>
            <div className='footer-block border-right'>
                <h5 className='block-heading'>APPLY HERE</h5>
                <div className='link-section '>
                    <a href='https://www.cuchd.in/admissions/'>Admissions</a>
                    <a href='https://www.cuchd.in/admissions/education-loan.php'>Education Loan</a>
                    <a href='https://cucet.cuchd.in/index.aspx?type=cuchd'>Online Admission</a>
                    <a href='https://www.cuidol.in/'>Distance Education Admissions</a>
                    <a href='https://www.cuchd.in/admissions/how-to-apply.php'>How to Apply?</a>
                    <a href='https://www.cuchd.in/scholarship/'>Scholarship</a>
                    <a href='https://www.cuchd.in/contact/'>Admission Office</a>
                    <a href='https://www.cuchd.in/iqac/student-feedback-form.php'>Student Feedback</a>
                </div>
            </div>
            <div className='footer-block border-right'>
                <h5 className='block-heading'>LEARN HERE</h5>
                <div className='link-section'>
                    <a href='https://www.cuchd.in/iqac/'>IQAC</a>
                    <a href='https://www.cuchd.in/organogram/'>Organogram</a>
                    <a href='https://www.cuchd.in/committee/'>Other Committees</a>
                    <a href='https://uims.cuchd.in/uims/'>Pay Fee Online</a>
                    <a href='https://www.cuchd.in/academics/institutes.php'>Our Institutes</a>
                    <a href='https://www.cuchd.in/academics/teaching-practices.php'>Teaching Practices</a>
                    <a href='https://www.cuchd.in/academics/system-of-evaluation.php'>System of Evaluation</a>
                    <a href='https://www.cuchd.in/placements/'>Placements</a>
                </div>
            </div>
            <div className='footer-block border-right'>
                <h5 className='block-heading'>VISIT HERE</h5>
                <div className='link-section '>
                    <a href='https://www.cuchd.in/rti/'>RTI</a>
                    <a href='https://www.cuchd.in/rti/#'>Grievance</a>
                    <a href='http://blog.cuchd.in/'>CU Blog</a>
                    <a href='https://www.cuchd.in/maps/'>Maps</a>
                    <a href='https://www.cuchd.in/maps/'>Distance Calculator</a>
                    <a href='https://www.cuchd.in/contact/general_query.aspx'>General Enquiry</a>
                    <a href='https://www.cuchd.in/contact/about-chandigarh.php'>About Chandigarh</a>
                    <a href='https://www.cuchd.in/assets/upload/Distance-education-bureau.pdf'>DEB(ODL) Application</a>
                </div>
            </div>
            <div className='footer-block'>
                <h5 className='block-heading'>LIVE HERE</h5>
                <div className='link-section'>
                    <a href='https://www.cuchd.in/student-services/hostel-facility.php'>Hostels</a>
                    <a href='https://www.cuchd.in/student-services/transport-facility.php'>Transport</a>
                    <a href='https://www.cuchd.in/student-services/sports.php'>Sports</a>
                    <a href='https://www.cuchd.in/student-services/cultural.php'>Cultural Activities</a>
                    <a href='https://www.cuchd.in/student-services/studen-welfare-services.php'>Student Welfare</a>
                    <a href='https://www.cuchd.in/student-services/libraries.php'>Libraries</a>
                </div>
            </div>
            <div className='copy-right'>© All rights reserved 2012-22</div>
        </footer>
    )
}