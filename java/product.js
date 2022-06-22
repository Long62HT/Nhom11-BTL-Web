const product = [
    {
        name:"Combo Bình An",
        price:329000,
        img:"./image/img-quatang/App.theenergyoflove03-800x800-1-400x400.jpg",
        link:"../chitietSpQuatang/quatang1.html"
    },
    {
        name:"Combo Chia Sẻ",
        price:249000,
        img:"./image/img-quatang/chiase-400x400.jpg",
        link:"../chitietSpQuatang/quatang2.html"
    },
    {
        name:"Combo Năng Lượng",
        price:189000,
        img:"./image/img-quatang/Combo-4-copy-400x400.jpg",
        link:"../chitietSpQuatang/quatang3.html"
    },
    {
        name:"Combo Yêu Thương",
        price:289000,
        img:"./image/img-quatang/Combo-5-copy-400x400.jpg",
        link:"../chitietSpQuatang/quatang4.html"
    },
    {
        name:"Combo Gắn Kết",
        price:189000,
        img:"./image/img-quatang/ganket-400x400.jpg",
        link:"../chitietSpQuatang/quatang5.html"
    },
    {
        name:"Bộ Quà Tặng Trung Nguyên Legend",
        price:2180000,
        img:"./image/img-quatang/Hop-Qua-ABCD.jpg",
        link:"../chitietSpQuatang/quatang6.html"   
    }
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
    <a href="${e.link}" style="text-decoration: none; color: #000;">
        <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
        <h6>
            ${e.name}
        </h6>
    </a>
        <h6>
        <strong> ${e.price}₫</strong>
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
        <a href="${e.link}" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
            <strong> ${e.price}₫</strong>
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
        <a href="${e.link}" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
            <strong> ${e.price}₫</strong>
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
        <a href="${e.link}" style="text-decoration: none; color: #000;">
            <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src="${e.img}"/>
            <h6>
                ${e.name}
            </h6>
        </a>
            <h6>
               <strong> ${e.price}₫</strong>
            </h6>
        </div>
    `
        })
        document.querySelector(".showProduct").innerHTML = htmls.join('')
    }
})
// `
// <div class="col-md-3 box_css text-center">
// <link rel="stylesheet" href="">
// <a href="${e.link}" style="text-decoration: none; color: #000;">
// <img class="image" style="width: 70%;" alt="Bootstrap Image Preview" src=${e.img}/>
// <h6>
//     ${e.name}
// </h6>
// </a>
// <h6>
//     ${e.price}
// </h6>
// </div>
// `
