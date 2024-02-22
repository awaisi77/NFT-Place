import React, { Component } from "react";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import { useParams } from "react-router";
import { Card, Button } from "react-bootstrap";

export default class Asset extends React.Component<any, any> {
  componentDidMount = () => {
    console.log(this.props.match.params.id);
  };
  render() {
    return (
      <div>
        <div
          className="row"
          style={{ padding: 20, margin: "40px 60px 40px 60px" }}
        >
          <div className="col-md-5">
            <div
              style={{
                textAlign: "center",
                display: "table",
                minHeight: "550px",
                maxHeight: "550px",
                maxWidth: "95%",
                minWidth: "95%",
                border: " 1px solid #dcdcdc",
              }}
            >
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <img
                  className="card-img-bottom1"
                  style={{ maxHeight: "500px", maxWidth: "92%" }}
                  src="https://picsum.photos/600/600"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "Avenir Next,Avenir,Avenir Next Local,sans-serif",
                }}
                href="Verified Collection"
              >
                Verified Collection <BsInfoCircle></BsInfoCircle>
              </a>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2>Corgi #{this.props.match.params.id}</h2>
            </div>

            <div style={{ marginTop: "40px" }}>
              <div className="d-inline-block assets-metadata">
                <BsHeart></BsHeart> Owned by HugMe
              </div>
              <div className="d-inline-block ml-4 assets-metadata">
                <BsHeart></BsHeart> 40 views
              </div>

              <div className="d-inline-block ml-4 assets-metadata">
                <BsHeart></BsHeart> 50 favourites
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Card style={{ background: "#FBFDFF" }}>
                <Card.Body style={{ padding: "15px" }}>
                  <div className="assets-metadata">Current Price</div>
                  <Card.Text>
                    <div
                      className="d-inline-block"
                      style={{ verticalAlign: "middle" }}
                    >
                      <img src="https://picsum.photos/30/30" alt="" />
                    </div>

                    <div
                      className="d-inline-block ml-2"
                      style={{ verticalAlign: "middle" }}
                    >
                      {" "}
                      <h2>{this.props.location.state.price} </h2>{" "}
                    </div>
                    <div className="d-inline-block ml-2 assets-metadata">
                      {" "}
                      ($1,023)
                    </div>
                  </Card.Text>
                  <Button
                    style={{ paddingRight: "10%", paddingLeft: "10%" }}
                    variant="primary"
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card>
                <Card.Header>Description</Card.Header>
                <Card.Body>
                  <div className="assets-metadata">Created by HugMe</div>
                  <Card.Text>
                    100% Purebred Crypto Corgi. Attributes derived from block
                    number 12099625. It was number 2778 to be claimed.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
