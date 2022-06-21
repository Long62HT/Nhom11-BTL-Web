// const data = [
//     {
//         name:"longdepzaibodoi",
//         email:"congchuabongbong@yahoo.com",
//         password:'anhchangdepzai'
//     },
    
// ]

const addbtn=document.getElementById("create")
const input = document.querySelectorAll(".form-control")
const tBody = document.querySelector('tbody')

// Lay data tu LocalStorage;
const itemsUser = JSON.parse(localStorage.getItem('data'))
console.log(itemsUser);


  window.addEventListener('DOMContentLoaded',renderHtml(itemsUser))


// Event luc load trang web lan dau


// Ngan chan su kien reload khi submit form
document.querySelector("form").addEventListener("submit",e =>{
    e.preventDefault();
});

// Luu data vao localstorage
function saveItems(items){
    return localStorage.setItem('data',JSON.stringify(items));
}

// Them data vao localstorage
addbtn.addEventListener("click",function(){
    let user_name = input[1].value
    let email = input[2].value
    let password = input[3].value

    let item={
        name:user_name,
        email:email,
        password:password
    }

    itemsUser.push(item);
    renderHtml(itemsUser);
    saveItems(itemsUser)
    // console.log(email);
})


// Xuat data ra UI
function renderHtml(data){
    let htmls = data.map((e,index)=>{
        return `
        <tr>
        <td>
          ${index+1}
        </td>
        <td>
          ${e.name}
        </td>
        <td>
        ${e.email}
        </td>
        <td>
        ${e.password}
        </td>
        <td>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
          </svg></button>  
        </td>
        <td>
          <button class="delBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </td>
      </tr>
        `
    })

    tBody.innerHTML = htmls.join('')
}


const deleteBtn = document.querySelectorAll('.delBtn');


// Xoa dữ liệu
deleteBtn.forEach(e=>{
  e.addEventListener('click',el=>{
    console.log(e);
    let item = e.parentElement.parentElement;
    console.log(item);
    // Lấy vị trí cần xóa
    let index = item.querySelectorAll('td')[0];
   
    item.remove();
    itemsUser.splice(index-1,1)
    saveItems(itemsUser)
    // renderHtml(itemsUser)
    
  })
})

