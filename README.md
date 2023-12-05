# Check and Play Sound Script

This script periodically checks for a specific text content in the DOM element and opens a YouTube video if the condition is met.

## Usage

1. Modify the `expectedText` variable to match the text you are looking for.
2. Adjust the `xpathExpression` variable if necessary to locate the desired DOM element.
3. Save the changes in the `script.js` file.

## How to Run

Open the HTML file that includes the `script.js` file in a web browser. The script will run automatically at intervals defined by `setInterval`.

## Variables

- `expectedText`: The expected text content that triggers the action.
- `xpathExpression`: The XPath expression to locate the target DOM element.

## Notes

- This script uses `setInterval` to periodically check for the specified condition.
- If the condition is met, it opens a new tab with a YouTube video link.
- The interval duration is set to 5000 milliseconds (5 seconds) by default.

Feel free to customize the script according to your needs.
