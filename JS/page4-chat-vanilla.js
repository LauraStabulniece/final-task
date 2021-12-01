



document.getElementById('add-new-msg').addEventListener('click', function() {


        const usernameInput = document.getElementById('username');
        const taskInput = document.getElementById('todo-msg');
        
        
        usernameInput.classList.remove('border')  || taskInput.classList.remove('border')
        taskInput.classList.remove('border-danger') || usernameInput.classList.remove('border-danger')

        
      
        if ((taskInput.value == '') || (usernameInput.value == '')) {
                taskInput.classList.add('border') || usernameInput.classList.add('border')  
                taskInput.classList.add('border-danger') || usernameInput.classList.add('border-danger')
                return false;
      }


Date.prototype.today = function () { 
      return ((this.getDate() < 10)?"0":"") + this.getDate() +"."+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"."+ this.getFullYear() +".";
              }              
              Date.prototype.timeNow = function () {
                  return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
             }
             var newDate = new Date();
             var timestamp = newDate.today() + "  " + newDate.timeNow();
      
        const newTask = 
        `<div class="container" style="border: none; padding: 10px 0 20px 5px; margin-top: 10px; border-top: 0.5px solid rgb(26, 61, 26);">
        
                <div class="row flex" style="margin-bottom: 20px;">
         
                        <div class="col-1" style="font-size: 14px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: rgb(26, 61, 26);"><strong>${usernameInput.value}</strong></div>

                        <div class="col-11" style="font-size: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif; padding-top:4px; color: rgb(26, 61, 26);">${timestamp}</div>


                </div>

                <div class="row">
                        <div class="col">${taskInput.value}</div>
                </div>
        </div>`;    

                
      
        document.getElementById('messages')
        .innerHTML += newTask;
      
        usernameInput.value = '';
        taskInput.value = '';
      });




      