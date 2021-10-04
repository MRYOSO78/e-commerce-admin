import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function InnovationCard({ SampleContent }) {
  return (
    <Card>
      <CardHeader
        title={SampleContent.title}
        subheader={SampleContent.status}
      />
      <CardMedia component="img" height="194" image={SampleContent.img} />
      <CardContent>
        <Typography>{SampleContent.description}</Typography>

        <Typography>
          Innovator: <strong>{SampleContent.name}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          href="/innovationSpecific"
        >
          View Item
        </Button>
      </CardActions>
    </Card>
  );
}
