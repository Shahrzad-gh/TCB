/*eslint-disable*/
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Icon from "@material-ui/icons/Refresh"
import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import UserCard from "./UserCard";
import axios from "axios";
import { setConstantValue } from "typescript";
import { extend } from "chartist";

const useStyles = makeStyles(styles);

export default function Icons(){


  const [users, setUsers] = React.useState([]);
  let value = "";

  const handleRefresh = () => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    })
    .then(({ data: users }) => {
      setUsers(users);
    })
      .catch((error) => {
        console.log("something wrong", error);
      });
  };

    const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>کالاهای سفارشی</h4>
            <p className={classes.cardCategoryWhite}>
              لسیت کالاهای سفارش داده شده
            </p>
            <Icon onClick={handleRefresh}></Icon>
          </CardHeader>
          <CardBody>
          <GridItem sm={12} md={12}>
          {users && users.map((user) => (
           <UserCard key={user.id} user={user} /> ))}
          </GridItem>          
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
