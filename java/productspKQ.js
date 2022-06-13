const product = [
    {
        name:"Chiến Tranh Tiền Tệ",
        price: 138000,
        img:"../image/img-Tusach/97476627_3095602150478764_5421794692440260608_n-400x400.jpg"
    },
    {
        name:"Bàn Về Khế Ước Xã Hội",
        price:125000,
        img:"../image/img-Tusach/Bàn-Về-Khế-Ước-Xã-Hội-400x400.jpg"
    },
    {
        name:"Chính Trị Luận",
        price: 169000,
        img:"../image/img-Tusach/Chính-Trị-Luận-1-300x300.jpg"
    },
    {
        name:" Quân Vương Thuật Cai Trị",
        price: 109000,
        img:"../image/img-Tusach/Quân-Vương-Thuật-Cai-Trị-400x400.jpg"
    },
    {
        name:"Sự Va Chạm Giữa Các Nền Văn Minh Và Sự Tái Lập Trật Tự Thế Giới",
        price:209000,
        img:"../image/img-Tusach/Sự-Va-Chạm-Giữa-Các-Nền-Văn-Minh-Và-Sự-Tái-Lập-Trật-Tự-Thế-Giới-400x400.jpg"
    },
    {
        name:" Trật Tự Thế Giới",
        price:209000,
        img:"../image/img-Tusach/Trật-Tự-Thế-Giới-300x300.jpg"   
    },
    {
        name:"Tương Lai Của Quyền Lực",
        price:135000,
        img:"../image/img-Tusach/Tương-Lai-Của-Quyền-Lực-300x300.jpg"   
    },
    {
        name:"Văn Minh Phương Tây Và Phần Còn Lại Của Thế Giới",
        price:189000,
        img:"../image/img-Tusach/Văn-Minh-Phương-Tây-Và-Phần-Còn-Lại-Của-Thế-Giới-400x400.jpg"   
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