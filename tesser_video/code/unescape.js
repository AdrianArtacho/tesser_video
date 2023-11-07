inlets = 1;
outlets = 1;

function msg_int(v) {
    bang();
}

function msg_float(v) {
    bang();
}

function bang() {
    var s = "";
    if (inlet == 0) {
        if (arguments.length) s = arrayfromargs(arguments).join(" ");
        // Use a regular expression to find and remove the backslashes before quotes
        s = s.replace(/\\\"/g, '\"');
        outlet(0, s);
    }
}

function anything() {
    var a = arrayfromargs(messagename, arguments);
    bang.apply(this, a);
}
