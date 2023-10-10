//document.writeln("Hello, Javascript !");
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
        <thead style='font-weight: bold;'>
            <tr>
                <td>Họ Tên</td>
                <td>Tuổi</td>
                <td>ĐTB</td>
            </tr>
        </thead>
        <tbody>`;
    for(let v of data)
        result += `
            <tr>
                <td>`+v[0]+`</td>
                <td>`+v[1]+`</td>
                <td>`+v[2]+`</td>
            </tr>`
    result +=  `</tbody>
    </table>
    `;
    return result;
}

document.writeln(PrintData(sv));