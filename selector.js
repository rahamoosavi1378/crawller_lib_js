const dom = document;

// obj.getElementById()
Object.prototype.gi = function (elementId) {
    return this.getElementById(elementId);
};

// obj.getElementsByName()
Object.prototype.gns = function (elementName) {
    return this.getElementsByName(elementName);
};

// obj.getElementsByTagName()
Object.prototype.gtns = function (tagName) {
    return this.getElementsByTagName(tagName);
};

// obj.getElementsByTagNameNS()
Object.prototype.gtn2s = function (nameSpace, localName) {
    return this.getElementsByTagNameNS(nameSpace, localName);
};

// obj.getElementsByClassName()
Object.prototype.gcns = function (className) {
    return this.getElementsByClassName(className);
};

// obj.querySelector()
Object.prototype.q = function (selector) {
    return this.querySelector(selector);
};

// obj.querySelectorAll()
Object.prototype.qs = function (selectors) {
    return this.querySelectorAll(selectors);
};