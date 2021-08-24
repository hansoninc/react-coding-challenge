import React from "react";

export type IListItem = {
  id: string,
  primary: string,
  secondary?: string,
  tertiary?: string,
  action?: React.ReactNode
}
