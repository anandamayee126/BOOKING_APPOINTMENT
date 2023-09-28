const ul = document.querySelector('ul')


window.addEventListener('load' ,async ()=>{
    const response = await axios.get('http://localhost:8000/user');
    console.log(response)
    response.data.users[0].forEach(user =>{
        display(user);
    })

})  




function login(event) {
    event.preventDefault();
    const name= event.target.name.value;
    const email= event.target.email.value;
    const phone= event.target.phone.value;
    const user={
        name: name,
        email: email,
        phone: phone
    }
    axios.post('http://127.0.0.1:8000/user/login', user).then((user)=>{
       console.log(user)
       display(user);
    })
}

function display(data){
    // id name email phone
    const li = document.createElement('li');
    // 3 spans , 1 st name  ,2nd span email 3 rd phone 
        // delete.id = id
        console.log(data)
        const span1= document.createElement('span');
        const span2= document.createElement('span');
        const span3= document.createElement('span');
        span1.textContent = data.NAME;
        span2.textContent = data.EMAIL;
        span3.textContent= data.PHONE;

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(span3);

        const button= document.createElement('button');
        button.textContent = "DELETE";
        button.onclick  =()=>{
            axios.delete('http://localhost:8000/user/delete/' + data.ID)
            .then((res)=>{
                if(res.status == 200)
                    ul.removeChild(li)
                
            })
            .catch(e => console.log(e))
        }
        li.appendChild(button);
        ul.appendChild(li);
}
