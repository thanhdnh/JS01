//https://github.com/thanhdnh/JS01
let sv = new Array(
    new Array("Nam", 20, 7.7),
    new Array("Hoa", 22, 8.3),
    new Array("Tuan", 19, 6.7),
    new Array("Mai", 21, 6.9),
    new Array("Linh", 23, 9.1)
);

function PrintData(data){
    let result = `
    <table border='1'>
        <thead>
            <tr>
                <th>Họ Tên</th>
                <th>Tuổi</th>
                <th>ĐTB</th>
            </tr>
        </thead>
        <tbody>`;
    for(let v of data)
        result += `
            <tr>
                <td>`+v[0]+`</td>
                <td>`+v[1]+`</td>
                <td>`+v[2]+`</td>
            </tr>`;
    result +=  `
        </tbody>
    </table>
    `;
    return result;
}

document.writeln(PrintData(sv));

//======================
let mymenu = {
    "laptop": new Array(
        "Dell", "Sony", "Acer", "Asus", "Apple"
    ),
    "smartphone": new Array(
        "iPhone", "Galaxy S", "Sony Xperia"
    ),
    "tablet": new Array(
        "Sony Z", "Galaxy Tab", "iPad"
    )
};