let data = [
    { id: 1, fname: "LeBron", lname:"James" },
    { id: 2, fname: "LeBron", lname:"James" },
    { id: 3, fname: "LeBron", lname:"James" }
]

function display() {
    localStorage.setItem("object", JSON.stringify(data));
    var employeesdata = document.querySelector(".employee");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements = "";

    objectdata.map(record => (
        elements += `<tr>
                <td>${record.fname}</td>
                <td>${record.lname}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
        </tr>`
    ))

    employeesdata.innerHTML = elements;

}