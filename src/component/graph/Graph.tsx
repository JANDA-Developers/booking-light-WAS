import { isEmpty } from "@janda-com/front";
import React from "react"
import { ChartComponentProps, ChartData, Doughnut, Line } from "react-chartjs-2";
import * as chartjs from "chart.js";
import { IGraphViewMode } from "./components/ViewIcons";
import { getStaticColors } from "./helper";
import _ from "lodash";
import JDtable, { JDcolumn } from "../table/Table";

const defaultDataSets: chartjs.ChartData = {
  labels: ['데이터가 존재하지 않습니다.'],
  datasets: [
    {
      data: [1],
      backgroundColor: "#CFCFCF",
      hoverBackgroundColor: "#b8b8b8"
    }
  ]
};

//Original만 사용하기떄문에 Empty {}
type TType = {
}

export interface IJDgrpahProps extends ChartComponentProps {
  columns?: JDcolumn<TType>[]
  data: chartjs.ChartData
  viewMode: IGraphViewMode;
}


const JDgraph: React.FC<IJDgrpahProps> = ({ data, viewMode, columns, ...prop }) => {

  const dataset: chartjs.ChartData = isEmpty(data) ? defaultDataSets : data;
  const dataLength = dataset.datasets?.[0].data?.length || 0;


  const defaultColumns: JDcolumn<any>[] = [
    {
      Header: "구분",
      accessor: "data",
      Cell: ({ index }) => {
        return <div>{dataset.labels?.[index || 0]}</div>;
      }
    },
    {
      Header: "값",
      accessor: "data",
      Cell: ({ original }) => {
        return <div>{original}</div>;
      }
    }
  ];


  // 각 그래프 형태에따라 데이터셋 변화
  const graphCustumByViewMode: ChartData<Chart.ChartData> = viewMode === IGraphViewMode.line
    ? {
      datasets: [{
        borderColor: "rgba(75,192,192,1)",
      }]
    }
    : {};

  // 그래프 데이터
  const graphCustum: ChartData<Chart.ChartData> = {
    datasets: [
      {
        fill: false,
        backgroundColor: getStaticColors(dataLength),
        hoverBackgroundColor: getStaticColors(dataLength, {
          light: true
        })
      }
    ]
  };

  dataset.datasets?.forEach((ds, index) => {
    ds.label = dataset.labels?.[index] as any || ""
  })
  const cloneData = _.cloneDeep(dataset)
  _.merge(cloneData, graphCustum)
  _.merge(cloneData, graphCustumByViewMode)


  switch (viewMode) {
    case "doughnut":
      return <Doughnut data={cloneData} {...prop} />;
    case "line":
      return <Line data={cloneData} {...prop} />;
    case "list":
      return (
        <JDtable
          data={cloneData.datasets?.[0].data || []}
          columns={columns || defaultColumns}
        />
      );
    default:
      return <div />;
  }
}

export default JDgraph;
































