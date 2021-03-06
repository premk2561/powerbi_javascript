
const ColumnsNumber = {
    One: 1,
    Two: 2,
    Three: 3
}

const LayoutShowcaseConsts = {
    margin: 15,
    minPageWidth: 270
}

var LayoutShowcaseState = {
    columns: ColumnsNumber.Three,
    layoutVisuals: null,
    layoutReport: null,
    layoutPageName: null
}

// Embed the report and retrieve all report visuals
function embedCustomLayoutReport() {
    // Defualt columns value is three columns
    LayoutShowcaseState.columns = ColumnsNumber.Three;

    // Load custom layout report properties into session
    LoadLayoutShowcaseReportIntoSession().then(function () {

        // Get models. models contains enums that can be used
        const models = window['powerbi-client'].models;

        // Get embed application token from session
        var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTFjMDI4MmItZjQ1YS00ZTNhLThiZWEtNzEwNWZmYTg4ZjExLyIsImlhdCI6MTYyOTgwMjkyNSwibmJmIjoxNjI5ODAyOTI1LCJleHAiOjE2Mjk4MDY4MjUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFocWVkTkl5M3krMGxMSjZvNFYzVHBNZEpBRzEvSkZVcWhMbWJzMk9LZjlmazUvR1JoSEtWOE55N2xOSzkxVGF0IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiZW1iZWRkZWQiLCJnaXZlbl9uYW1lIjoicGJpIiwiaXBhZGRyIjoiMTc1LjEwMS4xMDguMTU4IiwibmFtZSI6IlBCSUVNQkVEREVEIiwib2lkIjoiNzEwZjNkYmMtMGM4OS00NjE5LWJiNmEtZDFkYTM5MWRkZmEyIiwicHVpZCI6IjEwMDMyMDAxNzEzQzE0NzQiLCJyaCI6IjAuQVhBQUt5akFVVnIwT2s2TDZuRUZfNmlQRVE4QkhJZGhYckZQZzZ5WVlRcC1rUkJ3QUFJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZ0Sk5FNC1lRDRwNDMtbE9xOHhnVG40aWwtRXZxNEwzNy1aUlRSNS13NkUiLCJ0aWQiOiI1MWMwMjgyYi1mNDVhLTRlM2EtOGJlYS03MTA1ZmZhODhmMTEiLCJ1bmlxdWVfbmFtZSI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InBiaWVtYmVkZGVkQGRlbW9kb21haW4yNTYxLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6ImVxUjdoWlAtZUVtZDV5dEtyM0s5QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.B9q8wd6kfNBKFWow695A4RChKsrHO_W7JZj6UwOWRq5pNj6W7HF4TPvCQyO8eiPj58HihCLd9Z0LMzpCNois-vlOnlZWzmng6OZ-4FqLjWFdTtskXHt0NNeX7LuQuQPROdSCFDR_ouGtfI6AYnH2BmGM15AGq3kfLHyp2pzjqflrPmS96PePH8KiouBCdgTdfS0hRgzDwl3emwLI0LHIYBb6bilwYVJ_9CKo4EfnTJxw_7NNP0H6tho-GTHq03K0C4vQFWcDqlbcN0wvA5rUhGCkGWFYMgt2eZE5lttZ9c0WBERUtLAsBfFrIBFKCBs7FgNBnxWlSSxST7fdH1z-bg";

        // Get embed URL from session
        var embedUrl = "https://app.powerbi.com/reportEmbed?reportId=7a15df60-3d3b-499a-9dcd-9c23c1315853&groupId=1ac98abf-abc3-4bd1-b4c7-6a4ef86941cb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d";

        // Get report Id from session
        var embedReportId = "7a15df60-3d3b-499a-9dcd-9c23c1315853";

        // Use View permissions
        var permissions = models.Permissions.View;

        // Embed configuration used to describe the what and how to embed
        // This object is used when calling powerbi.embed
        // This also includes settings and options such as filters
        // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details
        var config= {
            type: 'report',
            tokenType: models.TokenType.Aad,
            accessToken: accessToken,
            embedUrl: embedUrl,
            id: embedReportId,
            permissions: permissions,
            settings: {
                filterPaneEnabled: false,
                navContentPaneEnabled: false
            }
        };

        // Get a reference to the embedded report HTML element
        var embedContainer = $('.embed-container')[0];

        // Embed the report and display it within the div container
        LayoutShowcaseState.layoutReport = powerbi.embed(embedContainer, config);

        // Report.on will add an event handler for report loaded event
        LayoutShowcaseState.layoutReport.on("loaded", function() {

            // After report is loaded, we find the active page and get all the visuals on it
            // Retrieve the page collection
            LayoutShowcaseState.layoutReport.getPages().then(function (pages) {

                // Retrieve active page
                let activePage = jQuery.grep(pages, function (page) { return page.isActive })[0];

                // Set layoutPageName to active page name
                LayoutShowcaseState.layoutPageName = activePage.name;

                // Retrieve active page visuals.
                activePage.getVisuals().then(function (visuals) {
                    var reportVisuals = visuals.map(function (visual) {
                        return {
                            name: visual.name,
                            title: visual.title,
                            checked: true
                        };
                    });

                    // Create visuals array from the visuals of the active page
                    createVisualsArray(reportVisuals);
                });
            });
        });
    });
}

// Create visuals array from the report visuals and update the HTML
function createVisualsArray(reportVisuals) {

    // Remove all visuals without titles (i.e cards)
    LayoutShowcaseState.layoutVisuals = reportVisuals.filter(function (visual) {
        return visual.title !== undefined;
    });

    // Clear visuals list div
    $('#visualsList').empty();

    // Build checkbox html list and insert the html code to visualsList div
    for (let i = 0; i < LayoutShowcaseState.layoutVisuals.length; i++) {
        $('#visualsList').append(buildVisualElement(LayoutShowcaseState.layoutVisuals[i]));
    }

    // Render all visuals
    renderVisuals();
}


// Render all visuals with current configuration
function renderVisuals() {

    // render only if report and visuals initialized
    if (!LayoutShowcaseState.layoutReport || !LayoutShowcaseState.layoutVisuals)
        return;

    // Get models. models contains enums that can be used
    const models = window['powerbi-client'].models;

    // Get embedContainer width and height
    let pageWidth = $('#embedContainer').width();
    let pageHeight = $('#embedContainer').height();

    // Calculating the overall width of the visuals in each row
    let visualsTotalWidth = pageWidth - (LayoutShowcaseConsts.margin * (LayoutShowcaseState.columns + 1));

    // Calculate the width of a single visual, according to the number of columns
    // For one and three columns visuals width will be a third of visuals total width
    let width = (LayoutShowcaseState.columns === ColumnsNumber.Two) ? (visualsTotalWidth / 2) : (visualsTotalWidth / 3);

    // For one column, set page width to visual's width with margins
    if (LayoutShowcaseState.columns === ColumnsNumber.One) {
        pageWidth = width + 2 * LayoutShowcaseConsts.margin;

        // Check if page width is smaller than minimum width and update accordingly
        if (pageWidth < LayoutShowcaseConsts.minPageWidth) {
            pageWidth = LayoutShowcaseConsts.minPageWidth;

            // Visuals width is set to fit minimum page width with margins on both sides
            width = LayoutShowcaseConsts.minPageWidth - 2 * LayoutShowcaseConsts.margin;
        }
    }

    // Set visuals height according to width - 9:16 ratio
    const height = width * (9 / 16);

    // Visuals starting point
    let x = LayoutShowcaseConsts.margin, y = LayoutShowcaseConsts.margin;

    // Filter the visuals list to display only the checked visuals
    let checkedVisuals = LayoutShowcaseState.layoutVisuals.filter(function (visual) { return visual.checked; });

    // Calculate the number of lines
    const lines = Math.ceil(checkedVisuals.length / LayoutShowcaseState.columns);

    // Calculate page height with margins
    pageHeight = Math.max(pageHeight, ((lines * height) + ((lines + 1) * LayoutShowcaseConsts.margin)));

    // Building visualsLayout object
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Custom-Layout
    let visualsLayout = {};
    for (let i = 0; i < checkedVisuals.length; i++) {
        visualsLayout[checkedVisuals[i].name] = {
            x: x,
            y: y,
            width: width,
            height: height,
            displayState: {

                // Change the selected visuals display mode to visible
                mode: models.VisualContainerDisplayMode.Visible
            }
        }

        // Calculating (x,y) position for the next visual
        x += width + LayoutShowcaseConsts.margin;
        if (x + width > pageWidth) {
            x = LayoutShowcaseConsts.margin;
            y += height + LayoutShowcaseConsts.margin;
        }
    }

    // Building pagesLayout object
    let pagesLayout = {};
    pagesLayout[LayoutShowcaseState.layoutPageName] = {
        defaultLayout: {
            displayState: {

                // Default display mode for visuals is hidden
                mode: models.VisualContainerDisplayMode.Hidden
            }
        },
        visualsLayout: visualsLayout
    };

    // Building settings object
    let settings = {
        layoutType: models.LayoutType.Custom,
        customLayout: {
            pageSize: {
                type: models.PageSizeType.Custom,
                width: pageWidth - 10,
                height: pageHeight - 20
            },
            displayOption: models.DisplayOption.FitToPage,
            pagesLayout: pagesLayout
        }
    };

    // If pageWidth or pageHeight is changed, change display option to actual size to add scroll bar
    if (pageWidth !== $('#embedContainer').width() || pageHeight !== $('#embedContainer').height()) {
        settings.customLayout.displayOption = models.DisplayOption.ActualSize;
    }

    // Change page background to transparent on Two / Three columns configuration
    settings.background = (LayoutShowcaseState.columns === ColumnsNumber.One) ? models.BackgroundType.Default : models.BackgroundType.Transparent;

    // Call updateSettings with the new settings object
    LayoutShowcaseState.layoutReport.updateSettings(settings);
}

// Update the visuals list with the change and rerender all visuals
function onCheckboxClicked(checkbox) {
    let visual = jQuery.grep(LayoutShowcaseState.layoutVisuals, function (visual) { return visual.name === checkbox.value })[0];
    visual.checked = $(checkbox).is(':checked');
    renderVisuals();
};

// Update columns number and rerender the visuals
function onColumnsClicked(num) {
    LayoutShowcaseState.columns = num;
    setColumnButtonActive(num);
    renderVisuals();
}

// Build visual checkbox HTML element
function buildVisualElement(visual) {
    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "checkboxContainer checked");

    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("id", 'visual_' + visual.name);
    inputElement.setAttribute("value", visual.name);
    inputElement.setAttribute("onclick", "onCheckboxClicked(this);");
    inputElement.setAttribute("checked", "true");
    labelElement.appendChild(inputElement);

    var spanElement = document.createElement("span");
    spanElement.setAttribute("class", "checkboxCheckmark");
    labelElement.appendChild(spanElement);

    var secondSpanElement = document.createElement("span");
    secondSpanElement.setAttribute("class", "checkboxTitle");
    var checkboxTitleElement = document.createTextNode(visual.title);
    secondSpanElement.appendChild(checkboxTitleElement);
    labelElement.appendChild(secondSpanElement);

    return labelElement;
}

// Set clicked columns button active
function setColumnButtonActive(num) {
    const active_btn_class = "active-columns-btn";
    $('#btnOneCol').removeClass(active_btn_class);
    $('#btnTwoCols').removeClass(active_btn_class);
    $('#btnThreeCols').removeClass(active_btn_class);

    if (num === ColumnsNumber.Three) {
        $('#btnThreeCols').addClass(active_btn_class);
    } else if (num === ColumnsNumber.Two) {
        $('#btnTwoCols').addClass(active_btn_class);
    } else {
        $('#btnOneCol').addClass(active_btn_class);
    }
}