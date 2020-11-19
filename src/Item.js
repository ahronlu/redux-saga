import React from "react";
import { Image, Icon, Card } from "semantic-ui-react";
import moment from "moment";

const Item = ({ x, i }) => {
  return (
    <Card key={i}>
      <Image src={x.picture.large} wrapped />
      <Card.Content>
        <Card.Header>
          {x.name.first} {x.name.last}
        </Card.Header>
        <Card.Description>
          <Icon name="mail" />
          {x.email.slice(0, 15) + "..."}
          <br />
          <Icon name="home" />
          {x.location.state}
          <br />
          <Icon name="phone" />
          {x.phone}
          <br />
          <Icon name="birthday" />
          {moment(x.dob.date).format("DD/MM/YY")}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Item;
