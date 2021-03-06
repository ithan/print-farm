

let table = document.getElementById("table");

const filamentList = [
    {
        "_id": 1,
        "name" : "Prusament Prusa Orange",
        "quantity" : 7,
        "availability" : 'true'
    },
    {
        "_id": 2,
        "name" : "Prusament Galaxy Silver",
        "quantity" : 8,
        "availability" : 'false'
    }
];



function generateRow(filamentInfo){
    /* 
        filamentInfo = { "_id": 1,"name" : "Prusament Prusa Orange","quantity" : 7,"availability" : true }
        filamentInfo._id |  filamentInfo.name | filamentInfo.quantity | filamentInfo.availability
    */

    /*
        Must return
        <tr>
            <td>Prusament Prusa Orange</td>
            <td>7</td>
            <td>true</td>
        </tr>
    */

    // `${variableName} ` 
    let returnRow = `
        <tr>
            <td>${filamentInfo.name}</td>
            <td>${filamentInfo.quantity}</td>
            <td>${filamentInfo.availability}</td>
        </tr>
    `;
    
    return returnRow;
}
console.log(
    generateRow(
        filamentList[0]
    )
)