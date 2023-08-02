import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import { motion } from "framer-motion";

function ImageModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="font-livvic modal-heading">
        {/* eslint-disable-next-line react/prop-types */}
        {props.heading}
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="modal-image-container">
          {/* eslint-disable-next-line react/prop-types */}
          <Image src={props.imageSrc} className="modal-image" />
        </div>
        <div className="modal-image-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            nesciunt ea deleniti.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* eslint-disable-next-line react/prop-types */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const imageData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4038917/pexels-photo-4038917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Image 1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3811011/pexels-photo-3811011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Image 2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3810967/pexels-photo-3810967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Image 3",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1317374/pexels-photo-1317374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Image 4",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Image 5",
  },
];

function RootComponent() {
  const [isHovered, setIsHovered] = useState(null);
  const [activeTab, setActiveTab] = useState("Events");
  const [modalShow, setModalShow] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const colVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hovered: { scale: 1.05 },
    notHovered: { scale: 1 },
  };

  const shutterVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 0.8, y: 0 },
  };

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  const tabVariants = {
    active: {
      opacity: 1,
      display: "block",
      transition: {
        opacity: { duration: 0.3 },
      },
    },
    inactive: {
      opacity: 0,
      display: "none",
      transition: {
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <React.StrictMode>
      <>
        {modalShow && (
          <ImageModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            heading="Event Info"
            imageSrc={imageUrl}
          />
        )}

        <div>
          <div className="gallery-filter-tab">
            <Tabs
              variant="underline"
              defaultActiveKey="Events"
              className="mb-3"
              activeKey={activeTab}
              onSelect={handleTabChange}
            >
              <Tab eventKey="Events" title="Events">
                <motion.div
                  variants={tabVariants}
                  animate={activeTab === "Events" ? "active" : "inactive"}
                  className="tab-content"
                >
                  <Container>
                    <Stack gap={3}>
                      <Row>
                        {imageData.map((image) => (
                          <Col
                            xs={6}
                            md={3}
                            key={image.id}
                            className="mb-2 mt-3"
                          >
                            <motion.div
                              variants={colVariants}
                              initial="hidden"
                              animate="visible"
                              transition={{ duration: 0.5 }}
                              onClick={() => {
                                setModalShow(true);
                                setImageUrl(image.src);
                              }}
                            >
                              <motion.div
                                variants={imageVariants}
                                whileHover="hovered"
                                whileTap="hovered"
                                onMouseEnter={() => handleMouseEnter(image.id)}
                                onMouseLeave={handleMouseLeave}
                                style={{ position: "relative" }}
                              >
                                <Image
                                  className="gallery-images"
                                  src={image.src}
                                  rounded
                                  style={{ objectFit: "cover" }}
                                />
                                {isHovered === image.id && (
                                  <motion.div
                                    variants={shutterVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.8 }}
                                    className="motion-div-style"
                                  >
                                    <div>
                                      <p>{image.name}</p>
                                    </div>
                                  </motion.div>
                                )}
                              </motion.div>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>
                    </Stack>
                  </Container>
                </motion.div>
              </Tab>
              <Tab eventKey="Campus" title="Campus">
                <motion.div
                  variants={tabVariants}
                  animate={activeTab === "Campus" ? "active" : "inactive"}
                  className="tab-content"
                >
                  Campus
                </motion.div>
              </Tab>
              <Tab eventKey="Faculty" title="Faculty">
                <motion.div
                  variants={tabVariants}
                  animate={activeTab === "Faculty" ? "active" : "inactive"}
                  className="tab-content"
                >
                  Faculty
                </motion.div>
              </Tab>
              <Tab eventKey="Academic" title="Academic">
                <motion.div
                  variants={tabVariants}
                  animate={activeTab === "Academic" ? "active" : "inactive"}
                  className="tab-content"
                >
                  Academic
                </motion.div>
              </Tab>
              <Tab eventKey="Training" title="Training">
                <motion.div
                  variants={tabVariants}
                  animate={activeTab === "Training" ? "active" : "inactive"}
                  className="tab-content"
                >
                  Training
                </motion.div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);
