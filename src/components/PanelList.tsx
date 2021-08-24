import React from "react"
import {Box, Paper} from "@material-ui/core";

export type PanelListProps = {
  title: string,
  children?: React.ReactNode
}

export function PanelList(props: PanelListProps) {
  return (
    <Paper>
      <Box p={3}>
        <h1>{props.title}</h1>
        {props.children}
      </Box>
    </Paper>
  )
}
