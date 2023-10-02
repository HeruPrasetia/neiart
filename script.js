let __ElmType = "H",
    __Elms = localStorage.getItem("Elms") ? JSON.parse(localStorage.getItem("Elms")) : [],
    arrOption = [], arrTable = [], __elmIdx = [];

function pilihElement(elm) {
    switch (elm) {
        case 'H': {
            rendElm({
                to: "#modalBody", elm: [
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Jenis" },
                            {
                                elm: "select", id: "edtType", cls: "form-select", elms: [
                                    { elm: "option", value: "H1", text: "H1", id: "H1" },
                                    { elm: "option", value: "H2", text: "H2", id: "H2" },
                                    { elm: "option", value: "H3", text: "H3", id: "H3" },
                                    { elm: "option", value: "H4", text: "H4", id: "H4" },
                                    { elm: "option", value: "H5", text: "H5", id: "H5" },
                                    { elm: "option", value: "H6", text: "H6", id: "H6" },
                                ]
                            }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Text" },
                            { elm: "input", type: "text", id: "edtText", cls: "form-control", required: true },
                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Text" }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "ID" },
                            { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Class" },
                            { elm: "input", type: "text", id: "edtCls", cls: "form-control" },
                        ]
                    },
                ]
            });
        } break;

        case 'button': {
            rendElm({
                to: "#modalBody", elm: [
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Jenis" },
                            {
                                elm: "select", id: "edtType", cls: "form-select", elms: [
                                    { elm: "option", value: "Button", text: "Button", id: "Button" },
                                    { elm: "option", value: "Submit", text: "Submit", id: "Submit" }
                                ]
                            }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Text" },
                            { elm: "input", type: "text", id: "edtText", cls: "form-control", required: true },
                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Text" }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "ID" },
                            { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Class" },
                            { elm: "input", type: "text", id: "edtCls", cls: "form-control", value: "btn btn-primary" },
                        ]
                    },
                ]
            });
        } break;

        case 'grid': {
            rendElm({
                to: "#modalBody", elm: [
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Jumlah Grid" },
                            {
                                elm: "select", id: "edtJumlah", cls: "form-select", elms: [
                                    { elm: "option", value: "1", text: "1 Grid", id: "1" },
                                    { elm: "option", value: "2", text: "2 Grid", id: "2" },
                                    { elm: "option", value: "3", text: "3 Grid", id: "3" },
                                    { elm: "option", value: "4", text: "4 Grid", id: "4" },
                                ]
                            }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "ID" },
                            { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                        ]
                    },
                    { elm: "div", id: "divGrid" }
                ]
            });

            GI("edtJumlah").addEventListener("change", function () {
                let grid = [];
                for (let i = 0; i < this.value; i++) grid.push({
                    elm: "div", cls: "col mb-2 shadow", elms: [
                        { elm: "div", text: `Grid ${i}` }
                    ]
                })
                rendElm({
                    to: "#divGrid", elm: [
                        { elm: "div", cls: "row", elms: grid }
                    ]
                })
            });
        } break;

        case 'table': {
            rendElm({
                to: "#modalBody", elm: [
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "ID" },
                            { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Class" },
                            { elm: "input", type: "text", id: "edtCls", cls: "form-control", value: "table table-striped" },
                        ]
                    },
                    {
                        elm: "div", cls: "row", elms: [
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Jumlah Row" },
                                            { elm: "input", type: "number", cls: "form-control", id: "edtRow", value: "0", required: true },
                                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masuka Jumlah Row" }
                                        ]
                                    }
                                ]
                            },
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Jumlah Cell" },
                                            { elm: "input", type: "number", cls: "form-control", id: "edtCell", value: "0", required: true },
                                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masuka Jumlah Cel" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { elm: "p" },
                    {
                        elm: "div", cls: "table-responsive", elms: [
                            {
                                elm: "table", cls: "table table-striped", elms: [
                                    { elm: "thead", cls: "table-light", id: "theadTemplate" },
                                    { elm: "tbody", id: "tbodyTemplate" },
                                ]
                            }
                        ]
                    }
                ]
            });

            GI("edtRow").addEventListener("change", async function () {
                let row = this.value;
                let cell = GI("edtCell").value;
                let thead = [];
                let tbody = [];
                arrTable = [];
                for (let i = 0; i < cell; i++) thead.push({ text: "thead " + i });
                for (let i = 0; i < row; i++) {
                    let tBody = [];
                    for (let ii = 0; ii < cell; ii++) tBody.push({ text: "Data " + ii });
                    tbody.push(tBody);
                }
                arrTable = { thead: thead, tbody: tbody };
                handleRendTable();
            });

            GI("edtCell").addEventListener("change", async function () {
                let cell = this.value;
                let row = GI("edtRow").value;
                let thead = [];
                let tbody = [];
                arrTable = [];
                for (let i = 0; i < cell; i++) thead.push({ text: "thead " + i });
                for (let i = 0; i < row; i++) {
                    let tBody = [];
                    for (let ii = 0; ii < cell; ii++) tBody.push({ text: "Data " + ii });
                    tbody.push(tBody);
                }
                arrTable = { thead: thead, tbody: tbody };
                handleRendTable();
            });
        } break;

        case 'input': {
            rendElm({
                to: "#modalBody", elm: [
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Jenis" },
                            {
                                elm: "select", id: "edtType", cls: "form-select", elms: [
                                    { elm: "option", value: "Text", text: "Text" },
                                    { elm: "option", value: "Password", text: "Password" },
                                    { elm: "option", value: "Number", text: "Number" },
                                    { elm: "option", value: "Radio", text: "Radio" },
                                    { elm: "option", value: "Checkbox", text: "Checkbox" },
                                    { elm: "option", value: "Textarea", text: "Textarea" },
                                    { elm: "option", value: "Select", text: "Select" },
                                    { elm: "option", value: "File", text: "File" },
                                    { elm: "option", value: "Date", text: "Date" },
                                    { elm: "option", value: "Time", text: "Time" },
                                    { elm: "option", value: "Color", text: "Color" },
                                    { elm: "option", value: "Email", text: "Email" },
                                    { elm: "option", value: "URL", text: "URL" },
                                    { elm: "option", value: "Hidden", text: "Hidden" },
                                    { elm: "option", value: "Search", text: "Search" }
                                ]
                            }
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Label" },
                            { elm: "input", type: "text", id: "edtLabel", cls: "form-control", required: true },
                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Label" }
                        ]
                    },
                    { elm: "div", id: "divOption" },
                    {
                        elm: "div", cls: "row", elms: [
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Value" },
                                            { elm: "input", type: "text", id: "edtValue", cls: "form-control" }
                                        ]
                                    },
                                ]
                            },
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Name" },
                                            { elm: "input", type: "text", id: "edtName", cls: "form-control", required: true },
                                            { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Nama" }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        elm: "div", cls: "row", elms: [
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Max" },
                                            { elm: "input", type: "number", id: "edtMax", cls: "form-control", disabled: true }
                                        ]
                                    },
                                ]
                            },
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Min" },
                                            { elm: "input", type: "number", id: "edtMin", cls: "form-control", disabled: true }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        elm: "div", cls: "row", elms: [
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Max Length" },
                                            { elm: "input", type: "number", id: "edtMaxLength", cls: "form-control" }
                                        ]
                                    },
                                ]
                            },
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Min Length" },
                                            { elm: "input", type: "number", id: "edtMinLength", cls: "form-control" }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        elm: "div", cls: "row", elms: [
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Placeholder" },
                                            { elm: "input", type: "text", id: "edtPlaceholder", cls: "form-control" }
                                        ]
                                    },
                                ]
                            },
                            {
                                elm: "div", cls: "col-md-6 mb-2", elms: [
                                    {
                                        elm: "div", cls: "form-group", elms: [
                                            { elm: "label", text: "Required" },
                                            { elm: "input", type: "text", id: "edtRequired", cls: "form-control" }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "ID" },
                            { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                        ]
                    },
                    {
                        elm: "div", cls: "form-group", elms: [
                            { elm: "label", text: "Class" },
                            { elm: "input", type: "text", id: "edtCls", cls: "form-control", value: "form-control" },
                        ]
                    },
                ]
            });

            GI('edtType').addEventListener("change", function () {
                if (this.value == "Select") {
                    GI('edtValue').disabled = true;
                    GI('edtMin').disabled = true;
                    GI('edtMax').disabled = true;
                    GI('edtName').disabled = false;
                    GI('edtLabel').disabled = false;
                    rendElm({
                        to: "#divOption", elm: [
                            { elm: "p" },
                            { elm: "button", type: "button", text: "Tambah Option", cls: "btn btn-sm btn-primary", onclick: "handleAddOption()" },
                            { elm: "p" },
                            {
                                elm: "table", cls: "table", elms: [
                                    {
                                        elm: "thead", elms: [
                                            {
                                                elm: "tr", elms: [
                                                    {
                                                        elm: "tr", elms: [
                                                            { elm: "th", text: "Value" },
                                                            { elm: "th", text: "Text" },
                                                            { elm: "th", text: "ID" },
                                                            { elm: "th", text: "" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elm: "tbody", id: "tbodyOption", elms: arrOption.map((tr, i) => {
                                            return ({
                                                elm: "tr", elms: [
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')` },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.Text, onchange: `changeValueOption(this.value, ${i}, 'Text')` },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.ID, onchange: `changeValueOption(this.value, ${i}, 'ID')` },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "button", type: "button", cls: "btn btn-danger btn-sm", onclick: `handleDeleteOption(${i})`, text: "Hapus" },
                                                        ]
                                                    }
                                                ]
                                            })
                                        })
                                    }
                                ]
                            }
                        ]
                    });
                } else if (this.value == "Radio" || this.value == "Checkbox") {
                    GI('edtValue').disabled = true;
                    GI('edtMin').disabled = true;
                    GI('edtMax').disabled = true;
                    GI('edtName').disabled = true;
                    GI('edtLabel').disabled = true;
                    rendElm({
                        to: "#divOption", elm: [
                            { elm: "p" },
                            { elm: "button", type: "button", text: "Tambah Option", cls: "btn btn-sm btn-primary", onclick: "handleAddOption()" },
                            { elm: "p" },
                            {
                                elm: "table", cls: "table", elms: [
                                    {
                                        elm: "thead", cls: "table-light", elms: [
                                            {
                                                elm: "tr", elms: [
                                                    {
                                                        elm: "tr", elms: [
                                                            { elm: "th", text: "Value" },
                                                            { elm: "th", text: "Text" },
                                                            { elm: "th", text: "ID" },
                                                            { elm: "th", text: "" }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elm: "tbody", id: "tbodyOption", elms: arrOption.map((tr, i) => {
                                            return ({
                                                elm: "tr", elms: [
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')`, required: true },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.Text, onchange: `changeValueOption(this.value, ${i}, 'Text')`, required: true },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "input", cls: "form-control form-control-sm", value: tr.ID, onchange: `changeValueOption(this.value, ${i}, 'ID')` },
                                                        ]
                                                    },
                                                    {
                                                        elm: "td", elms: [
                                                            { elm: "button", type: "button", cls: "btn btn-danger btn-sm", onclick: `handleDeleteOption(${i})`, text: "Hapus" },
                                                        ]
                                                    }
                                                ]
                                            })
                                        })
                                    }
                                ]
                            }
                        ]
                    });
                } else if (this.value == "Number") {
                    GI('edtValue').disabled = false;
                    GI('edtMin').disabled = false;
                    GI('edtMax').disabled = false;
                    GI('edtName').disabled = false;
                    GI('edtLabel').disabled = false;
                    GI('divOption').innerHTML = "";
                } else if (this.value == "hidden") {
                    GI('edtValue').disabled = true;
                    GI('edtMin').disabled = true;
                    GI('edtMax').disabled = true;
                    GI('edtName').disabled = false;
                    GI('edtLabel').disabled = true;
                    GI('divOption').innerHTML = "";
                } else {
                    GI('edtValue').disabled = false;
                    GI('edtMin').disabled = true;
                    GI('edtMax').disabled = true;
                    GI('edtName').disabled = false;
                    GI('edtLabel').disabled = false;
                    GI('divOption').innerHTML = "";
                }
            });
        } break;
    }
    __ElmType = elm;
    const myModal = new bootstrap.Modal(GI('modal'), {});
    myModal.show();
}

function handleChangeValTh(i, val) {
    arrTable.thead[i].text = val;
    handleRendTable();
}

function handleChangeValTd(i, ii, val) {
    arrTable.tbody[i][ii].text = val;
    handleRendTable();
}

function handleRendTable() {
    rendElm({
        to: "#theadTemplate", elm: [
            {
                elm: "tr", elms: arrTable.thead.map((th, i) => {
                    return ({
                        elm: "th", elms: [
                            { elm: "input", cls: "form-control form-control-sm", value: th.text, onchange: `handleChangeValTh(${i}, this.value)` }
                        ]
                    })
                })
            }
        ]
    });

    rendElm({
        to: "#tbodyTemplate", elm: [
            {
                elm: "tr", elms: arrTable.tbody.map((tr, i) => {
                    let tBody = [];
                    for (let ii in arrTable.tbody[i]) tBody.push({
                        elm: "td", elms: [
                            { elm: "input", cls: "form-control form-control-sm", value: arrTable.tbody[i][ii].text, onchange: `handleChangeValTd(${i}, ${ii}, this.value)` }
                        ]
                    });

                    return ({ elm: "tr", elms: tBody })
                })
            }
        ]
    });
}

function handleAddOption() {
    arrOption.push({ Value: "", Text: "", ID: "" });
    renderOption();
}

function handleDeleteOption(i) {
    let tmpOption = [];
    for (let ii in arrOption) if (ii != i) tmpOption.push(arrOption[ii]);
    arrOption = tmpOption;
    renderOption();
}

function changeValueOption(val, i, obj) {
    arrOption[i][obj] = val;
    renderOption();
}

function renderOption() {
    rendElm({
        to: "#tbodyOption", elm: arrOption.map((tr, i) => {
            return ({
                elm: "tr", elms: [
                    {
                        elm: "td", elms: [
                            { elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')`, required: true },
                        ]
                    },
                    {
                        elm: "td", elms: [
                            { elm: "input", cls: "form-control form-control-sm", value: tr.Text, onchange: `changeValueOption(this.value, ${i}, 'Text')`, required: true },
                        ]
                    },
                    {
                        elm: "td", elms: [
                            { elm: "input", cls: "form-control form-control-sm", value: tr.ID, onchange: `changeValueOption(this.value, ${i}, 'ID')` },
                        ]
                    },
                    {
                        elm: "td", elms: [
                            { elm: "button", type: "button", cls: "btn btn-danger btn-sm", onclick: `handleDeleteOption(${i})`, text: "Hapus" },
                        ]
                    }
                ]
            })
        })
    });
}

function __handleSaveElm(e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
        if (__ElmType == "H") {
            let Type = GI('edtType').value;
            let Text = GI('edtText').value;
            let ID = GI('edtID').value;
            let Class = GI('edtCls').value;

            __Elms.push({ elm: Type, text: Text, id: ID, cls: Class });
        } else if (__ElmType == "input") {
            let Type = GI('edtType').value;
            let Label = GI('edtLabel').value;
            let ID = GI('edtID').value;
            let Class = GI('edtCls').value;
            let Name = GI('edtName').value;
            let Max = GI('edtMax').value;
            let Min = GI('edtMin').value;
            let Maxlength = GI('edtMaxLength').value;
            let Minlength = GI('edtMinLength').value;
            let Value = GI('edtValue').value;
            let Placeholder = GI('edtPlaceholder').value;
            let Required = GI('edtRequired').value;

            if (Type == "Select") {
                __Elms.push({
                    elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: Label },
                        {
                            elm: "select", type: Type, name: Name, value: Value, id: ID, cls: Class, elms: arrOption.map((opt, i) => {
                                return ({ elm: "option", value: opt.Value, text: opt.Text, ID: opt.ID })
                            })
                        }
                    ]
                });
            } else if (Type == "Textarea") {
                __Elms.push({
                    elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: Label },
                        { elm: "textarea", type: Type, name: Name, text: Value, id: ID, cls: Class, placeholder: Placeholder, required: Required != "" ? true : false },
                        { elm: "div", cls: "invalid-feedback", text: Required }
                    ]
                });
            } else if (Type == "Radio") {
                for (let chk of arrOption) {
                    __Elms.push({
                        elm: "div", cls: "form-check", elms: [
                            { elm: "label", cls: "form-check-label", for: chk.ID, text: chk.Text },
                            { elm: "input", type: "radio", name: Name, text: chk.Value, id: chk.ID, cls: "form-check-input" },
                        ]
                    });
                }
            } else if (Type == "Number") {
                __Elms.push({
                    elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: Label },
                        { elm: "input", type: Type, name: Name, text: Value, id: ID, cls: Class, placeholder: Placeholder, min: Min, max: Max, required: Required != "" ? true : false },
                        { elm: "div", cls: "invalid-feedback", text: Required }
                    ]
                });
            } else {
                __Elms.push({
                    elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: Label },
                        { elm: "input", type: Type, name: Name, value: Value, id: ID, cls: Class, placeholder: Placeholder, maxlength: Maxlength, minlength: Minlength, required: Required != "" ? true : false },
                        { elm: "div", cls: "invalid-feedback", text: Required }
                    ]
                });
            }
        } else if (__ElmType == "table") {
            let ID = GI('edtID').value;
            let Class = GI('edtCls').value;

            __Elms.push({
                elm: "div", cls: "table-responsive", elms: [
                    {
                        elm: "table", id: ID, cls: Class, elms: [
                            {
                                elm: "thead", elms: [
                                    {
                                        elm: "tr", elms: arrTable.thead.map((th, i) => {
                                            return ({ elm: "th", text: th.text })
                                        })
                                    }
                                ]
                            },
                            {
                                elm: "tbody", elms: arrTable.tbody.map((tr, i) => {
                                    let tbody = [];
                                    for (let tr of arrTable.tbody[i]) tbody.push({ elm: "td", text: tr.text });
                                    return ({ elm: "tr", elms: tbody })
                                })
                            }
                        ]
                    }
                ]
            });
        } else if (__ElmType == "grid") {
            let ID = GI('edtID').value;
            let Jml = GI('edtJumlah').value;
            let grid = [];
            for (let i = 0; i < Jml; i++) grid.push({ elm: "div", cls: "col mb-2", text: `Grid ${i}` })
            __Elms.push({ elm: "div", cls: "row", id: ID, elms: grid });
        } else if (__ElmType == "button") {
            let ID = GI('edtID').value;
            let Class = GI('edtCls').value;
            let Type = GI('edtType').value;
            let Text = GI('edtText').value;

            __Elms.push({ elm: "button", cls: Class, id: ID, type: Type, text: Text });
        }
        localStorage.setItem("Elms", JSON.stringify(__Elms));
        handleMain();
        GI('btnTutupModal').click();
    } else {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.classList.add('was-validated');
        });
    }
}

function handleMain() {
    rendElm({ to: "#main", elm: __Elms });
    let LI = [], idx = 0;
    for (let li of __Elms) {
        LI.push({
            elm: "li", cls: "li", "data-id": idx, elms: li.elms !== undefined ? [
                { elm: "span", cls: "caret element", "data-id": idx, text: li.elm.toUpperCase() },
                { elm: "ul", cls: "nested active", elms: rendChild(li.elms, idx) }
            ] : [{ elm: "h6", cls: "element", "data-id": idx, text: `${li.elm.toUpperCase()} - ${li.text}` }]
        })

        idx++;
    }
    rendElm({ to: "#tree", elm: LI });

    var toggler = document.getElementsByClassName("caret");

    for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }

    let li = document.getElementsByClassName("element");
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", editElement)
    }
}

function rendChild(elms) {
    let UL = [], i = 0
    for (let ul of elms) {
        UL.push({
            elm: "li", cls: "li", "data-id": i, elms: ul.elms !== undefined ? [
                { elm: "span", cls: "caret element", "data-id": i, text: ul.elm.toUpperCase() },
                { elm: "ul", cls: "nested active", elms: rendChild(ul.elms) }
            ] : [{ elm: "h6", cls: "element", "data-id": i, text: `${ul.elm.toUpperCase()} - ${ul.text}` }]
        })

        i++;
    }
    return UL;
}

function editElement(e) {
    let elm = e.target;
    let count = 0;
    let currentElement = elm;
    let ii = [];

    while (currentElement.parentNode) {
        if (currentElement.id === "tree") break;
        count++;
        currentElement = currentElement.parentNode;
        if (currentElement.dataset.id !== undefined) ii.push(parseInt(currentElement.dataset.id));
    }

    __elmIdx = ii.reverse();
    let tempELm = __Elms;
    for (let i = 0; i < __elmIdx.length; i++) tempELm = tempELm.elms !== undefined ? tempELm.elms[__elmIdx[i]] : tempELm[__elmIdx[i]];

    let elmToRend = [];
    for (var key in tempELm) {
        if (tempELm.hasOwnProperty(key)) {
            if (key == "elms") {
                rendElm({ to: "#divEdit", elm: tempELm.elms });
            } else {
                elmToRend.push({
                    elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: key.toUpperCase() },
                        { elm: "input", type: "text", onfocus:"this.select()", cls: "form-control", name: key, value: tempELm[key] }
                    ]
                });
            }
        }
    }

    elmToRend.push({ elm: "p" });
    elmToRend.push({ elm:"div", cls:"d-flex", elms:[
        {elm: "button", type: "submit", cls: "btn btn-primary", text: "Simpan"},
        {elm: "button", type: "button", onclick:"handleHapusElement()", cls: "btn btn-danger", text: "Hapus"}
    ] });
    rendElm({
        to: "#divEdit", elm: [
            { elm: "form", onsubmit: "handleEditElm(event)", id:"formEditElm", novalidate: true, elms: elmToRend }
        ]
    });
}

function handleEditElm(e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.checkValidity()) {
        let form = e.target;
        let input = form.querySelectorAll('input[type="text"]');
        let elll = {};
        for (let i = 0; i < input.length; i++) {
            let obj = input[i].name;
            let val = input[i].value
            elll[obj] = val;
        }

        let index = "__Elms";
        for(let i in __elmIdx) {
            if(i < __elmIdx.length - 1) {
                index += `[${__elmIdx[i]}].elms`;
            }else{
                index += `[${__elmIdx[i]}] = ${JSON.stringify(elll)}`;
            }
        }

        eval(index);
        localStorage.setItem("Elms", JSON.stringify(__Elms));
        handleMain();
    } else {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.classList.add('was-validated');
        });
    }
}

function handleHapusElement(){
    let index = "__Elms";
    for(let i in __elmIdx) {
        if(i < __elmIdx.length - 1) {
            index += `[${__elmIdx[i]}].elms`;
        }else{
            index += `.splice(${__elmIdx[i]}, 1);`;
        }
    }

    eval(index);
    localStorage.setItem("Elms", JSON.stringify(__Elms));
    handleMain();
}

function main() {
    rendElm({
        to: "#tbodyElement", elm: [
            {
                elm: "table", cls: "table table-striped table-hovered", elms: [
                    {
                        elm: "tbody", elms: [
                            {
                                elm: "tr", onclick: "pilihElement('H')", elms: [
                                    { elm: "td", text: "Header" }
                                ]
                            },
                            {
                                elm: "tr", onclick: "pilihElement('input')", elms: [
                                    { elm: "td", text: "Input" }
                                ]
                            },
                            {
                                elm: "tr", onclick: "pilihElement('button')", elms: [
                                    { elm: "td", text: "Button" }
                                ]
                            },
                            {
                                elm: "tr", onclick: "pilihElement('table')", elms: [
                                    { elm: "td", text: "Table" }
                                ]
                            },
                            {
                                elm: "tr", onclick: "pilihElement('grid')", elms: [
                                    { elm: "td", text: "Grid" }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    });

    handleMain();
}

main();

GI('btnProses').addEventListener("click", function () {
    let opsi = GI('edtOpsi').value;
    let edt = GI('edtHasil');
    if (opsi == "Import HTML") {
        GI('main').innerHTML = edt.value;
    } else if (opsi == 'Import JSON') {
        let elm = JSON.parse(edt.value);
        rendElm({ to: "#main", elm: elm });
    } else if (opsi == "Export JSON") {
        let edt = GI('edtHasil');
        let json = htmlToJson(GI('main'));
        edt.value = JSON.stringify(json.elms);
    }
});