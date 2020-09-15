import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";
import CustomTable from "../../../components/table/CustomTable";
import { Accordion, Card } from "react-bootstrap"
import AlbumImage from "../../../assets/dist/images/preview-1.jpg"
import ProfileModal from "../../../components/ProfileModal"





export default function Extras() {

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
  }
  const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
  }

  // modal function for follower
  

  
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
                
              <p onClick={toggle}>All Follower</p>
                <div className="row">

                  <div className="col-md-12 py-4 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Followers</h6>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="mb-2 text-muted">Username</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">User Category</p>
                        <p className="mb-0">Pro</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Lagos, Nigeria</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Date Followed</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Likes</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Post</p>
                        <p className="mb-0">232</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Follower</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Following</p>
                        <p className="mb-0">203</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 py-4 ">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Following</h6>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="mb-2 text-muted">Username</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">User Category</p>
                        <p className="mb-0">Pro</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Lagos, Nigeria</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Date Followed</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Likes</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Post</p>
                        <p className="mb-0">232</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Follower</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Total Following</p>
                        <p className="mb-0">203</p>
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
                <div className="row">

                  <div className="col-md-12 py-4 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Event Organized by you</h6>
                    <div className="row">
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Event Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Name</p>
                        <p className="mb-0">Emerge: Believe Become Emerge</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Offline</p>
                      </div>
                      <div className="col-md-4">
                        <p className="mb-2 text-muted">Address</p>
                        <p className="mb-0">123, Lagos Street, Lagos State, Nigeria</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Start End</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Start End</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      {/* Recurring event should be conditional */}
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Reocurring Event</p>
                        <p className="mb-0">Yes (Weekly)</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Price</p>
                        <p className="mb-0">Free</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Event Description</p>
                        <p className="mb-0">Emerge: Believe Become Emerge</p>
                      </div>
                      <div className="col-md-12">
                        <p className="mb-2 mt-4 text-muted">Attendees</p>
                        <div className="row">
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-md-12 py-4">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Attending</h6>
                    <div className="row">
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Event Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Name</p>
                        <p className="mb-0">Emerge: Believe Become Emerge</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Offline</p>
                      </div>
                      <div className="col-md-4">
                        <p className="mb-2 text-muted">Address</p>
                        <p className="mb-0">123, Lagos Street, Lagos State, Nigeria</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Start End</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Start End</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      {/* Recurring event should be conditional */}
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Reocurring Event</p>
                        <p className="mb-0">Yes (Weekly)</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Price</p>
                        <p className="mb-0">Free</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 mt-4 text-muted">Event Description</p>
                        <p className="mb-0">Emerge: Believe Become Emerge</p>
                      </div>
                      <div className="col-md-12">
                        <p className="mb-2 mt-4 text-muted">Attendees</p>
                        <div className="row">
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                
                
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
                <div className="row">

                  <div className="col-md-12 py-4 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>All Content on Demand</h6>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Name</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-1">
                        <p className="mb-2 text-muted">Rating</p>
                        <p className="mb-0">4/5</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Price</p>
                        <p className="mb-0">2000</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Total Audience</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 mt-4 text-muted">Date Last Updated</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-10">
                        <p className="mb-2 mt-4 text-muted">Description</p>
                        <p className="mb-0">Content on Demand Description will show here</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 py-4 border-bottom">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Single Content on Demand</h6>
                    <div className="row">
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">COD Name</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-1">
                        <p className="mb-2 text-muted">Rating</p>
                        <p className="mb-0">4/5</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Price</p>
                        <p className="mb-0">2000</p>
                      </div>
                      {/* <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div> */}
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-5">
                        <p className="mb-2 mt-4 text-muted">Description</p>
                        <p className="mb-0">Content on Demand Description will show here</p>
                      </div>

                      <div className="col-md-6">
                        <p className="mb-2 mt-4 text-muted">Module List</p>
                        <p className="mb-0">2032</p>
                      </div>
                      <div className="col-md-6">
                        <p className="mb-2 mt-4 text-muted">Audience List</p>
                        <div className="row">
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                          <div className="col-3">
                            <img src={AlbumImage} width="30" height="30" className="rounded mr-2 d-inline" />
                            <span>Bosun Jones</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          {/* Jobs */}
          <Card className="border-0 mb-5">
            <Accordion.Toggle className="border-bottom-0" role="button" as={Card.Header} eventKey="4">
              <h5 className="mb-0  text-gray-900">
                Jobs
                </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>

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

                  <div className="col-md-12 py-4">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Profile Viewer List</h6>
                    <div className="row">
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Name</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">User Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Date Checked</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Followers</p>
                        <p className="mb-0">222</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Following</p>
                        <p className="mb-0">223</p>
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

                  <div className="col-md-12 py-4">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Follower Requests</h6>
                    <div className="row">
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Thumbnail</p>
                        <img src={AlbumImage} width="60" height="60" className="rounded" />
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Name</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">User Category</p>
                        <p className="mb-0">Performance</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Date Request was Sent</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Followers Number</p>
                        <p className="mb-0">222</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Following Number</p>
                        <p className="mb-0">223</p>
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
                <div className="row">

                  <div className="col-md-12 py-4">
                    <h6 className="mb-3 uppercase" style={{ color: "#8e9092b3" }}>Bookings</h6>
                    <div className="row">
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Event Name</p>
                        <p className="mb-0">Bosun Jones</p>
                      </div>
                      <div className="col-md-3">
                        <p className="mb-2 text-muted">Location</p>
                        <p className="mb-0">Lagos, Nigeria</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Start Date</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">End Date</p>
                        <p className="mb-0">Sept, 2014</p>
                      </div>
                      <div className="col-md-2">
                        <p className="mb-2 text-muted">Numbers of Days</p>
                        <p className="mb-0">222</p>
                      </div>
                      <div className="col-md-12">
                        <p className="mb-2 text-muted">Special Note</p>
                        <p className="mb-0">Special Note text will appear here...</p>
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

    {/* Modal for Event */}
    <ProfileModal
    modal={modal}
    modalHeader={"My Working Modal"}
    modalBody={"Modal Body will be here"}
    />



    </div>
  );
}
