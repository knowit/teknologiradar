"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetUrl = exports.isMobileViewport = exports.translate = exports.showEmptyRings = exports.getItemPageNames = exports.rings = exports.quadrants = exports.radarNameShort = exports.radarName = void 0;
exports.radarName = process.env.REACT_APP_RADAR_NAME || "AOE Technology Radar";
exports.radarNameShort = exports.radarName;
exports.quadrants = [
    "languages",
    "methods",
    "frameworks",
    "tools",
];
exports.rings = ["all", "keep", "adopt", "trial", "assess", "hold"];
var getItemPageNames = function (items) {
    return items.map(function (item) { return item.quadrant + "/" + item.name; });
};
exports.getItemPageNames = getItemPageNames;
exports.showEmptyRings = false;
var messages = {
    languages: "Languages",
    methods: "Methods",
    frameworks: "Frameworks",
    tools: "Tools",
};
var translate = function (key) { return messages[key] || "-"; };
exports.translate = translate;
function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == "undefined")
        return false;
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    return width < 1200;
}
exports.isMobileViewport = isMobileViewport;
function assetUrl(file) {
    return process.env.PUBLIC_URL + "/" + file;
}
exports.assetUrl = assetUrl;
