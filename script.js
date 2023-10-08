let __ElmType = "H",
    __Elms = localStorage.getItem("Elms") ? JSON.parse(localStorage.getItem("Elms")) : [],
    arrOption = [], arrTable = [], __elmIdx = [];

function pilihElement(elm) {
    switch (elm) {
        case 'H1': {
            rendElm({
                to: "#modalBody", elm: [
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Jenis" },
                        {elm: "select", id: "edtType", name:"elm", cls: "form-select cls-input", elms: [
                            {elm: "option", value: "H1", text: "H1", id: "H1" },
                            {elm: "option", value: "H2", text: "H2", id: "H2" },
                            {elm: "option", value: "H3", text: "H3", id: "H3" },
                            {elm: "option", value: "H4", text: "H4", id: "H4" },
                            {elm: "option", value: "H5", text: "H5", id: "H5" },
                            {elm: "option", value: "H6", text: "H6", id: "H6" },
                        ]}
                    ]},
                    { elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Text" },
                        {elm: "input", type: "text", id: "edtText", name:"text", cls: "form-control cls-input", required: true },
                        {elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Text" }
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", name:"id", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Class" },
                        { elm: "input", type: "text", id: "edtCls", name:"cls", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", name:"style", cls: "form-control cls-input" },
                    ]},
                ]
            });
        } break;

        case 'button': {
            rendElm({
                to: "#modalBody", elm: [
                    {elm:"input", type:"hidden", name:"elm", value:"button", cls:"cls-input"},
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Jenis" },
                        {elm: "select", id: "edtType", name:"type", cls: "form-select cls-input", elms: [
                            { elm: "option", value: "Button", text: "Button", id: "Button" },
                            { elm: "option", value: "Submit", text: "Submit", id: "Submit" },
                            { elm: "option", value: "Reset", text: "Reset", id: "Reset" }
                        ]}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Text" },
                        { elm: "input", type: "text", id: "edtText", name:"text", cls: "form-control cls-input", required: true },
                        { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Text" }
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", name:"id", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Class" },
                        { elm: "input", type: "text", id: "edtCls", name:"cls", cls: "form-control cls-input", value: "btn btn-primary" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", name:"style", cls: "form-control cls-input" },
                    ]},
                ]
            });
        } break;

        case 'grid': {
            rendElm({
                to: "#modalBody", elm: [
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Jumlah Grid" },
                        {elm: "select", id: "edtJumlah", cls: "form-select", elms: [
                            {elm: "option", value: "1", text: "1 Grid", id: "1" },
                            {elm: "option", value: "2", text: "2 Grid", id: "2" },
                            {elm: "option", value: "3", text: "3 Grid", id: "3" },
                            {elm: "option", value: "4", text: "4 Grid", id: "4" },
                        ]}
                    ]},
                    { elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "ID" },
                        {elm: "input", type: "text", id: "edtID", cls: "form-control" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", cls: "form-control" },
                    ]},
                    { elm: "div", id: "divGrid" }
                ]
            });

            GI("edtJumlah").addEventListener("change", function () {
                let grid = [];
                for (let i = 0; i < this.value; i++) grid.push({
                    elm: "div", cls: "col mb-2 shadow", elms: [
                        {elm: "div", text: `Grid ${i}`}
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
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Class" },
                        { elm: "input", type: "text", id: "edtCls", cls: "form-control", value: "table table-striped" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", cls: "form-control" },
                    ]},
                    {elm: "div", cls: "row", elms: [
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Jumlah Row" },
                                { elm: "input", type: "number", cls: "form-control", id: "edtRow", value: "0", required: true },
                                { elm: "div", cls: "invalid-feedback", text: "Silahkan Masuka Jumlah Row" }
                            ]}
                        ]},
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Jumlah Cell" },
                                { elm: "input", type: "number", cls: "form-control", id: "edtCell", value: "0", required: true },
                                { elm: "div", cls: "invalid-feedback", text: "Silahkan Masuka Jumlah Cel" }
                            ]}
                        ]}
                    ]},
                    { elm: "p" },
                    {elm: "div", cls: "table-responsive", elms: [
                        {elm: "table", cls: "table table-striped", elms: [
                            { elm: "thead", cls: "table-light", id: "theadTemplate" },
                            { elm: "tbody", id: "tbodyTemplate" },
                        ]}
                    ]}
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

        case 'div':{
            rendElm({
                to: "#modalBody", elm: [
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Text" },
                        {elm: "input", type: "text", id: "edtText", name:"text", cls: "form-control cls-input"}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "ID" },
                        {elm: "input", type: "text", id: "edtID", name:"id", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Class" },
                        {elm: "input", type: "text", id: "edtCls", name:"cls", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", name:"style", cls: "form-control cls-input" },
                    ]},
                ]
            });
        }break;

        case 'images':{
            rendElm({
                to: "#modalBody", elm: [
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "src" },
                        { elm: "input", type: "text", id: "edtSrc", name:"src", cls: "form-control cls-input"}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", name:"id", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Class" },
                        { elm: "input", type: "text", id: "edtCls", name:"cls", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Alt" },
                        { elm: "input", type: "text", id: "edtAlt", name:"alt", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", name:"style", cls: "form-control cls-input" },
                    ]},
                ]
            });
        }break;

        case 'script':{
            rendElm({
                to: "#modalBody", elm: [
                    {"elm": "div", "cls": "form-group", "elms": [
                        {"elm": "label", "text": "Jenis Source"},
                        {"elm": "select", "type": "Select", "name": "TypeSrc", "id":"edtTypeSrc", "cls": "form-select", "elms": [
                            {"elm": "option", "value": "External", "text": "External", "ID": "optExternal"},
                            {"elm": "option", "value": "Internal", "text": "Internal", "ID": "optInternal"}
                        ]}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", name:"id", cls: "form-control cls-input" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "src" },
                        { elm: "input", type: "text", id: "edtSrc", name:"src", cls: "form-control cls-input", required:true}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Script" },
                        {elm: "textarea", id: "edtScript", name:"script", cls: "form-control cls-input", disabled:true },
                    ]},
                ]
            });

            GI("edtTypeSrc").addEventListener("change", function(){
                if(this.value == "External"){
                    GI("edtScript").disabled = true;
                    GI("edtSrc").disabled = false;
                }else{
                    GI("edtScript").disabled = false;
                    GI("edtSrc").disabled = true;
                }
            });
        }break;

        case 'input': {
            rendElm({
                to: "#modalBody", elm: [
                    {elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: "Jenis" },
                        {elm: "select", id: "edtType", cls: "form-select", elms: [
                            {elm: "option", value: "Text", text: "Text" },
                            {elm: "option", value: "Password", text: "Password" },
                            {elm: "option", value: "Number", text: "Number" },
                            {elm: "option", value: "Radio", text: "Radio" },
                            {elm: "option", value: "Checkbox", text: "Checkbox" },
                            {elm: "option", value: "Textarea", text: "Textarea" },
                            {elm: "option", value: "Select", text: "Select" },
                            {elm: "option", value: "File", text: "File" },
                            {elm: "option", value: "Date", text: "Date" },
                            {elm: "option", value: "Time", text: "Time" },
                            {elm: "option", value: "Color", text: "Color" },
                            {elm: "option", value: "Email", text: "Email" },
                            {elm: "option", value: "URL", text: "URL" },
                            {elm: "option", value: "Hidden", text: "Hidden" },
                            {elm: "option", value: "Search", text: "Search" }
                        ]}
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Label" },
                        { elm: "input", type: "text", id: "edtLabel", cls: "form-control", required: true },
                        { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Label" }
                    ]},
                    {elm: "div", id: "divOption" },
                    {elm: "div", cls: "row", elms: [
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                                {
                                    elm: "div", cls: "form-group", elms: [
                                        { elm: "label", text: "Value" },
                                        { elm: "input", type: "text", id: "edtValue", cls: "form-control" }
                                    ]
                                },
                            ]
                        },
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Name" },
                                { elm: "input", type: "text", id: "edtName", cls: "form-control", required: true },
                                { elm: "div", cls: "invalid-feedback", text: "Silahkan Masukan Nama" }
                            ]},
                        ]},
                    ]},
                    {elm: "div", cls: "row", elms: [
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                {elm: "label", text: "Max" },
                                {elm: "input", type: "number", id: "edtMax", cls: "form-control", disabled: true }
                            ]},
                        ]},
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Min" },
                                { elm: "input", type: "number", id: "edtMin", cls: "form-control", disabled: true }
                            ]},
                        ]},
                    ]},
                    {elm: "div", cls: "row", elms: [
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Max Length" },
                                { elm: "input", type: "number", id: "edtMaxLength", cls: "form-control" }
                            ]},
                        ]},
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Min Length" },
                                { elm: "input", type: "number", id: "edtMinLength", cls: "form-control" }
                            ]},
                        ]},
                    ]},
                    {elm: "div", cls: "row", elms: [
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Placeholder" },
                                { elm: "input", type: "text", id: "edtPlaceholder", cls: "form-control" }
                            ]},
                        ]},
                        {elm: "div", cls: "col-md-6 mb-2", elms: [
                            {elm: "div", cls: "form-group", elms: [
                                { elm: "label", text: "Required" },
                                { elm: "input", type: "text", id: "edtRequired", cls: "form-control" }
                            ]},
                        ]},
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "ID" },
                        { elm: "input", type: "text", id: "edtID", cls: "form-control" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Class" },
                        { elm: "input", type: "text", id: "edtCls", cls: "form-control", value: "form-control" },
                    ]},
                    {elm: "div", cls: "form-group", elms: [
                        { elm: "label", text: "Style" },
                        { elm: "input", type: "text", id: "edtStyle", cls: "form-control" },
                    ]},
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
                            {elm: "p" },
                            {elm: "button", type: "button", text: "Tambah Option", cls: "btn btn-sm btn-primary", onclick: "handleAddOption()" },
                            {elm: "p" },
                            {elm: "table", cls: "table", elms: [
                                {elm: "thead", elms: [
                                    {elm: "tr", elms: [
                                        {elm: "tr", elms: [
                                            {elm: "th", text: "Value" },
                                            {elm: "th", text: "Text" },
                                            {elm: "th", text: "ID" },
                                            {elm: "th", text: "" }
                                        ]}
                                    ]}
                                ]},
                                {elm: "tbody", id: "tbodyOption", elms: arrOption.map((tr, i) => {
                                    return ({
                                        elm: "tr", elms: [
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.Text, onchange: `changeValueOption(this.value, ${i}, 'Text')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.ID, onchange: `changeValueOption(this.value, ${i}, 'ID')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "button", type: "button", cls: "btn btn-danger btn-sm", onclick: `handleDeleteOption(${i})`, text: "Hapus" },
                                            ]}
                                        ]})
                                    })
                                }
                            ]}
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
                            {elm: "p" },
                            {elm: "button", type: "button", text: "Tambah Option", cls: "btn btn-sm btn-primary", onclick: "handleAddOption()" },
                            {elm: "p" },
                            {elm: "table", cls: "table", elms: [
                                {elm: "thead", elms: [
                                    {elm: "tr", elms: [
                                        {elm: "tr", elms: [
                                            {elm: "th", text: "Value" },
                                            {elm: "th", text: "Text" },
                                            {elm: "th", text: "ID" },
                                            {elm: "th", text: "" }
                                        ]}
                                    ]}
                                ]},
                                {elm: "tbody", id: "tbodyOption", elms: arrOption.map((tr, i) => {
                                    return ({
                                        elm: "tr", elms: [
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.Text, onchange: `changeValueOption(this.value, ${i}, 'Text')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "input", cls: "form-control form-control-sm", value: tr.ID, onchange: `changeValueOption(this.value, ${i}, 'ID')` },
                                            ]},
                                            {elm: "td", elms: [
                                                {elm: "button", type: "button", cls: "btn btn-danger btn-sm", onclick: `handleDeleteOption(${i})`, text: "Hapus" },
                                            ]}
                                        ]})
                                    })
                                }
                            ]}
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
    const myModalEl = document.getElementById('modal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
        GI("divAddAttribut").innerHTML = "";
    })
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
            {elm: "tr", elms: arrTable.thead.map((th, i) => {
                return ({
                    elm: "th", elms: [
                        { elm: "input", cls: "form-control form-control-sm", value: th.text, onchange: `handleChangeValTh(${i}, this.value)` }
                    ]
                })
            })}
        ]
    });

    rendElm({
        to: "#tbodyTemplate", elm: [
            {elm: "tr", elms: arrTable.tbody.map((tr, i) => {
                let tBody = [];
                for (let ii in arrTable.tbody[i]) tBody.push({elm: "td", elms: [
                        { elm: "input", cls: "form-control form-control-sm", value: arrTable.tbody[i][ii].text, onchange: `handleChangeValTd(${i}, ${ii}, this.value)` }
                    ]});

                return ({ elm: "tr", elms: tBody })
            })}
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
                    {elm: "td", elms: [
                        { elm: "input", cls: "form-control form-control-sm", value: tr.Value, onchange: `changeValueOption(this.value, ${i}, 'Value')`, required: true },
                    ]},
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

function handleMain() {
    rendElm({ to: "#main", elm: __Elms });
    let LI = [], idx = 0;
    for (let li of __Elms) {
        let cls = li.cls || "";
        let id = li.id || "";
        let text = li.text || "";
        LI.push({
            elm: "li", cls: "li", "data-id": idx, elms: li.elms !== undefined ? [
                { elm: "span", cls: "caret element", "data-id": idx, text: `${li.elm.toUpperCase()} - .${cls} #${id}` },
                { elm: "ul", cls: "nested", elms: rendChild(li.elms, idx) }
            ] : [{ elm: "h6", cls: "element", "data-id": idx, text: `${li.elm.toUpperCase()} - ${text}` }]
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
        let cls = ul.cls || "";
        let id = ul.id || "";
        let text = ul.text || "";
        UL.push({
            elm: "li", cls: "li", "data-id": i, elms: ul.elms !== undefined ? [
                {elm: "span", cls: "caret element", "data-id": i, text: `${ul.elm.toUpperCase()} - .${cls} #${id}` },
                {elm: "ul", cls: "nested", elms: rendChild(ul.elms) }
            ] : [{ elm: "h6", cls: "element", "data-id": i, text: `${ul.elm.toUpperCase()} - ${text}` }]
        })

        i++;
    }
    return UL;
}

function editElement(e) {
    let clsActive = document.getElementsByClassName("element-active");
    for (let i = 0; i < clsActive.length; i++) clsActive[i].classList.remove("element-active");
    let elm = e.target;
    elm.classList.add("element-active");
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
                        {elm: "label", text: key.toUpperCase() },
                        {elm: "input", type: "text", onfocus:"this.select()", cls: "form-control", name: key, value: tempELm[key] }
                    ]
                });
            }
        }
    }

    elmToRend.push({ elm: "p" });
    elmToRend.push({ elm:"div", cls:"d-flex", elms:[
        {elm:"div", id:"divAddAttrEdit"},
        {elm:"p"},
        {elm:"div", cls:"d-flex justofy-content-center align-items-center gap-1", elms:[
            {elm: "button", type: "submit", cls: "btn btn-primary", text: "Simpan"},
            {elm: "button", type: "button", onclick:"__handleAddAttr('divAddAttrEdit')", cls: "btn btn-warning", text: "+ Atribut"},
            {elm: "button", type: "button", onclick:"__handleHapusElm()", cls: "btn btn-danger", text: "Hapus"},
        ]}
    ] });
    rendElm({to: "#divEdit", elm: [
        { elm: "form", onsubmit: "__handleEditElm(event)", id:"formEditElm", novalidate: true, elms: elmToRend }
    ]});
}

function __handleAddElm(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.checkValidity()) {
        let ELM = {};
        if (__ElmType == "H1") {
            let form = GI("modalBody");
            let input = form.getElementsByClassName("cls-input");
            for (let i = 0; i < input.length; i++) ELM[input[i].name] = input[i].value;
            let addAttr = document.getElementsByClassName("add-attr");
            let valAttr = document.getElementsByClassName("val-attr");
            for (let i = 0; i < addAttr.length; i++) ELM[addAttr[i].value] = valAttr[i].value;
            elmToElm(ELM);
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
            let Style = GI('edtStyle').value;
           
            if (Type == "Select") {
                elmToElm({elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: Label },
                        {elm: "select", type: Type, name: Name, value: Value, id: ID, cls: Class, style:Style, elms: arrOption.map((opt, i) => {
                            return ({ elm: "option", value: opt.Value, text: opt.Text, ID: opt.ID })})
                        }
                    ]});
            } else if (Type == "Textarea") {
                elmToElm({elm: "div", cls: "form-group", elms: [
                            {elm: "label", text: Label },
                            {elm: "textarea", type: Type, name: Name, text: Value, id: ID, cls: Class, placeholder: Placeholder, style:Style, required: Required != "" ? true : false },
                            {elm: "div", cls: "invalid-feedback", text: Required }
                        ]});
            } else if (Type == "Radio") {
                for (let chk of arrOption) {
                    elmToElm({
                        elm: "div", cls: "form-check", elms: [
                            {elm: "label", cls: "form-check-label", for: chk.ID, text: chk.Text },
                            {elm: "input", type: "radio", name: Name, text: chk.Value, id: chk.ID, cls: "form-check-input", style:Style },
                        ]
                    });
                }
            } else if (Type == "Number") {
                elmToElm({
                    elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: Label },
                        {elm: "input", type: Type, name: Name, text: Value, id: ID, cls: Class, placeholder: Placeholder, min: Min, max: Max, style:Style, required: Required != "" ? true : false },
                        {elm: "div", cls: "invalid-feedback", text: Required }
                    ]
                });
            } else {
                elmToElm({
                    elm: "div", cls: "form-group", elms: [
                        {elm: "label", text: Label },
                        {elm: "input", type: Type, name: Name, value: Value, id: ID, cls: Class, placeholder: Placeholder, maxlength: Maxlength, minlength: Minlength, style:Style, required: Required != "" ? true : false },
                        {elm: "div", cls: "invalid-feedback", text: Required }
                    ]
                });
            }
        } else if (__ElmType == "table") {
            let ID = GI('edtID').value;
            let Class = GI('edtCls').value;
            let Style = GI('edtStyle').value;

            elmToElm({
                elm: "div", cls: "table-responsive", elms: [
                    {elm: "table", id: ID, cls: Class, style:Style, elms: [
                        {elm: "thead", elms: [
                            {elm: "tr", elms: arrTable.thead.map((th, i) => {
                                return ({ elm: "th", text: th.text })
                            })}
                        ]},
                        {elm: "tbody", elms: arrTable.tbody.map((tr, i) => {
                            let tbody = [];
                            for (let tr of arrTable.tbody[i]) tbody.push({ elm: "td", text: tr.text });
                            return ({ elm: "tr", elms: tbody })
                        })}
                    ]}
                ]
            });
        } else if (__ElmType == "grid") {
            let ID = GI('edtID').value;
            let Jml = GI('edtJumlah').value;
            let grid = [];
            for (let i = 0; i < Jml; i++) grid.push({ elm: "div", cls: "col mb-2", text: `Grid ${i}` });
            elmToElm({ elm: "div", cls: "row", id: ID, elms: grid });
        } else if (__ElmType == "button") {
            let form = GI("modalBody");
            let input = form.getElementsByClassName("cls-input");
            for (let i = 0; i < input.length; i++) ELM[input[i].name] = input[i].value;
            let addAttr = document.getElementsByClassName("add-attr");
            let valAttr = document.getElementsByClassName("val-attr");
            for (let i = 0; i < addAttr.length; i++) ELM[addAttr[i].value] = valAttr[i].value;
            elmToElm(ELM);
        } else if(__ElmType == "div"){
            let form = GI("modalBody");
            let input = form.getElementsByClassName("cls-input");
            for (let i = 0; i < input.length; i++) ELM[input[i].name] = input[i].value;
            let addAttr = document.getElementsByClassName("add-attr");
            let valAttr = document.getElementsByClassName("val-attr");
            for (let i = 0; i < addAttr.length; i++) ELM[addAttr[i].value] = valAttr[i].value;
            elmToElm(ELM);
        } else if(__ElmType == "images"){
            let form = GI("modalBody");
            let input = form.getElementsByClassName("cls-input");
            for (let i = 0; i < input.length; i++) ELM[input[i].name] = input[i].value;
            let addAttr = document.getElementsByClassName("add-attr");
            let valAttr = document.getElementsByClassName("val-attr");
            for (let i = 0; i < addAttr.length; i++) ELM[addAttr[i].value] = valAttr[i].value;
            elmToElm(ELM);
        }else if(__ElmType == "script"){
            let Type = GI("edtTypeSrc").value;
            let ID = GI("edtID").value;
            let Script = GI("edtScript").value;
            let Src = GI("edtSrc").value;
            if(Type == "External") __Elms.push({elm:"script", src:Src, id:ID});
                __Elms.push({elm:"script", text:Script, id:ID});
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

function __handleEditElm(e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.checkValidity()) {
        let form = e.target;
        let input = form.querySelectorAll('input[type="text"]');

        let index = "__Elms";
        for(let i in __elmIdx) {
            if(i < __elmIdx.length - 1) {
                index += `[${__elmIdx[i]}].elms`;
            }else{
                index += `[${__elmIdx[i]}]`;
            }
        }

        for (let i = 0; i < input.length; i++) {
            let obj = input[i].name;
            let val = input[i].value;
            eval(`${index}["${obj}"] = '${val}'`);
        }

        GI("formEditElm").innerHTML = "";

        localStorage.setItem("Elms", JSON.stringify(__Elms));
        handleMain();
    } else {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.classList.add('was-validated');
        });
    }
}

function __handleHapusElm(){
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

function elmToElm(elm){
    if(__elmIdx.length > 0){
        let index = "__Elms";
        for(let i in __elmIdx) {
            if(i < __elmIdx.length - 1) {
                index += `[${__elmIdx[i]}].elms`;
            }else{
                index += `[${__elmIdx[i]}].elms;`;
            }
        }

        let iniElms = eval(index);
        index = "__Elms";
        for(let i in __elmIdx) {
            if(i < __elmIdx.length - 1) {
                index += `[${__elmIdx[i]}].elms`;
            }else{
                index += iniElms === undefined ? `[${__elmIdx[i]}].elms = [${JSON.stringify(elm)}];` : `[${__elmIdx[i]}].elms.push(${JSON.stringify(elm)});`;
            }
        }

        eval(index);
    }else{
        __Elms.push(elm);;
    }
}

async function main() {
    let data = await api("komponen.json");
    let template = [], element = [], i = 0;
    for(let dd of data.element){
        element.push({elm: "tr", onclick: `pilihElement('${dd.Value}')`, elms: [
            { elm: "td", text: dd.Name }
        ]});
    }

    rendElm({
        to: "#tbodyElement", elm: [
            {elm: "table", cls: "table table-striped table-hovered", elms: [
                {elm: "tbody", elms: element}
            ]}
        ]
    });

    for(let dd of data.component){
        template.push({elm:"tr", elms:[
            {elm:"td", text:dd.name, onclick:`modalPilihTemplate(${i})`}
        ]});
        i++;
    }

    rendElm({to:"#tbodyTemplateElement", elm:template});

    handleMain();
}

main();

async function modalPilihTemplate(idx){
    let data = await api("komponen.json");
    let template = [], i = 0;
    for(let dd of data.component[idx].elm){
        template.push({elm:"div", cls:"card shadow mb-2", onclick:`__handlePilihTemplate(${idx}, ${i})`, elms:[
            {elm:"div", cls:"card-header", text:""},
            {elm:"div", cls:"card-body", elms:[dd]}
        ]});
        i++;
    }
    rendElm({to:"#divModalBodyTemplate", elm:template});
    const myModal = new bootstrap.Modal(GI('modalTemplate'), {});
    myModal.show();
}

async function __handlePilihTemplate(i, ii){
    let data = await api("komponen.json");
    let template = data.component[i].elm[ii];
    elmToElm(template);
    localStorage.setItem("Elms", JSON.stringify(__Elms));
    handleMain();
    GI("btnTutupModalTemplate").click();
}

function __handleExIm(e){
    e.stopPropagation();
    e.preventDefault();
    if(e.target.checkValidity()){
        let opsi = GI('edtOpsi').value;
        let edt = myCodeMirror;
        if (opsi == "Import HTML") {
            let htmlString = "<main>" + edt.getValue() + "</main>";
            let parser = new DOMParser();
            let doc = parser.parseFromString(htmlString, 'text/html');
            let rootElement = doc.querySelector('main');

            let jsonData = htmlToJSON(rootElement);
            __Elms.push(jsonData);
            localStorage.setItem("Elms", JSON.stringify(__Elms));
            handleMain();
            GI("btnTutupModalExIm").click();
        } else if (opsi == 'Import JSON') {
            let elm = JSON.parse(edt.getValue());
            rendElm({ to: "#main", elm: elm });
            GI("btnTutupModalExIm").click();
        } else if (opsi == "Export JSON") {
            edt.setValue('');
            edt.replaceRange(JSON.stringify(__Elms), { line: 0, ch: 0 });
        } else if(opsi == "Export HTML"){
            edt.setValue('');
            edt.replaceRange(document.getElementById('main').innerHTML, { line: 0, ch: 0 });
        }
    }else{
        let forms = document.getElementsByClassName('needs-validation-exim');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.classList.add('was-validated');
        });
    }
};

GI("divLayout").addEventListener("click", (e)=>{
    if(e.target.id == "divLayout"){
        __elmIdx = [];
        let clsActive = document.getElementsByClassName("element-active");
        for (let i = 0; i < clsActive.length; i++) clsActive[i].classList.remove("element-active");
        GI("divEdit").innerHTML = "";
    }
});

GI("btnAddAtribut").addEventListener("click", ()=>{
    __handleAddAttr("divAddAttribut");
});

function __handleAddAttr(div){
    GI(div).innerHTML += rendElm({elm:[
        {"elm": "div", "cls": "row", "id": "", "elms": [
            {"elm": "div", "cls": "col mb-2", "text": "", "elms": [
                {"elm": "div", "cls": "form-group", "elms": [
                    {"elm": "label", "text": "Nama Atribut"},
                    {"elm": "input", "type": "Text", "name": "attr", "value": "", "id": "", "cls": "form-control add-attr", "placeholder": "Nama Atribut", "maxlength": "", "minlength": "", "style": "", "required": true},
                    {"elm": "div", "cls": "invalid-feedback", "text": "Silahkan Masukan Nama Atribut"}
                ]}
            ]},
            {"elm": "div", "cls": "col mb-2", "text": "", "elms": [
                {"elm": "div", "cls": "form-group", "elms": [
                    {"elm": "label", "text": "Nilai Atribut"},
                    {"elm": "input", "type": "Text", "name": "value", "value": "", "id": "", "cls": "form-control val-attr", "placeholder": "Nilai Atribut", "maxlength": "", "minlength": "", "style": "", "required": true},
                    {"elm": "div", "cls": "invalid-feedback", "text": "Silahkan Masukan Nilai Atribut"}
                ]}
            ]}
        ]}
    ]})
}

var currentCard = null;

GI("main").addEventListener("contextmenu", (e)=>{
    showCard(e);
});

GI("main").addEventListener("click", (e)=>{
    if (e.target.id === 'cardEdit' || e.target.closest('#cardEdit')) {
        return;
    }

    if (currentCard) {
        currentCard.style.display = 'none';
        currentCard.remove();
    }
    if(e.target.id != "main"){
        let elm = e.target;
        let count = 0;
        let currentElement = elm;
        let ii = [];

        while (currentElement.parentNode) {
            if (currentElement.id === "main") break;
            let ddd = currentElement;
            currentElement = currentElement.parentNode;
            let child = currentElement.children;
            let anakArray = Array.from(child);
            let indeks = anakArray.indexOf(ddd);
            count++;
            ii.push(indeks);
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
                            {elm: "label", text: key.toUpperCase() },
                            {elm: "input", type: "text", onfocus:"this.select()", cls: "form-control form-control-sm form-edit", name: key, value: tempELm[key] }
                        ]
                    });
                }
            }
        }

        elmToRend.push({ elm: "p" });
        elmToRend.push({ elm:"div", cls:"d-flex", elms:[
            {elm:"div", id:"divAddAttrEdit"},
            {elm:"p"},
            {elm:"div", cls:"d-flex justofy-content-center align-items-center gap-1", elms:[
                {elm: "button", type: "submit", cls: "btn btn-primary", text: "Simpan"},
                {elm: "button", type: "button", onclick:"__handleAddAttr('divAddAttrEdit')", cls: "btn btn-warning", text: "+ Atribut"},
                {elm: "button", type: "button", onclick:"__handleHapusElm()", cls: "btn btn-danger", text: "Hapus"},
            ]}
        ] });
        rendElm({to: "#divEdit", elm: [
            {elm: "form", onsubmit: "__handleEditElm(event)", id:"formEditElm", novalidate: true, elms: elmToRend }
        ]});
    }
});

function showCard(e) {
    if(e.target.id != "main"){
        if (currentCard) {
            currentCard.style.display = 'none';
            currentCard.remove();
        }
    
        var card = document.createElement('div');
        card.className = 'card shadow';
        card.id = "cardEdit";
        card.style.width = "300px";
        card.style.left = (e.clientX - 200) + 'px';
        card.style.top = (e.clientY - 10) + 'px';    
        document.getElementById('main').appendChild(card);
        card.style.display = 'block';
        currentCard = card;
        e.preventDefault();
        let elm = e.target;
        let count = 0;
        let currentElement = elm;
        let ii = [];

        while (currentElement.parentNode) {
            if (currentElement.id === "main") break;
            let ddd = currentElement;
            currentElement = currentElement.parentNode;
            let child = currentElement.children;
            let anakArray = Array.from(child);
            let indeks = anakArray.indexOf(ddd);
            count++;
            ii.push(indeks);
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
                            {elm: "label", text: key.toUpperCase() },
                            {elm: "input", type: "text", onfocus:"this.select()", cls: "form-control form-control-sm form-edit", name: key, value: tempELm[key] }
                        ]
                    });
                }
            }
        }

        elmToRend.push({ elm: "p" });
        elmToRend.push({ elm:"div", cls:"d-flex", elms:[
            {elm:"div", id:"divAddAttrEdit"},
            {elm:"p"},
            {elm:"div", cls:"d-flex justofy-content-center align-items-center gap-1", elms:[
                {elm: "button", type: "submit", cls: "btn btn-primary", text: "Simpan"},
                {elm: "button", type: "button", onclick:"__handleAddAttr('divAddAttrEdit')", cls: "btn btn-warning", text: "+ Atribut"},
                {elm: "button", type: "button", onclick:"__handleHapusElm()", cls: "btn btn-danger", text: "Hapus"},
            ]}
        ] });
        rendElm({to: "#cardEdit", elm: [
            {elm:"div", cls:"card-header", text:"Edit Element"},
            {elm:"div", cls:"card-body", elms:[
                {elm: "form", onsubmit: "__handleEditElm(event)", id:"formEditElm", novalidate: true, elms: elmToRend }
            ]}
        ]});
    }
}