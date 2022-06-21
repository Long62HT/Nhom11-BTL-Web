const product = [
    {
        name:"Bạc Xỉu – 250ml ≈ 3ly",
        price:55,
        img:"../image/img-cafechai/Bac-Xiu-250ml-400x400.jpg",
        link:"../chitietcfChai/chitietCfChai.html"
    },
    {
        name:"Bạc Xỉu – 330ml ≈ 4ly",
        price:65,
        img:"../image/img-cafechai/BX-copy-400x400.jpg",
        link:"../chitietcfChai/chitietCfChai2.html"
    },
    {
        name:"Cà Phê Đen Hạt Mộc – 250ml ≈ 4 ly",
        price:49,
        img:"../image/img-cafechai/Den-250ml-400x400.jpg",
        link:"../chitietcfChai/chitietCfChai3.html"
    },
    {
        name:"Cà Phê Đen Hạt Mộc – 330ml ≈ 6 ly",
        price:59,
        img:"../image/img-cafechai/CFD-copy-400x400.jpg",
        link:"../chitietcfChai/chitietCfChai4.html"
    },
    {
        name:"Cà Phê Sữa Hạt Mộc – 250ml ≈ 4ly",
        price: 55,
        img:"../image/img-cafechai/Sua-250ml-400x400.jpg",
        link:"../chitietcfChai/chaitietCfChai5.html"
    },
    {
        name:"Cà Phê Sữa Hạt Mộc – 330ml ≈ 5ly",
        price: 65,
        img:"../image/img-cafechai/CFS-copy-400x400.jpg",
        link:"../chitietcfChai/chitietCfChai6.html"   
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
        <strong> ${e.price}.000₫</strong>
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
            <strong> ${e.price}.000₫</strong>
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
               <strong> ${e.price}.000₫</strong>
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
            <strong> ${e.price}.000₫</strong>
            </h6>
        </div>
    `
        })
        document.querySelector(".showProduct").innerHTML = htmls.join('')
    }
})


document.querySelector('.navbar-toggler').addEventListener('mousedown',()=>{
    document.querySelector('#navbarSupportedContent').classList.toggle('show')
})