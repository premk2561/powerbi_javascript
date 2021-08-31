

let loadedResolve, reportLoaded = new Promise((res, rej) => { loadedResolve = res; });
let renderedResolve, reportRendered = new Promise((res, rej) => { renderedResolve = res; });

// Get models. models contains enums that can be used.
let models = window['powerbi-client'].models;

// var report;
var visual;


let condition = true;

function toggleeditmode() {
   
    if(condition)
    {
        report.switchMode("edit");
    }
    else
    {
        report.switchMode("view");
    }
    condition=!condition;
}


// Embed a Power BI report in the given HTML element with the given configurations
// Read more about how to embed a Power BI report in your application here: https://go.microsoft.com/fwlink/?linkid=2153590
function embedPowerBIReport() {
    // Read embed application token
    let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTFjMDI4MmItZjQ1YS00ZTNhLThiZWEtNzEwNWZmYTg4ZjExLyIsImlhdCI6MTYyOTk0ODgzMywibmJmIjoxNjI5OTQ4ODMzLCJleHAiOjE2Mjk5NTI3MzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFPbktZNnBqd3VROHZEd3Z4NHpIRlRPaG9XWlBFYkt3N045RWs4eFVNTGFpOU1EN3M5WFI0QmZqSkpiWHdpR3JkIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiZW1iZWRkZWQiLCJnaXZlbl9uYW1lIjoicGJpIiwiaXBhZGRyIjoiMTc1LjEwMS4xMDguMTU4IiwibmFtZSI6IlBCSUVNQkVEREVEIiwib2lkIjoiNzEwZjNkYmMtMGM4OS00NjE5LWJiNmEtZDFkYTM5MWRkZmEyIiwicHVpZCI6IjEwMDMyMDAxNzEzQzE0NzQiLCJyaCI6IjAuQVhBQUt5akFVVnIwT2s2TDZuRUZfNmlQRVE4QkhJZGhYckZQZzZ5WVlRcC1rUkJ3QUFJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZ0Sk5FNC1lRDRwNDMtbE9xOHhnVG40aWwtRXZxNEwzNy1aUlRSNS13NkUiLCJ0aWQiOiI1MWMwMjgyYi1mNDVhLTRlM2EtOGJlYS03MTA1ZmZhODhmMTEiLCJ1bmlxdWVfbmFtZSI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InNFdEhFcW5HX1VHLUN3N1pEZzkxQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.cOmSQbY8t_JeyOP4_xBvbDPSdpUB88W9uvHfUV8KLx4BZ01lwl9vCwAAtt-Hk3qSAvNvV2FMihx76cxmAtwUELednOFdQIxMGEyRgv-31k1qoB1u5Xj-AKwWmyAMI20_0szZPKDPQ088ygjXMP7zYkNpyELfyM-2CyrlGV6DAEjknxm4CHYt7SzAEQRSgvQSaqHlQy8HIutofFTB1hZPhI0BD2CFffjFrOeRYx35xEYxNz9XdqpmMTqxFoJTbG3Rt7-4GcfKm9z6rUEqBwNDWfW0DCwHFAHgIwL3Cikt6tUe0TO0_HQc0FG5tJsUBzBhcfm4vfBYST6ziKrOzTXhyw";

    // Read embed URL
    let embedUrl = "https://app.powerbi.com/reportEmbed?reportId=b74655e6-4e93-4287-81f0-fa9c5e2afcaf&groupId=477d8286-6c84-44b8-96a7-5135aa4bf092&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d";

    // Read report Id
    let embedReportId = "b74655e6-4e93-4287-81f0-fa9c5e2afcaf";



    // We give All permissions to demonstrate switching between View and Edit mode and saving report.
    let permissions = models.Permissions.All;

    // Create the embed configuration object for the report
    // For more information see https://go.microsoft.com/fwlink/?linkid=2153590
    let config = {
        // type: 'visual',
        type:'report',
        // visualName:'Customer Profitability Sample',
        // pageName:'Team Scorecard',
        tokenType: models.TokenType.Aad,
        accessToken: accessToken,
        embedUrl: embedUrl,
        id: embedReportId,
        permissions: permissions,
        // filters:[basicFilter],
        settings: {
            localeSettings: {
                language: 'en',
                formatLocale: 'es'
            },
            panes: {
                filters: {
                    visible: true
                },
                pageNavigation: {
                    visible: true
                },
                selection: {
                    visible: true
                },
                syncSlicers: {
                    visible: true
                },
                visualizations: {
                    expanded: true
                }
            }
        }
    };

    // Get a reference to the embedded report HTML element
    let embedContainer = $('.embed-container')[0];


    // Embed the report and display it within the div container.
    report = powerbi.embed(embedContainer, config);

}
    // let reportFilters =  report.getFilters((report)=>{return report});

//     console.log(report)

//     // report.off removes all event handlers for a specific event
//     report.off("loaded");

//     // report.on will add an event handler
//     report.on("loaded", function () {
//         loadedResolve();
//         report.off("loaded");
//     });

//     // report.off removes all event handlers for a specific event
//     report.off("error");

//     report.on("error", function (event) {
//         console.log(event.detail);
//     });

//     // report.off removes all event handlers for a specific event
//     report.off("rendered");

//     // report.on will add an event handler
//     report.on("rendered", function () {
//         renderedResolve();
//         report.off("rendered");
//     });

// }

// function fullscreen() {
//     report.fullscreen();
// }

// let defaultLayout = {
//     width: 400,
//     height: 250,
//     displayState: {
//         mode: models.VisualContainerDisplayMode.Hidden
//     }
// };

// // let pages =  report.getPages(function(pages){return pages});

// // // Retrieve active page
// // var activePage = pages.find(function (page) { return page.isActive });

// // let visuals =  activePage.getVisuals();

// // // Retrieve target visual (replace "VisualContainer1" with requested visual name)
// // var visual = visuals.find(function (visual) { return visual.name === "VisualContainer1" });

// // const basicFilter2 = {
// //     $schema: "http://powerbi.com/product/schema#basic",
// //     target: {
// //       table: "Executives",
// //       column: "Executive"
// //     },
// //     operator: "In",
// //     values: ["Andrew Ma"],
// //     filterType: models.FilterType.BasicFilter
// //   };
  
// //    visual.setSlicerState({
// //       filters: [basicFilter2]
// //   });

// // Define page size as custom size: 1000x580.
// // let pageSize = {
// //     type: models.PageSizeType.Custom,
// //     width: 1000,
// //     height: 580
// // };

// // // Page layout: two visible visuals in fixed position.
// // let pageLayout = {
// //     defaultLayout: defaultLayout,
// //     visualsLayout: {
// //         "VisualContainer1": {
// //             x: 70,
// //             y: 100,
// //             displayState: {
// //                 mode: models.VisualContainerDisplayMode.Visible
// //             }
// //         },
// //         "VisualContainer3": {
// //             x: 540,
// //             y: 100,
// //             displayState: {
// //                 mode: models.VisualContainerDisplayMode.Visible
// //             }
// //         }
// //     }
// // };

// // let settings = {
// //     layoutType: models.LayoutType.Custom,
// //     customLayout: {
// //         pageSize: pageSize,
// //         displayOption: models.DisplayOption.FitToPage,
// //         pagesLayout: {
// //             "ReportSection600dd9293d71ade01765": pageLayout
// //         }
// //     },
// //     panes: {
// //         filters: {
// //             visible: false
// //         },
// //         pageNavigation: {
// //             visible: false
// //         }
// //     }
// // }

// // // Update the settings by passing in the new settings you have configured.
// // try {
// //      report.updateSettings(settings);
// //     console.log("Custom layout applied, to remove custom layout, reload the report using 'Reload' API.");
// // }
// // catch (error) {
// //     console.log(error);
// // }

// const basicFilter = {
//     $schema: "http://powerbi.com/product/schema#basic",
//     target: {
//       table: "Age Group",
//       column: "Count"
//     },
//     operator: "In",
//     values: ['North'],
//     filterType: models.FilterType.BasicFilter,
//     requireSingleSelection: true
//   }

embedPowerBIReport();
// // await reportLoaded;

// // Insert here the code you want to run after the report is loaded

// // await reportRendered;

// // Insert here the code you want to run after the report is rendered
