const product = [
    {
        name:"Bộ Quà Tặng Trung Nguyên Legend",
        price: 2180000,
        img:"../image/img-cafeDonggoi/24-goi-mang-400x400.jpg"
    },
    {
        name:"Cà Phê Drip 1 – Culi Robusta",
        price:179500,
        img:"../image/img-cafeDonggoi/9-goi-mang-400x400.jpg"
    },
    {
        name:"Cà Phê Espresso Buôn Ma Thuột",
        price: 179000,
        img:"../image/img-cafeDonggoi/Buon-Ma-Thuot-1-400x400.png"
    },
    {
        name:" Cà Phê Chế Phin 1",
        price: 104500,
        img:"../image/img-cafeDonggoi/CP-1-300x300.jpg"
    },
    {
        name:"Cà Phê Chế Phin 2",
        price:120000,
        img:"../image/img-cafeDonggoi/CP-2-300x300.jpg"
    },
    {
        name:"Cà Phê Chế Phin 3",
        price:141000,
        img:"../image/img-cafeDonggoi/CP-3-300x300.jpg"   
    },
    {
        name:"Cà Phê G7 hòa tan đen",
        price:27000,
        img:"../image/img-cafeDonggoi/G7-hoa-tan-den-15-goi-400x400.jpg"   
    },
    {
        name:"Cà Phê G7 3in1 – Hộp 18 Sticks",
        price:54500,
        img:"../image/img-cafeDonggoi/G7-Hop-18st-1-400x400.jpg"   
    },
    {
        name:"Cà Phê Gourmet Blend",
        price:111500,
        img:"../image/img-cafeDonggoi/Gourmet-Blend-final-400x400.png"   
    },
    {
        name:"Cà Phê G7 3in1 – Bịch 50 Sachets",
        price:135500,
        img:"../image/img-cafeDonggoi/HinhRetail-15-400x400.jpg"   
    },
    {
        name:"Cà Phê G7 3in1 – Hộp 21 Gói",
        price: 60000,
        img:"../image/img-cafeDonggoi/HinhRetail-18-400x400.jpg"   
    },
    {
        name:"Cà phê hòa tan G7 Gu mạnh X2",
        price: 53500,
        img:"../image/img-cafeDonggoi/HinhRetail-20-400x400.jpg"   
    },
];

const defaultProduct = product.slice(0, product.length);
console.log(defaultProduct);

const btnUp = document.querySelector('.sort_btn_up')
const btndDwn = document.querySelector('.sort_btn_down')

window.addEventListener("DOMContentLoaded",defaultData(product))

function defaultData(data){
    let htmls = data.map(e=>{
        return`
        <div class="col-md-3 box_css text-center">
        <link rel="stylesheet" href="">
    <a href="#" style="text-decoration: none; color: #000;">
        <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
        <h6>
            ${e.name}
        </h6>
    </a>
        <h6>
            ${e.price}₫
        </h6>
    </div>
`
    })
    document.querySelector(".showProduct").innerHTML = htmls.join('')
}


function down(data){
    for(let i=0;i<data.length;i++){
        for(let j=i+1; j<data.length;j++){
            if(data[i].price<data[j].price){
                let sort = data[i];
                data[i] = data[j];
                data[j] = sort;
            }
        }
    }
    return data;
    console.log(data);
}

function up(data){
    for(let i=0;i<data.length;i++){
        for(let j=i+1; j<data.length;j++){
            if(data[i].price>data[j].price){
                let sort = data[i];
                data[i] = data[j];
                data[j] = sort;
            }
        }
    }
    return data;
    console.log(data);
}



document.querySelector('select').addEventListener('change',e=>{
    if(e.target.value==="up"){
        up(product);
        let htmls = product.map(e=>{
            return `
            <div class="col-md-3 box_css text-center">
            <link rel="stylesheet" href="">
        <a href="#" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
                ${e.price}₫
            </h6>
        </div>
    `
        })

        document.querySelector(".showProduct").innerHTML = htmls.join('')
    }

    // else if(e.target.value==="")
})

document.querySelector('select').addEventListener('change',e=>{
    if(e.target.value==="down"){
        down(product);
        let htmls = product.map(e=>{
            return`
            <div class="col-md-3 box_css text-center">
            <link rel="stylesheet" href="">
        <a href="#" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
                ${e.price}₫
            </h6>
        </div>
    `
        })
        document.querySelector(".showProduct").innerHTML = htmls.join('')
    }
    else if(e.target.value==="menu_order"){
        let htmls = defaultProduct.map(e=>{
            return`
            <div class="col-md-3 box_css text-center">
            <link rel="stylesheet" href="">
        <a href="#" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
                ${e.price}₫
            </h6>
        </div>
    `
        })
        document.querySelector(".showProduct").innerHTML = htmls.join('')
    }
})