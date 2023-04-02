function addEvent(){
    document.getElementById('error').innerHTML="";
    let name=document.getElementById('name').value;
    if(name=='')
    {
        document.getElementById('error').innerHTML="Enter event name please.";
    }
    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');// for the data and event name
        li.textContent=name;// assigned in here

        let a=document.createElement('a');        
        a.textContent="X";//using the X text to get clicked and then using void(0) to not redirect
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        
        let pos=box.firstElementChild;
        if(pos==null)
        {
            box.insertBefore(li,pos);
        }
        else{
            box.appendChild(li);
        }

        // li.textContent=name;
        // box.appendChild(li);
    }
    document.getElementById('name').value="";
}
let button=document.querySelector('ul');
button.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;// removes li item, which is parent node when clicked
    box.removeChild(li);
})