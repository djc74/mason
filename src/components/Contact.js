import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial'

import Map from '../components/Map'


const AddressContainer = styled.div`
    display: block;
    margin: 0 10%;
    > h1 {
        border-bottom: 2px solid white;
        font-weight: 400;
        margin: 20px 10%;
        padding-bottom: 5px;  
        @media (min-width: 900px) {
            margin: 0;
        }  
    }
    > h2 {
        margin-top: 5px;
    }
    > h3 {
        font-weight: 400;
        margin: 0;
        @media (min-width: 600px) {
           display: inline; 
           margin: 0;
        }
    }
`

const ContactWrapper = styled.div`
    background: #86ab45;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    text-align: center;
`

const FacebookLink = styled.div`
    > a {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        >h3 {
            font-weight: 400;
            margin: 0;
        }
    }
`
const MapContainer = styled.div`
    color: #d80000;
    height: 50vh;
    margin: 0 auto;
    width: 80%;
    @media (min-width: 900px) {
        order: 1;
    }
`

const ContactBlurb = styled.div`
    color: #fff;
    font-size: 1.15rem;
    margin: 20px 10%;
    text-align: left;
    @media (min-width: 900px) {
        margin: 0;
    }
`

const Contact = () => (
    <ContactWrapper>
            <AddressContainer>
                <h1>Contact us</h1>
                <h3>The Mason Clinic, </h3> 
                <h3>The Hollies, </h3> 
                <h3>1B Cornwallis Avenue, </h3> 
                <h3>Chatham, </h3> 
                <h3>Kent ME4 6JT</h3>
                <h2><a href="tel:01634842583">01634 842583</a></h2>
                <FacebookLink>
                <a href="https://www.facebook.com/The-Mason-Clinic-643641389021284/">
                    <Icon size={ 35 } icon={ facebookOfficial } />
                    <h3>Find us on Facebook</h3>
                    </a>
                </FacebookLink>
            </AddressContainer>
            <MapContainer>
                <Map />
            </MapContainer>
            <ContactBlurb>
                <p>A doctor’s referral is not necessary and you may be  seen the day of your call. Appointments are usually from     8:30am to 5:30pm, but early and late appointments can be    made by arrangement. We offer late appointments on Monday,  Tuesday, Wednesday and Thursday as well as Saturday     appointments.</p>
            </ContactBlurb>
    </ContactWrapper>
)

export default Contact