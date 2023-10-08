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
                } else if (key == "script") {
                    if (elm.src != "" || elm.src !== undefined) cElm.setAttribute("src", elm.src);
                    if (elm.text != "" || elm.text !== undefined) cElm.setAttribute("src", elm.src);
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

function htmlToJSON(element) {
    let json = {};
    json.elm = element.tagName.toLowerCase();

    for (const attr of element.attributes) {
        json[attr.name] = attr.value;
    }

    if (element.children.length > 0) {
        json.elms = [];

        for (const child of element.children) {
            json.elms.push(htmlToJSON(child));
        }
    } else {
        json.text = element.innerText.trim();
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

function getElementAttributes(elm) {
    const element = document.createElement(elm);
    const attributes = Array.from(element.attributes).map((attr) => attr.name);
    return element.attributes;
}

function load(url, id = "main") {
    fetch(encodeURI(url)).then(response => response.text()).then(hasil => {
        document.getElementById(id).innerHTML = hasil;
        if (hasil.includes("<script>")) {
            for (let i = 0; i < (hasil.match(/<script>/g) || []).length; i++) {
                let start = hasil.indexOf("<script>", i) + 8;
                let end = hasil.indexOf("</script>", i);
                let script = hasil.substring(start, end);
                let node = document.createElement("script");
                let ss = document.createTextNode(script);
                node.appendChild(ss);
                document.getElementById(id).appendChild(node);
            }
        }
    }).catch((error) => {
        console.log("Error: " + error);
    });
}

function api(url, data = []) {
    if (data.length == 0) {
        return new Promise((resolve, reject) => {
            fetch(encodeURI(url))
                .then(response => response.text())
                .then(hasil => {
                    try {
                        if (isJson(hasil)) {
                            resolve(JSON.parse(hasil));
                        } else {
                            resolve(hasil);
                        }
                    } catch (e) {
                        resolve({ status: "gagal", pesan: "Terjadi kesalahan ketika memproses" });
                    }
                }).catch((error) => {
                    reject({ status: "gagal", pesan: error });
                });
        });
    } else {
        return new Promise((resolve, reject) => {
            fetch(encodeURI(url), {
                method: 'POST',
                body: jsonToForm(data),
            })
                .then(response => response.text())
                .then(hasil => {
                    try {
                        if (isJson(hasil)) {
                            resolve(JSON.parse(hasil));
                        } else {
                            resolve(hasil);
                        }
                    } catch (e) {
                        resolve({ status: "gagal", pesan: "Terjadi kesalahan ketika memproses" });
                    }
                }).catch((error) => {
                    reject({ status: "gagal", pesan: error });
                });
        });
    }
}

function jsonToForm(data) {
    const formData = new FormData();
    for (let dt in data) {
        formData.append(dt, data[dt]);
    }
    return formData;
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// Menggunakan fungsi untuk mendapatkan data
const elementAttributesJSON = getElementAttributes();