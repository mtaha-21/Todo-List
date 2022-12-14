        let title = document.getElementById("title")

        function myfunc() {
            title.className = "active";
        }
        function myfunc1() {
            title.className = "black";
        }


        //filter function


        let filter = document.getElementById("list");
        let filtericon = document.getElementById("filtericon");

        function filt() {
            filter.classList.toggle("filteractive");
        }

        function enterAll() {
            filtericon.innerHTML = "<i class='fa-sharp fa-solid fa-filter '></i>" + "All";
            filter.className = "filternone";
        }

        function enterActive() {
            filtericon.innerHTML = "<i class='fa-sharp fa-solid fa-filter '></i>" + "Active";
            filter.className = "filternone";
        }

        function enterCompleted() {
            filtericon.innerHTML = "<i class='fa-sharp fa-solid fa-filter '></i>" + "Complete";
            filter.className = "filternone";
        }

        let seachicon = document.getElementById("searchicon");
        let searchinput = document.getElementById("searchinput");
        let crossicon = document.getElementById("crossicon");

        document.getElementById("searchicon").addEventListener("click", () => {
            searchicon.style.display = "none";
            searchinput.style.display = "block";
            crossicon.style.display = "block"
        })

        let searchvalidation = document.getElementById("searchvalidation");

        document.getElementById("crossicon").addEventListener("click", () => {
            seachicon.style.display = "block";
            searchinput.style.display = "none";
            crossicon.style.display = "none";
            searchvalidation.className="searchvalid"
        })


        let input = document.getElementById("title");
        let display = document.getElementById("output");

        let listItem = "";
        let date = "";
        let arroutput = "";
        let createcheckbox = "";
        let create = "";
        let deleteicon = "";
        let editicon = "";
        let k = "";

        let arr = [];
        let inputs = {};

        function add() {


            listItem = document.createElement("li");
            listItem.className = "arrayoutput";

            create = document.createElement("span");
            create.id = "arrayoutput";
            create.className = "spanarrayoutput"

            createcheckbox = document.createElement("input");
            createcheckbox.type = "checkbox";
            createcheckbox.id = "checkbox";
            createcheckbox.className = "checkbox";

            arroutput = document.createElement("span");
            arroutput.id = "arroutput";
            arroutput.className = "arroutput";

            date = document.createElement("span");
            date.id = "date";

            deleteicon = document.createElement("i");
            deleteicon.id = "delete";
            deleteicon.className = "delete";

            editicon = document.createElement("i");
            editicon.id = "edit";
            editicon.className = "edit";


            let dates = new Date();
            let day = dates.getDate();
            let months = dates.getMonth();
            let originalmonth = Number(months + 1);
            let year = dates.getFullYear();

            let requireddate = "created by " + day + "-" + originalmonth + "-" + year;

            k++;

            let reg = /^[0-9]/;

            let regular = input.value;
            let checkreg = reg.test(regular)

            if (checkreg) {
                input.classList = "formvalidation"
            } else {
                inputs = {
                    "id": k,
                    "name": input.value,
                    "check": createcheckbox,
                    "date": requireddate,
                    "delete": `<button id="del">
                    <i class="fa-solid fa-trash"></i>
                    </button>`,
                    "edit": `<button id="edi">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>`
                }

                arr.push(inputs);

                let i = arr[arr.length - 1];

                arroutput.innerHTML = i.name;
                date.innerHTML = i.date;
                editicon.innerHTML = i.edit;
                deleteicon.innerHTML = i.delete;


                create.appendChild(createcheckbox);
                create.appendChild(arroutput);
                create.appendChild(date);
                create.appendChild(deleteicon);
                listItem.appendChild(create);
                display.appendChild(listItem);

            }

            let remove = document.getElementsByClassName('delete');

            for (let i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    arr.splice(i, 1);

                }
            }

        }

        let temp = arr;

        let filteractive = "";
        // let filtersearch = '';

        document.getElementById("active").addEventListener("click", () => {
            filteractive = temp.filter((item => item.check.checked === false));
            // console.log(filteractive);
            enter(filteractive);
        })

        let filtercompleted = "";
        document.getElementById("completed").addEventListener("click", () => {
            filtercompleted = temp.filter((item) => item.check.checked === true);
            enter(filtercompleted);
        })

        let filterall = "";
        document.getElementById("all").addEventListener("click", () => {

            filterall = temp.filter((item) => item.check.checked == true || item.check.checked == false);
            enter(filterall);
        })

        function enter(a) {

            let i = "";

            while (display.hasChildNodes()) {
                display.removeChild(display.firstChild);
            }



            for (let j = 0; j < a.length; j++) {

                let listItem = document.createElement("li");

                create = document.createElement("span");
                create.id = "arrayoutput";
                create.className = "spanarrayoutput"

                createcheckbox = document.createElement("input");
                createcheckbox.type = "checkbox";
                createcheckbox.id = "checkbox";
                createcheckbox.className = "checkbox";

                arroutput = document.createElement("span");
                arroutput.id = "arroutput";
                arroutput.className = "arroutput";

                date = document.createElement("span");
                date.className = "delete";
                date.id = "date";

                editicon = document.createElement("i");
                editicon.id = "edit";
                editicon.className = "edit";

                deleteicon = document.createElement("i");
                deleteicon.id = "delete";
                deleteicon.className = "delete";


                i = a[j];
                if (i.check.checked === false) {
                } else {
                    createcheckbox.checked = "true";
                }
                arroutput.innerHTML = i.name;
                date.innerHTML = i.date;
                createcheckbox.innerHTML = i.check;
                editicon.innerHTML = i.edit;
                deleteicon.innerHTML = i.delete;

                create.appendChild(createcheckbox)
                create.appendChild(arroutput);
                create.appendChild(date);
                create.appendChild(deleteicon);
                listItem.appendChild(create);
                display.appendChild(listItem);


            }


            let checkchecking = document.getElementsByClassName("checkbox");

            for (let i = 0; i < checkchecking.length; i++) {
                checkchecking[i].addEventListener("click", () => {
                    let checkid = a[i].id;
                    let checkchange = a.findIndex((item) => item.id === checkid);
                    if (a[checkchange].check.checked) {
                        a[checkchange].check.checked = false;
                        a.splice(checkchange, 1);
                        enter(a);
                    } else {
                        a[checkchange].check.checked = true;
                        a.splice(checkchange, 1);
                        enter(a);
                    }
                })
            }


            let remove = document.getElementsByClassName('delete');

            for (let i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    arr.splice(i - 2, 1);
                }
            }

        }

        let searcharroutput = document.getElementsByClassName("arroutput");
        let searchinputval = document.getElementById("searchinput");
        let searchspanarrayoutput = document.getElementsByClassName("spanarrayoutput");
        document.getElementById("searchinput").addEventListener("keyup", () => {
            let searchinputvalue = searchinputval.value;
            if (searcharroutput.length != 0) {
                // console.log(searcharroutput.length)
                for (let i = 0; i < searcharroutput.length; i++) {
                    let x = searcharroutput;
                    // let searchincludes=x.includes(searchinputvalue,x);
                    if (!x[i].innerHTML.includes(searchinputvalue)) {
                        // console.log("hello");
                        searchvalidation.className = "searchvalidationresult";
                        searchspanarrayoutput[i].style.display = "none";
                        // display.innerHTML = "No date here";
                        // display.className = "searchnodate";
                    } else {
                        // console.log("what");
                        searchspanarrayoutput[i].style.display = "list-item";
                        searchvalidation.className = "searchvalidation"
                    }
                }
            }else{
                searchvalidation.className="searchvalidationempty";
            }
        })