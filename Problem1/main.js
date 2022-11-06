
function validateInput(name,email,mobile)
{
       if(name.length===0)
       {
           error.innerHTML = "Name cannot be empty"
           return false
       }
       else if(name.length>20)
       {
       error.innerHTML = "Name is to long keep it under 20."
       return false
       }
       else if(!name.match(alphabetLetter))
       {
       error.innerHTML = "Name only lettters of the alphabet please."
       return false
       }
       else if(mobile.length===0)
       {
       error.innerHTML = "Mobile can not be empty"
       return false
       }
       else if(mobile.length!==10)
       {
       error.innerHTML = "Mobile number must be 10 numbers long"
       return false
       }
       else if(email.length===0)
       {
       error.innerHTML = "Email can not be empty and must include @ "
       return false
       }
       else if(email.length>=40)
       {
       error.innerHTML = "Email to long keep it under 40"
       return false
        }
       else
       {
           error.innerHTML = ""
           return true;
       }
      
}