const img = document.getElementById("image");
const Uname = document.getElementById("Uname");
const Fname = document.getElementById("name");
const E_mail = document.getElementById("email");
const TheLocation = document.getElementById("location");
const gitnum = document.getElementById("gistNum");
const Title = document.getElementById("title");
document.getElementById("btn1").addEventListener("click", function(){ 
    let username = document.getElementById("userNameSearch");
    
    fetch(`https://api.github.com/users/${username.value}`)
    .then((response) => {
        console.log(response);
        return response.json()})
        .then((data) => { 
            console.log(data)
            img.src = data.avatar_url;
            Uname.innerText = "User name: " + data.login;
            Fname.innerText = "Full name : " +data.name;
            TheLocation.innerText = "Location: " + data.location;
            gitnum.innerText = "number of gists : " +data.public_gists;
            
            if (data.email == null) {
                E_mail.innerText = " Email : N/A";
            }
            else {
                E_mail.innerText = " Email : " + data.email;
            }       
        }) 

        .catch((error) => { 
                Title.innerText = error;
        })

        fetch(`https://api.github.com/users/${username.value}/repos`)
        .then((response) => {
        return response.json()})
        .then((data) => {
            console.log(data);
            
            let html = "";

            data.forEach((i)=> {
                html += `
                <div id="RepoInfo">
                    <div id="repoName">${i.name}</div>
                    <div id="repoDescription">${i.description}</div>
                </div>`  
            })

            let repositorySetup = document.getElementById("RepoContainer"); 
            repositorySetup.innerHTML = html;
           
        })
    });