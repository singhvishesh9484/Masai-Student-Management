
  let arr=JSON.parse(localStorage.getItem("MasaiStudent"))||[];

  let counter=document.createElement("h2")
  counter.innerText=`Total student are ${arr.length}`;
  document.getElementById("counter").append(counter)

  arr.map(function(el,index){

      let box= document.createElement("div");

      let images=document.createElement("img");
      images.src=el.image;

      let name=document.createElement("p");
      name.innerText=`Name: ${el.name}`;

      let course=document.createElement("p");
      course.innerText=`Course: ${el.course}`;

      let unit=document.createElement("p");
      unit.innerText=`Unit: ${el.unit}`;

      let batch=document.createElement("p");
      batch.innerText=`Batch: ${el.batch}`;

      let Remove=document.createElement("button");
      Remove.setAttribute("id","remove");
      Remove.innerText="Remove";

      Remove.addEventListener("click",function(){
      removed(el,index)
      });

      box.append(images,name,course,unit,batch,Remove);

      document.querySelector("#container").append(box);

      
      function removed(el,index){
         arr.splice(index,1);
         localStorage.setItem("MasaiStudent",JSON.stringify(arr));
         window.location.reload()
       }
      
  });
