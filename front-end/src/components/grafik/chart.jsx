"use client"

import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import React, { useLayoutEffect } from "react"

const Chart = ({ props }) => {
  console.log("props now", props)
  useLayoutEffect(() => {
    let root = am5.Root.new(props)

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)])

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    )

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}))
    cursor.lineY.set("visible", false)

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    })

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    })

    xRenderer.grid.template.setAll({
      location: 1,
    })

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    )

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    })

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    )

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    )

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    })
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target))
    })

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target))
    })

    // Set data
    let data = [
      // {
      //   country: "Total Beasiswa",
      //   value: 200,
      // },
      // {
      //   country: "Hasil Pendaftaran",
      //   value: 100,
      // },
      {
        country: "Japan",
        value: 1309,
      },
      {
        country: "Germany",
        value: 1322,
      },
      {
        country: "UK",
        value: 1122,
      },
      {
        country: "France",
        value: 1114,
      },
      {
        country: "India",
        value: 984,
      },
      {
        country: "Spain",
        value: 711,
      },
      {
        country: "Netherlands",
        value: 982,
      },
      {
        country: "South Korea",
        value: 1023,
      },
      {
        country: "Canada",
        value: 927,
      },
    ]

    xAxis.data.setAll(data)
    series.data.setAll(data)

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000).then((x) => {
      root._logo?.hide()
      root._handleLogo = () => {
        console.log("-")
      }
    })

    return () => {
      root.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={props}
        style={{
          width: "50%",
          height: "80vh",
          margin: "50px auto",
        }}
      ></div>
    </>
  )
}

export default Chart
