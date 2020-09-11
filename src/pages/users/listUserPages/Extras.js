import React from "react";
import { useHistory, Link } from "react-router-dom";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";
import CustomTable from "../../../components/table/CustomTable";
import { Accordion, Card } from "react-bootstrap"
import AlbumImage from "../../../assets/dist/images/preview-1.jpg"

export default function Extras() {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <div className="intro-y box py-4">
        <Accordion defaultActiveKey="0">
          {/* Media */}
          <Card className="border-right-0 border-left-0 border-top-0 border-bottom-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="0">
              <h5 className="mb-0  text-gray-900">
                Media
                </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">

                  <div className="col-md-12 py-3 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}> All Media Album</h6>
                    <div className="row py-4">
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Album Name</p>
                        <p className="mb-0">Photo 001.jpeg</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Tagged Event</p>
                        <p className="mb-0">Spark Damce All</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Ikeja, Lagos</p>
                      </div>


                      {/* invisible row, start here */}

                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Date</p>
                        <p className="mb-0">August 23rd, 2020 </p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total Tagged users</p>
                        <p className="mb-0">220</p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total likes </p>
                        <p className="mb-0">1500</p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total Comment</p>
                        <p className="mb-0">210</p>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-12 py-3 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}> Tagged Media Album</h6>
                    <div className="row py-4">
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Album Name</p>
                        <p className="mb-0">Photo 001.jpeg</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Tagged Event</p>
                        <p className="mb-0">Spark Damce All</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Ikeja, Lagos</p>
                      </div>


                      {/* invisible row, start here */}

                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Date</p>
                        <p className="mb-0">August 23rd, 2020 </p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total Tagged users</p>
                        <p className="mb-0">220</p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total likes </p>
                        <p className="mb-0">1500</p>
                      </div>
                      <div className="col-md-3 pt-3">
                        <p className="mb-2 text-muted">Total Comment</p>
                        <p className="mb-0">210</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 py-3 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Single Media Album</h6>

                    <div className="py-4">
                      <div className="pb-3">
                        <p className="mb-2 text-muted">Tagged users</p>
                        <div className="row">
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                        </div>
                      </div>

                      <div className="pb-3">
                        <p className="mb-2 text-muted">Comments by users</p>
                        <div className="row">
                          <p className="col-md-12 mb-0">Bosun Jones</p>
                          <p className="col-md-12 mb-0">Bosun Jones</p>
                        </div>
                      </div>

                      <div className="pb-3">
                        <p className="mb-2 text-muted">Users that liked album videos and pictures</p>
                        <div className="row">
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                          <p className="col-md-2 mb-0">Bosun Jones</p>
                        </div>
                      </div>

                    </div>

                  </div>


                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          {/* Follower &amp; Following */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="1">
              <h5 className="mb-0  text-gray-900">
                Follower &amp; Following
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

          {/* Events */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="2">
              <h5 className="mb-0  text-gray-900">
                Events
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

          {/*  Content on Demand */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="3">
              <h5 className="mb-0  text-gray-900">
                Content on Demand
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

          {/* Messages */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="4">
              <h5 className="mb-0  text-gray-900">
                Messages
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

          {/* Profile viewers list */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="5">
              <h5 className="mb-0  text-gray-900">
                Profile viewers list
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

          {/* Follow Request */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="6">
              <h5 className="mb-0  text-gray-900">
                Follow Request
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

          {/* Bookings */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="7">
              <h5 className="mb-0  text-gray-900">
                Bookings
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

          {/* Promotions (Job & COD) */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="8">
              <h5 className="mb-0  text-gray-900">
                Promotions (Job & COD)
                </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
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


      </div>

    </div>
  );
}
