import React, { Component } from "react";

import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "hats"
        },
        {
          id: 2,
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: ""
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: ""
        },
        {
          id: 4,
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          linkUrl: ""
        },
        {
          id: 5,
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSection }) => (
          <MenuItem key={id} {...otherSection} />
        ))}
      </div>
    );
  }
}

export default Directory;
