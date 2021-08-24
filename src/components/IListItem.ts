import React from "react";

export type IListItem = {
  primary: string,
  secondary?: string,
  tertiary?: string,
  action?: React.ReactNode
}
