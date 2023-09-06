import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCol,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBCardImage,
    MDBCardFooter
} from 'mdb-react-ui-kit';

import card1Img from '../../images/Tech-MVC.gif'
import card2Img from '../../images/Expressjs_note-tracker.png'
import card3Img from '../../images/weather-dashboard.png'
import card4Img from '../../images/Drinking-fresco.png'
import card5Img from '../../images/Grone-zone.png'
import card6Img from '../../images/J.A.T.E.png'
import './Portfolio.css'

const Portfolio = () => {

    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card1Img} />
                        <MDBCardBody>
                            <MDBCardTitle>Tech-blog-MVC</MDBCardTitle>
                            <MDBCardText>
                                Tech-blog-MVC is a CMS-style blog site similar to a Wordpress site. Developers can publish their blog posts and comment on other developers posts as well. Developers can also delete and update their blogs or posts if they are login. Developers can also sign up if they want to login andthey are not registered. They can first sign up and then login themself. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/Tech-blog-MVC'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://pacific-brushlands-15738.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card2Img} />
                        <MDBCardBody>
                            <MDBCardTitle>Expressjs_Note_Taker</MDBCardTitle>
                            <MDBCardText>
                                Expressjs_Note_Taker is useful for write and save notes. SO THAT,user can keep track on tasks.This application used an Express.js back end and will save and retrieve note data from a JSON file
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/Expressjs_Note_Taker'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://express-note-tracker.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card3Img} />
                        <MDBCardBody>
                            <MDBCardTitle>Weather-Dashboard</MDBCardTitle>
                            <MDBCardText>
                                Weather Dashboard is used to weather outlook for multiple cities. In web application weather information of multiple cities is displayed with various formed like Date, wind, pressure, humidity, temperature etc. As well as forecast of five days would also display on Weather Dashboard in formed of cards

                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/6-Weather-Dashboard'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://anujalawankar.github.io/6-Weather-Dashboard/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card4Img} />
                        <MDBCardBody>
                            <MDBCardTitle>Drinking_Al_Fresco</MDBCardTitle>
                            <MDBCardText>
                                Drinking Al Fresco is a website that travelers can use to determine the location of a brewery in the city of their choosing. At the same time, a 2-day weather forecast will also be displayed so the user can determine their travel plans. The location can be saved in the search history for future reference and can also be cleared. When the page is refreshed, the results for the last performed search will appear. If the search history is cleared, a default city will appear with search results and weather conditions.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/Drinking_Al_Fresco'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://cthibodeau09.github.io/Drinking_Al_Fresco/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card5Img} />
                        <MDBCardBody>
                            <MDBCardTitle>GroanZone</MDBCardTitle>
                            <MDBCardText>
                                When visitors enter the Groan Zone, there is a login button that navigates to the login and signup pages for visitors. After login or signup, they are redirected to a page where they can create or add a new joke, allowing them to share their magical jokes.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/GroanZone'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://young-reef-43824.herokuapp.com/allJokes'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card6Img} />
                        <MDBCardBody>
                            <MDBCardTitle>Text-Editor-pwa</MDBCardTitle>
                            <MDBCardText>
                                Text Editor(J.A.T.E) is a just another text editor that runs in the browser. This app is a single-page application that meets the PWA criteria. Additionally, it is feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application is also function offline.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/AnujaLawankar/Text-Editor-pwa'>Repository link</MDBCardLink>
                            <MDBCardLink href='https://sheltered-refuge-17374-38e7268fa203.herokuapp.com/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default Portfolio;