const product = [
    {
        name:" Bình Thể Thao Trung Nguyên E-Coffee (Xám)",
        price: 70000,
        img:"../image/img-vpThuonghieu/Binh-The-Thao-Den-final-300x300.jpg"
    },
    {
        name:"Bình Thể Thao Trung Nguyên E-Coffee (Trắng)",
        price:80000,
        img:"../image/img-vpThuonghieu/Binh-The-Thao-Trang-final-300x300.jpg"
    },
    {
        name:"Bình Giữ Nhiệt Trung Nguyên Legend – Đen",
        price: 350000,
        img:"../image/img-vpThuonghieu/Den-400x400.jpg"
    },
    {
        name:"Túi Vải Canvas",
        price: 55000,
        img:"../image/img-vpThuonghieu/eb7f0550a33754690d2615-400x400.jpg"
    },
    {
        name:"Phin Nhôm Trống Đồng",
        price:49000,
        img:"../image/img-vpThuonghieu/Phin-nhôm-Trống-Đồng-400x400.png"
    },
    {
        name:"Phin Nhôm Vĩ Nhân",
        price:69000,
        img:"../image/img-vpThuonghieu/Phin-nhôm-vĩ-nhân-400x400.png"   
    },
    {
        name:"Bình Giữ Nhiệt Trung Nguyên Legend – Trắng",
        price:350000,
        img:"../image/img-vpThuonghieu/Trang-400x400.jpg"   
    },
    {
        name:" Bình Giữ Nhiệt Trung Nguyên Legend – Bạc",
        price:350000,
        img:"../image/img-vpThuonghieu/Xam-400x400.jpg"   
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