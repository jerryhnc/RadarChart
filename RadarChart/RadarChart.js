// 12:
define(["jquery", "qlik", "./libraries/d3.v4.min", "css!./RadarChart.css", "./initialproperties", "./properties"],
    function ($, qlik, d3, css, initprops, props) {
        "use strict";
        return {
            initialProperties: initprops,
            definition: props,
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },
            paint: function ($element, layout) {
                //console.log("> paint");
                var self = this;
                console.log('Hi')
                var hypercube = layout.qHyperCube;
                console.log(hypercube);

                //Create data array using the map method
                var data =
                    hypercube.qMeasureInfo.map(function (qData, index) {
                        return hypercube.qDataPages[0].qMatrix.map(function (qData2, index2) {
                            console.log("index: ", index)
                            return {

                                "dValues": qData2[0].qText,
                                "mValues": qData2[index + 1].qNum,
                            }
                        });
                    })

                var dLabel = hypercube.qDimensionInfo[0]['qFallbackTitle'],
                    mLabel = hypercube.qMeasureInfo[0]['qFallbackTitle'];

                //console.log(layout);
                //console.log(qlik);
                console.log(hypercube);
                console.log(data);
                //debugger;

                //definition of margins (set to 0 on the template) and height/width variables
                var margin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };

                var width = $element.width() - margin.left - margin.right;
                var height = $element.height() - margin.top - margin.bottom;

                //Assign a unique ID to the $element wrapper
                var id = "ID_D3_" + layout.qInfo.qId;
                $element.attr("id", id);
                //Empty the extension content
                $("#" + id).empty();


                //-------------------------------------------------------              
                // START d3 code
                //-------------------------------------------------------

                // Common steps for d3 code integration:
                //• 1 - Paste the css into the .css file 
                //• 2 - Paste the d3 code into this section
                //• 3 - on the first line of code, in define(["./libraries/d3.v4.min"]) 
                //      change the d3 library version according to the required d3 library version used
                //      version 4 is loaded by default on this template - use "d3.v3.min" OR "d3.v4.min"
                //• 4 - Remove the d3 data loading function (search for csv in the code)
                //• 5 - replace hardcoded dimensions/measures names with "dValues" and "mValues"
                //• 6 - replace the svg select statement with the below to create a new svg and assigning width/height


                /* //SNIPPET CODE FOR INITIAL D3 SVG
                var svg = d3.select("#" + id)
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom);
                */


                /* //SNIPPET CODE FOR SELECTIONS
                    .on('click', function (d) {

                        if (layout.prop.SelectionMode == "q") {
                            self.backendApi.selectValues(0, [d.dIndex], true); //Quick Selection
                        } else {
                            $(this).toggleClass("selected");
                            $(".bar").not(".selected").addClass("notSelected");
                            $(".bar.selected").removeClass("notSelected");

                            self.selectValues(0, [d.dIndex], true); //Confirm Selection Selection
                        }
                    })

                /* //SNIPPET CODE FOR TOOLTIP
                 .on('mousemove', function (d) {
                        tooltip
                            //position
                            .style("left", d3.mouse(this)[0] + 52 + "px")
                            .style("top", d3.mouse(this)[1] + 25 + "px")
                            //content
                            .html(hypercube.qDimensionInfo[0].qFallbackTitle +
                                ": " + (d.dValues) +
                                "<br>" +
                                hypercube.qMeasureInfo[0].qFallbackTitle +
                                ": " + (d.mValues)
                            );
                    })
                    .on('mouseover', function () {
                        // when mouseover show the tooltip
                        tooltip.style("display", null);
                    })
                    .on('mouseout', function () {
                        // when mouseout hide the tooltip
                        tooltip.style("display", "none");
                    });


                //-------------------------------------------
                // TOOLTIP
                //-------------------------------------------
                //Tooltip
                var tooltip = d3.select("#" + id).append("div")
                    .style("display", "none")
                    .attr("class", "toolTip");
                */



                //-------------------------------------------------------               
                // END d3 code
                //-------------------------------------------------------

                // needed for exporting/snapshotting
                return qlik.Promise.resolve();

                //console.log("> end of paint");
            }
        };
    });