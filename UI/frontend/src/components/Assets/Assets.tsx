import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Card/CardComponent";

export class Assets extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      arr: [],
    };
  }
  componentDidMount = () => {
    let temp = [];
    for (var i = 0; i < 20; i++) {
      temp.push(i);
    }
    this.setState({ arr: temp });
  };
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          {this.state.arr.map((c: any, i: any) => {
            return (
              <div
                style={{
                  display: "inline-block",
                  padding: 10,
                  textAlign: "center",
                }}
              >
                <Link
                  to={{ pathname: `/assets/${i + 1}`, state: { price: 0.002 } }}
                >
                  <CardComponent
                    titleSmall="mycrypto"
                    title="NFTArtFinance"
                    price="0.002"
                    imgUrl="https://picsum.photos/286/180"
                  ></CardComponent>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Assets;
