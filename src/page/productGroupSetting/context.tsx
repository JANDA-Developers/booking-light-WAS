import React from "react";
import { IProductGroupWrapContext } from "./ProductGorupSettingWrap";

interface IGroupContext extends IProductGroupWrapContext { }

const defaultContext: any = {}
export const GroupContext = React.createContext<IGroupContext>(defaultContext);
