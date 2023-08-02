              <Container>
                <Stack gap={3}>
                  <Row>
                    {imageData.map((image) => (
                      <Col xs={6} md={4} key={image.id}>
                        <motion.div
                          variants={colVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5 }}
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
                            />
                            {isHovered === image.id && (
                              <motion.div
                                variants={shutterVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.8 }}
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  height: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  background: "rgba(0, 0, 0, 0.8)",
                                  color: "#fff",
                                  textAlign: "center",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  padding: "20px",
                                }}
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