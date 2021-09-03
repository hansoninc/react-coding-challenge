import {ReactNode} from "react";

export type IListItem = {
  id: string,
  primary: string,
  secondary?: string,
  tertiary?: string,
  action?: ReactNode
}
