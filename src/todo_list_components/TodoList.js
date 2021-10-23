import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import Todo from "./Todo";
import Typography from "@mui/material/Typography";

export default function TodoList() {
  return (
    <React.Fragment>
      <Card style={{ width: 400 }}>
        <Typography component="div" variant="h3">
          TodoList Name
        </Typography>
        <List>
          <Todo defaultChecked={false} checked name="FooBar" />
          <Todo defaultChecked={false} checked name="FooBar" />
        </List>
      </Card>
    </React.Fragment>
  );
}
