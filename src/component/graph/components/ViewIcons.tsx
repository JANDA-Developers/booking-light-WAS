
import { JDicon } from "@janda-com/front";
import { ICONPROP } from "@janda-com/front/dist/components/icons/Icons";
import React from "react";

export enum IGraphViewMode {
  list = "list",
  line = "line",
  doughnut = "doughnut"
}

interface Iprops {
  setViewMode: React.Dispatch<React.SetStateAction<IGraphViewMode>>;
  viewMode: IGraphViewMode;
  iconProps?: ICONPROP;
}

const StaticIcons: React.FC<Iprops> = ({
  setViewMode,
  viewMode,
  iconProps
}) => {
  return (
    <div className="statistic__iconsWrap">
      <JDicon
        onClick={() => {
          setViewMode(IGraphViewMode.list);
        }}
        selected={viewMode === "list"}
        hover
        icon="addCircle"
        {...iconProps}
      />
      <JDicon
        onClick={() => {
          setViewMode(IGraphViewMode.line);
        }}
        selected={viewMode === IGraphViewMode.line}
        hover
        icon="addCircle"
        {...iconProps}
      />
      <JDicon
        onClick={() => {
          setViewMode(IGraphViewMode.doughnut);
        }}
        selected={viewMode === IGraphViewMode.doughnut}
        hover
        icon="addCircle"
        {...iconProps}
      />
    </div>
  );
};

export default StaticIcons;
