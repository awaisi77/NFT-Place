import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
export class CardComponent extends Component<any, any> {
  render() {
    return (
      <Card className="custom-card" style={{ width: "18rem" }}>
        <div style={{ textAlign: "end", margin: 10 }}>
          <BsHeart className="font-icon"></BsHeart>
        </div>
        {this.props.imgUrl.length > 0 && (
          <div
            style={{
              textAlign: "center",
              display: "table",
              minHeight: "180px",
              maxHeight: "180px",
              maxWidth: "286px",
            }}
          >
            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
              <img
                className="card-img-bottom1"
                style={{ maxHeight: "180px", maxWidth: "286px" }}
                src={this.props.imgUrl}
                alt=""
              />
            </div>
          </div>
        )}
        {this.props.isIconRequired && (
          <div
            style={{
              textAlign: "center",
              display: "table",
              minHeight: "180px",
              maxHeight: "180px",
              maxWidth: "286px",
            }}
          >
            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
              <div
                className="card-img-bottom1"
                style={{ maxHeight: "180px", maxWidth: "286px" }}
              >
                <MdStoreMallDirectory
                  className="font-icon"
                  style={{ height: "80px", width: "80px" }}
                ></MdStoreMallDirectory>
              </div>
            </div>
          </div>
        )}
        {/* <Card.Img variant="bottom" src="https://picsum.photos/50/50" /> */}

        <Card.Body>
          <div
            style={{ width: "60%", display: "inline-block", textAlign: "left" }}
          >
            <div className="card-title-small">{this.props.titleSmall}</div>
            <div className="card-title">{this.props.title}</div>
          </div>
          <div
            style={{
              width: "40%",
              display: "inline-block",
              textAlign: "right",
            }}
          >
            <div className="card-title-small">{"Price"}</div>
            <div
              className="card-title"
              style={{ fontSize: "15px", fontWeight: 700 }}
            >
              {this.props.price}
            </div>
          </div>
          <div className="card-footer-custom">{"5 minutes left"}</div>

          {/* <Card.Title>{this.props.title}</Card.Title> */}
          {/* {this.props.isButtonRequired && (
            <div style={{ margin: "15px 0", textAlign: "center" }}>
              <Button style={{ width: "160px" }} variant="primary">
                Create
              </Button>
            </div>
          )}
          {this.props.isLinkRequired && (
            <a style={{ fontSize: "14px" }} href="/">
              or add an existing contract
            </a>
          )} */}

          {/* <Card.Text>Some quick</Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
