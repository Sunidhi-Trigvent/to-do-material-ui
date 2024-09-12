import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function OutlinedCard({ task, handleRemove, handleUpdate }) {
  return (
    <Box sx={{ minWidth: 275, mb: 2, mt: 5 }}>
      {task?.map((item, i) => (
        <Card variant="outlined">
          <CardContent>
            <Typography>{item}</Typography>
          </CardContent>
          <Button variant="contained" onClick={() => handleRemove(i)}>
            Remove
          </Button>

          <Button variant="contained" onClick={() => handleUpdate(i)}>
            Update
          </Button>
        </Card>
      ))}
    </Box>
  );
}
