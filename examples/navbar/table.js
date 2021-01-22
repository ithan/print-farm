

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
    },
    {
        "_id": 3,
        "name" : "Prusament Galaxy Purple",
        "quantity" : 2,
        "availability" : 'false'
    },
    {
        "_id": 4,
        "name" : "Prusament Jet Blac",
        "quantity" : 111,
        "availability" : 'false'
    },
    {
        "_id": 5,
        "name" : "Prusament Ms. Pink",
        "quantity" : 3,
        "availability" : 'true'
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
    filamentList.length
)


for(
    let counter = 0;
    counter < filamentList.length;
    counter++
)
{
    let firstRowContent = generateRow(filamentList[counter]);
    table.innerHTML += firstRowContent;
}