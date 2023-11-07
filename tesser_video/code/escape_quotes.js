inlets = 1;
outlets = 1;

function anything() {
    var input = arrayfromargs(messagename, arguments).join(" ");
    // This will replace escaped double quotes with regular double quotes
    var output = input.replace(/\\"/g, '"');
    // Remove the leading and trailing double quotes if they are present
    if (output.startsWith('"') && output.endsWith('"')) {
        output = output.substring(1, output.length - 1);
    }
    outlet(0, output);
}
