import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import InputTextArea from "../../../components/inputTextArea/InputTextArea";
import TextField from "../../../components/TextField/TextField";
import { Accordion, Card } from "react-bootstrap"

export default function Profile() {
  return (
    <div>
      <div className="">
        <div className="intro-y box col-span-12 pb-6">
          <div className="p-3" id="new-products">

            <Accordion defaultActiveKey="0">
              {/* Personal Info */}
              <Card className="border-right-0 border-left-0 border-top-0 border-bottom-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="0">
                  <h5 className="mb-0  text-gray-900">
                    Personal Info
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="row py-2">
                      <div className="col-md-3">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Gender</h6>
                        <p className="mb-0 text-dark">Male</p>
                      </div>
                      <div className="col-md-3">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Birthday</h6>
                        <p className="mb-0 text-dark">16/3/2020</p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Phone Number</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-2 text-muted">Mobile Contact</p>
                            <p className="mb-0">0810 333 4040</p>
                          </div>
                          <div className="col-md-6">
                            <p className="mb-2 text-muted">Office Contact</p>
                            <p className="mb-0">0810 333 5040</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="row py-2">
                      <div className="col-md-4">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Address</h6>
                        <p className="mb-0 text-dark">2, Lagos Road</p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>City</h6>
                        <p className="mb-0 text-dark">Ikeja</p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Living In</h6>
                        <p className="mb-0 text-dark">Lagos</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row py-2">
                      <div className="col-md-6">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Hometown</h6>
                        <p className="mb-0 text-dark">Cape Town</p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Languages</h6>
                        <p className="mb-0 text-dark mr-3 d-inline">English,</p>
                        <p className="mb-0 text-dark mr-3 d-inline">French</p>
                      </div>
                    </div>

                    <hr />

                    <div className="py-2">
                      <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Social Media</h6>
                      <div className="row">
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Facebook</p>
                          <p className="mb-0">Giftedleggo</p>
                        </div>
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Twitter</p>
                          <p className="mb-0">Giftedleggo</p>
                        </div>
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Instagram</p>
                          <p className="mb-0">Giftedleggo</p>
                        </div>
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Tiktok</p>
                          <p className="mb-0">Giftedleggo</p>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="row py-2">
                      <div className="col-md-12">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Website</h6>
                        <a href="#" className="mb-0 text-dark">Giftedleggo.org</a>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Career &amp; Education */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="1">
                  <h5 className="mb-0  text-gray-900">
                    Career &amp; Education
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="row">

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Other Education</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">School Name</p>
                            <p className="mb-0">Greenspring College</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Anthony, Lagos</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Grade</p>
                            <p className="mb-0">Distinction</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2008</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2014</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>University Education</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">School Name</p>
                            <p className="mb-0">University of Liverpool</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">United Kingdom</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Grade</p>
                            <p className="mb-0">First Class</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2016</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2019</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Secondary Education</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">School Name</p>
                            <p className="mb-0">Greenspring College</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Anthony, Lagos</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Grade</p>
                            <p className="mb-0">Distinction</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2008</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2014</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Primary Education</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">School Name</p>
                            <p className="mb-0">Greenspring College</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Anthony, Lagos</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Grade</p>
                            <p className="mb-0">Distinction</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2002</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2008</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* .Interest */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="2">
                  <h5 className="mb-0  text-gray-900">
                    Interest
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="d-flex py-2">
                      <p className="bg-dark px-3 py-2 mb-0 text-light mr-5 d-inline rounded">Dancing</p>
                      <p className="bg-dark px-3 py-2 mb-0 text-light mr-5 d-inline rounded">Gymnastics</p>
                      <p className="bg-dark px-3 py-2 mb-0 text-light mr-5 d-inline rounded">Sport</p>
                    </div>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Professional Job History */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="3">
                  <h5 className="mb-0  text-gray-900">
                    Professional Job History
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className="row py-3">

                      <div className="col-md-12 py-3 ">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-2 text-muted">Job Title/Role</p>
                            <p className="mb-0 d-inline mr-2">Software Developer</p>
                            <span className="badge badge-success">Present</span>
                          </div>

                          <div className="col-md-4">
                            <p className="mb-2 text-muted">Search Directory</p>
                            <p className="mb-0">Developer</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Yaba, Lagos</p>
                          </div>

                          <div className="col-md-2 pt-4">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">August, 2019</p>
                          </div>
                          <div className="col-md-2 pt-4">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0 d-inline">April, 2020</p>
                          </div>

                          <div className="col-md-8 pt-4">
                            <p className="mb-2 text-muted">Job Description</p>
                            <p className="mb-0 ">Since 1960, Nigeria has been decoding Lorem Ipsum text for its readers, infiltrating its subcultures, observing and analyzing its shifting rhythms, digging up its unreported stories and confronting the city's political leaders. From the beginning... </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Experience &amp; Achievement */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="4">
                  <h5 className="mb-0  text-gray-900">
                    Experience &amp; Achievement
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <div className="row">

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Courses</h6>
                        <div className="row py-4">
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">School Name</p>
                            <p className="mb-0">Udemy</p>
                          </div>
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">Course</p>
                            <p className="mb-0">Digital Marketing</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2008</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2014</p>
                          </div>
                        </div>
                      </div>


                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Organisation</h6>
                        <div className="row py-4">
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Organisation Name</p>
                            <p className="mb-0">Kafy Dance Group</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Position</p>
                            <p className="mb-0">Instructor</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Ajah, Lagos</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Start Date</p>
                            <p className="mb-0">Sept, 2008</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">End Date</p>
                            <p className="mb-0">Sept, 2014</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Publications</h6>
                        <div className="row py-4">
                          <div className="col-md-8">
                            <p className="mb-2 text-muted">Publication Title</p>
                            <p className="mb-0">Nigeria: Looking back on 60 years</p>
                          </div>
                          <div className="col-md-4">
                            <p className="mb-2 text-muted">Date</p>
                            <p className="mb-0">Oct 22. 2019</p>
                          </div>
                          <div className="col-md-12 pt-3">
                            <p className="mb-2 text-muted">Publication Details</p>
                            <p className="mb-0">Since 1960, Nigeria has been decoding Lorem Ipsum text for its readers, infiltrating its subcultures, observing and analyzing its shifting rhythms, digging up its unreported stories and confronting the city's political leaders. From the beginning,</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Honors &amp; Awards</h6>
                        <div className="row py-4">
                          <div className="col-md-5">
                            <p className="mb-2 text-muted">Award Title</p>
                            <p className="mb-0">Grammy Award</p>
                          </div>
                          <div className="col-md-5">
                            <p className="mb-2 text-muted">Award Type</p>
                            <p className="mb-0">Gold</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Year</p>
                            <p className="mb-0">2019</p>
                          </div>
                          <div className="col-md-12 pt-3">
                            <p className="mb-2 text-muted">Award Details</p>
                            <p className="mb-0">Since 1960, Nigeria has been decoding Lorem Ipsum text for its readers, infiltrating its subcultures, observing and analyzing its shifting rhythms, digging up its unreported stories and confronting the city's political leaders. From the beginning,</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Projects</h6>
                        <div className="row py-4">
                          <div className="col-md-5">
                            <p className="mb-2 text-muted">Project Title</p>
                            <p className="mb-0">Dance All</p>
                          </div>
                          <div className="col-md-5">
                            <p className="mb-2 text-muted">Location</p>
                            <p className="mb-0">Victoria Island, Lagos</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Year</p>
                            <p className="mb-0">2018</p>
                          </div>
                          <div className="col-md-12 pt-3">
                            <p className="mb-2 text-muted">Project Details</p>
                            <p className="mb-0">Since 1960, Nigeria has been decoding Lorem Ipsum text for its readers, infiltrating its subcultures, observing and analyzing its shifting rhythms, digging up its unreported stories and confronting the city's political leaders. From the beginning,</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Recommendations */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="5">
                  <h5 className="mb-0  text-gray-900">
                    Recommendations
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <div className="row">

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-4 uppercase" style={{ color: "#8e9092b3" }}>Recommendations Received</h6>
                        <div className="row">
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Recommended by</p>
                            <p className="mb-0">kaffy</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Relationship</p>
                            <p className="mb-0">Instructor</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Position</p>
                            <p className="mb-0">Team Lead</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Event</p>
                            <p className="mb-0">Sparks</p>
                          </div>
                          <div className="col-md-12 pt-4">
                            <p className="mb-2 text-muted">Recommendation Text</p>
                            <p className="mb-0">Awesome guy</p>
                          </div>
                        </div>
                      </div>


                      <div className="col-md-12 py-3 ">
                        <h6 className="mb-4 uppercase" style={{ color: "#8e9092b3" }}>Recommendations Given</h6>
                        <div className="row">
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Recommended by</p>
                            <p className="mb-0">kaffy</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Relationship</p>
                            <p className="mb-0">Instructor</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Position</p>
                            <p className="mb-0">Team Lead</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Event</p>
                            <p className="mb-0">Sparks</p>
                          </div>
                          <div className="col-md-12 pt-4">
                            <p className="mb-2 text-muted">Recommendation Text</p>
                            <p className="mb-0">Awesome guy</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Pages */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="6">
                  <h5 className="mb-0  text-gray-900">
                    Pages
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <div className="row">

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Pages You Created</h6>
                        <div className="row">
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Name</p>
                            <p className="mb-0">Bosun Jones</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Role of User</p>
                            <p className="mb-0">Team Lead</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">No of Followers</p>
                            <p className="mb-0">234</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">No of Employees</p>
                            <p className="mb-0">20</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Date Joined</p>
                            <p className="mb-0">Sept, 2019</p>
                          </div>
                          <div className="col-md-12 pt-4">
                            <p className="mb-2 text-muted">Bio </p>
                            <p className="mb-0">Nice Group </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 py-3 border-bottom">
                        <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Pages You Belong</h6>
                        <div className="row">
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Name</p>
                            <p className="mb-0">Bosun Jones</p>
                          </div>
                          <div className="col-md-3">
                            <p className="mb-2 text-muted">Role of User</p>
                            <p className="mb-0">Team Lead</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">No of Followers</p>
                            <p className="mb-0">234</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">No of Employees</p>
                            <p className="mb-0">20</p>
                          </div>
                          <div className="col-md-2">
                            <p className="mb-2 text-muted">Date Joined</p>
                            <p className="mb-0">Sept, 2019</p>
                          </div>
                          <div className="col-md-12 pt-4">
                            <p className="mb-2 text-muted">Bio </p>
                            <p className="mb-0">Nice Group </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              {/* Groups */}
              <Card className="border-0 mb-5">
                <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="7">
                  <h5 className="mb-0  text-gray-900">
                    Groups
                </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <div className="col-md-12 py-4 border-bottom">
                      <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Groups You Created</h6>
                      <div className="row">
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Name</p>
                          <p className="mb-0">Bosun Jones</p>
                        </div>
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Role of User</p>
                          <p className="mb-0">Team Lead</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">No of Followers</p>
                          <p className="mb-0">234</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">No of Employees</p>
                          <p className="mb-0">20</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">Date Joined</p>
                          <p className="mb-0">Sept, 2019</p>
                        </div>
                        <div className="col-md-12 pt-4">
                          <p className="mb-2 text-muted">Bio </p>
                          <p className="mb-0">Nice Group </p>
                        </div>
                        <div className="col-md-12 pt-4">
                          <p className="mb-2 text-muted">Activities</p>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Posts</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Post section here ...</li>
                              <li className="list-group-item">Post section here ...</li>
                            </ul>
                          </div>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Comments</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Comment section here ...</li>
                              <li className="list-group-item">Comment section here ...</li>
                            </ul>
                          </div>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Likes</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Like section here ...</li>
                              <li className="list-group-item">Like section here ...</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 py-4 border-bottom">
                      <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Groups You Belong</h6>
                      <div className="row">
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Name</p>
                          <p className="mb-0">Bosun Jones</p>
                        </div>
                        <div className="col-md-3">
                          <p className="mb-2 text-muted">Role of User</p>
                          <p className="mb-0">Team Lead</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">No of Followers</p>
                          <p className="mb-0">234</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">No of Employees</p>
                          <p className="mb-0">20</p>
                        </div>
                        <div className="col-md-2">
                          <p className="mb-2 text-muted">Date Joined</p>
                          <p className="mb-0">Sept, 2019</p>
                        </div>
                        <div className="col-md-12 pt-4">
                          <p className="mb-2 text-muted">Bio </p>
                          <p className="mb-0">Nice Group </p>
                        </div>
                        <div className="col-md-12 pt-4">
                          <p className="mb-2 text-muted">Activities</p>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Posts</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Post section here ...</li>
                              <li className="list-group-item">Post section here ...</li>
                            </ul>
                          </div>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Comments</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Comment section here ...</li>
                              <li className="list-group-item">Comment section here ...</li>
                            </ul>
                          </div>
                          <div className="py-3">
                            <p className="mb-3" style={{ color: "#8e9092b3" }}>Likes</p>
                            <ul className="list-group mb-0">
                              <li className="list-group-item">Like section here ...</li>
                              <li className="list-group-item">Like section here ...</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>

            {/* <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
              Personal Info
                </div> */}
            {/* <div className="px-5">
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="First Name" textBody="Lagbaja" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Last Name" textBody="Lagbaja" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Languages" textBody="Lagbaja" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Birthday" textBody="16/3/2020" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Phone Number" textBody="0810 333 4232" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Gender" textBody="Male" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Address" textBody="2, Lagos Road" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="City" textBody="1Ikeja" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Hometown" textBody="Lagbaja" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Living in" textBody="16/3/2020" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Facebook" textBody="Giftedleggo" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Twitter" textBody="Giftedleggo" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mb-10">
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Instagram" textBody="Giftedleggo" />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField textTitle="Tictok" textBody="Giftedleggo" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="uppercase">bio</h4>
                <InputTextArea className="outline-none h-20 w-full" />
              </div>
            </div> */}


            {/* Career and education section */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Career &amp; Education
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Interest Section */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Interest
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Professional Job History */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Professional Job History
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Experience & Achievement */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Experience & Achievement
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}


            {/* Recommendations */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Recommendations
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Events */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Events
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Pages */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Pages
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}

            {/* Groups */}

            {/* <section className="mb-20">
              <div className="px-5 mb-5 border-b-2 border-gray-200 w-full h-12 text-xl text-gray-900">
                Groups
                </div>
              <div className="px-5">
                <div>
                  <div className="flex mb-12">
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Event Name" textBody="Lagbaja" />
                    </div>
                    <div className="w-1/2 h-12">
                      <TextField textTitle="Role" textBody="Performer" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Professional Certification Level"
                      textBody="Performer"
                    />
                  </div>
                </div>
              </div>
            </section> */}



            {/* <div className="grid grid-cols-12 gap-4 row-gap-5 mx-8">
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Photos</span>
                  <div className="intro-y flex justify-center col-span-12 items-center">
                    <Link className="text-red-700 px-4 rounded">View All</Link>
                  </div>
                </div>
                <div class="">
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 mr-2 image-fit">
                    1
                  </div>
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 m-2 image-fit">
                    2
                  </div>
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 ml-2 image-fit">
                    3
                  </div>
                </div>
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Videos</span>
                  <div className="intro-y flex justify-center col-span-12 items-center">
                    <Link className="text-red-700 px-4 rounded">View All</Link>
                  </div>
                </div>
                <div class="">
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 mr-2 image-fit">
                    1
                  </div>
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 m-2 image-fit">
                    2
                  </div>
                  <div class="inline-block w-32 text-gray-700 text-center bg-gray-400 rounded-md h-32 ml-2 image-fit">
                    3
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="side-nav__devider my-6 border-t-2"></div> */}

            {/* <div className="px-5">
              <div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Companies (Member of a group or page)"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Role, Joined"
                      textBody="Member, 21/6/2020"
                    />
                  </div>
                </div>
                <div className="flex mb-12">
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Submitted Applications"
                      textBody="Lagbaja"
                    />
                  </div>
                  <div className="w-1/2 h-12">
                    <TextField
                      textTitle="Role, Date, submitted"
                      textBody="Lagbaja"
                    />
                  </div>
                </div>
              </div>
            </div> */}

          </div>
          <div className="intro-y col-span-12 flex items-center m-10 pr-16">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
    </div >
  );
}
