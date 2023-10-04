let __ElmType = "H",
    __Elms = localStorage.getItem("Elms") ? JSON.parse(localStorage.getItem("Elms")) : [],
    arrOption = [], arrTable = [], __elmIdx = [];
console.log(__Elms);

function rendElm(opt) {
    let to = opt.to ? opt.to : "none";
    let div = document.createElement("main");
    for (let elm of opt.elm) {
        let cElm = document.createElement(elm.elm);
        Object.keys(elm).forEach(function (key) {
            if (key != "elm") {
                if (key == "text") {
                    cElm.innerText = elm.text;
                } else if (key == "html") {
                    cElm.innerHTML = elm.html;
                } else if (key == "cls") {
                    cElm.className = elm[key];
                } else if (key == "attr") {
                    for (let attr in elm.attr) cElm.setAttribute(attr, elm.attr[attr]);
                } else if (key == "style") {
                    cElm.setAttribute("style", elm.style);
                } else if (key == "elms") {
                    for (let Elm of elm.elms) {
                        let ss = mm(Elm);
                        cElm.appendChild(ss);
                    }
                } else {
                    cElm.setAttribute(key, elm[key]);
                }
            }
        })
        div.appendChild(cElm);
    }

    function mm(elms) {
        let elm = document.createElement(elms.elm);
        Object.keys(elms).forEach(function (key) {
            if (key != "elm") {
                if (key == "text") {
                    elm.innerText = elms.text;
                } else if (key == "html") {
                    elm.innerHTML = elms.html;
                } else if (key == "cls") {
                    elm.className = elms[key];
                } else if (key == "attr") {
                    for (let attr in elms.attr) elm.setAttribute(attr, elms.attr[attr]);
                } else if (key == "style") {
                    elm.setAttribute("style", elms.style);
                } else if (key == "elms") {
                    for (let Elm of elms.elms) {
                        let ss = mm(Elm);
                        elm.appendChild(ss);
                    }
                } else {
                    elm.setAttribute(key, elms[key]);
                }
            }
        });
        return elm;
    }

    if (to != "none") {
        if (!opt.add) document.querySelectorAll(to)[0].innerHTML = "";
        let hasil = div.outerHTML.replace("<main>", "");
        let hasil2 = hasil.replace("</main>", "");
        document.querySelectorAll(to)[0].innerHTML = hasil2;
    } else {
        let hasil = div.outerHTML.replace("<main>", "");
        let hasil2 = hasil.replace("</main>", "");
        return hasil2;
    }
}

function htmlToJson2(element) {
    let result = {};
    result.elm = element.nodeName;
    if (element.nodeType === Node.TEXT_NODE) {
        result.text = element.innerText;
    } else {
        let attrs = element.attributes;
        let attrLength = attrs.length;
        if (attrLength > 0) {
            result.attr = {};
            for (let i = 0; i < attrLength; i++) result.attr[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        let childNodes = element.childNodes;
        let childLength = childNodes.length;
        if (childNodes[0].nodeName != "#text") {
            if (childLength > 0) {
                result.elms = [];
                for (let j = 0; j < childLength; j++) {
                    let child = childNodes[j];
                    if (child.nodeType === Node.ELEMENT_NODE) {
                        result.elms.push(htmlToJson(child));
                    } else if (child.nodeName == "#text") {
                        result.text = child.innerText;
                    }
                }
            } else {
                result.text = element.innerText;
            }
        } else {
            console.log(element.innerText);
            result.text = element.innerText;
        }
    }
    return result;
}

function htmlToJSON(element) {
    const json = {};

    // Mengambil tag name elemen HTML
    json.elm = element.tagName.toLowerCase();

    // Mengambil teks jika ada
    const text = element.textContent.trim();
    if (text) {
        json.text = text;
    }

    // Menambahkan atribut-atribut elemen ke dalam objek JSON
    for (const attr of element.attributes) {
        json[attr.name] = attr.value;
    }

    // Mengecek apakah elemen memiliki elemen anak (children)
    if (element.children.length > 0) {
        json.elms = [];

        // Mengonversi elemen anak menjadi data JSON rekursif
        for (const child of element.children) {
            json.elms.push(htmlToJSON(child));
        }
    }

    return json;
}

function textToHtml(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function getAllHtmlAttributes() {
    var element = document.createElement("div");
    var allAttributes = [];

    for (var attributeName in element) {
        if (attributeName.indexOf("on") === 0) {
            allAttributes.push(attributeName);
        }
    }

    var elementWithAttributes = document.createElement("div");
    for (var i = 0; i < allAttributes.length; i++) {
        var attributeName = allAttributes[i];
        elementWithAttributes.setAttribute(attributeName, "");
    }

    var attributes = elementWithAttributes.attributes;
    var attributeNames = [];
    for (var i = 0; i < attributes.length; i++) {
        attributeNames.push(attributes[i].name);
    }

    return attributeNames;
}

function GI(id) {
    return document.getElementById(id);
}