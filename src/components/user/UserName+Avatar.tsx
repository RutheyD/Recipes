import { Avatar, Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../AppLayout";



function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0]}`,
  };
}
const UserNameAvatar = () => {

  const context = useContext(UserContext)
  let firstName: string = '', lastName: string = '';
  if (context) {
    firstName = context.user.firstName
    lastName = context.user.lastName
  }

  return (

    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <Avatar {...stringAvatar(firstName.toUpperCase())} />
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>Hello {firstName}!</Typography>

    </Box>

  );




}
export default UserNameAvatar