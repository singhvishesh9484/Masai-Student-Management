
let arr=JSON.parse(localStorage.getItem("MasaiStudent"))||[];

function Student(n,c,i,im,b){
    this.name=n;
    this.course=c;
    this.unit=i;
    this.image=im;
    this.batch=`FT-WEB-${b}`;
    
}

function MStudent(e){
      e.preventDefault();
      
    let form=document.getElementById("student")
 
    let name=form.name.value;
  
    let course=form.course.value;

    let unit=form.unit.value;
  
    let image=form.image.value;
  
    let batch=form.batch.value;

    let detail=new Student(name,course,unit,image,batch)
 
  arr.push(detail);
  //console.log(arr);
  localStorage.setItem("MasaiStudent",JSON.stringify(arr));
}

function calculate(){
  
  let arr=JSON.parse(localStorage.getItem("MasaiStudent"))||[];

  let obj={};

  for(let i=0; i<arr.length; i++ ){
    if(!obj[arr[i].batch]){
      obj[arr[i].batch]=0;
    }
  }

  for(let i=0; i<arr.length; i++ ){
      obj[arr[i].batch]++
  }
  console.log(obj)

  for(let keys in obj){
    //console.log(keys, obj[keys])

    let total=document.createElement("h2")

    total.innerText=`${keys+"-"+obj[keys]}`;
    document.getElementById("navbar").append(total)

  }
}
calculate()


