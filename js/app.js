

const AiData = async (fieldValue) => {


    // .then(res => res.json())
    // .then(data => console.log(data.data))

    const GetData = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)


    const jsonData = await GetData.json();

    const dataEntire = await jsonData.data;
    const data = dataEntire.tools


    displayData(data);



}


// display the data function




const displayData = (data) => {

    const cardContainer = document.getElementById("card-container");


    data.forEach(aiData => {
        // console.log(aiData)


        const card = document.createElement('div');
        card.setAttribute('class', 'overflow-hidden transition-shadow p-6 duration-300  bg-white rounded');

        card.innerHTML = `
    
    


   <div>
  <img
   src="${aiData?.image}"
   class="object-cover w-full h-64 rounded" alt="" />
<div class="py-5">

<a href="/" aria-label="Article"
   class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
   <p class="text-2xl font-bold leading-5">Features</p>
</a>
<p class="mb-4 text-gray-700"> ${aiData?.description|| 'not Available Description'}</p>


   </div>
         

   <hr>

   <div class='flex justify-between items-center mt-6'>

<div class='space-y-5'>
<p class="text-2xl font-bold leading-5">${aiData.name}</p>

<p class=" text-xs font-semibold text-gray-600 uppercase">published:${aiData.published_in}</p>
</div>





<div     onclick="cardClick('${aiData.id}')"  class='cursor-pointer'>


<i class="fa-solid fa-arrow-right bg-[#FEF7F7] rounded-full text-orange-600  p-5"></i>
      

</div>


  
      
        </div>
    </div>


    
    `

        cardContainer.appendChild(card)


    })
 


}




// card click function



const cardClick = async (id) => {


  const loadingDetails=  document.getElementById('loadingDetails');

loadingDetails.classList.remove('hidden');
    const detailsDataFetch = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)


    const jsonDetails = await detailsDataFetch.json();

    const allData = jsonDetails.data;
    console.log(jsonDetails)

    detailsProduct.showModal()
    showDetails(allData)
}



const showDetails = (allData) => {

    const modal = document.getElementById('main-modal-box');

    console.log(allData.tool_name)

    modal.innerHTML = `
    <div class="flex flex-col md:flex-row  justify-evenly  ">

    <div class='flex-1 bg-[#d1a5a532]  md:mr-5 p-8'>
    
   <h1 class ='text-2xl font-semibold'>${allData.description}</h1>
   
   <div class="flex flex-col md:flex-row  justify-around items-center my-6">
   
      <div  class='  bg-slate-200 text-center  p-2  w-[130px] h-20 text-green-600' > ${allData.pricing[0].price}/ <br/> ${allData.pricing[0].plan}<br/></div>
      <div class='   bg-slate-200 text-center  p-2 w-[130px] h-20 text-orange-600' > ${allData.pricing[1].price}/ <br> ${allData.pricing[1].plan}</div>
      <div class='   bg-slate-200 text-center  p-2 w-[130px] h-20 text-red-600' > ${allData.pricing[2].price}/<br/>${allData.pricing[2].plan}<br/></div>
   
   </div>
   
   
   
   <div class="flex  flex-col md:flex-row justify-between">
   
      <div>
     
   
          <h1 class='text-2xl font-extrabold'>Features</h1>
          <ul>
           <li>${allData.features[1].feature_name}</li>
           <li>${allData.features[2].feature_name}</li>
           <li>${allData.features[3].feature_name}</li>
          </ul>
     </div>
   <!-- second -->
      <div>
          <h1 class='text-2xl font-extrabold'>Integrations</h1>
          <ul>
          <li>${allData.integrations[0]}</li>
          <li>${allData.integrations[1]}</li>
          <li>${allData.integrations[2]}</li>
         </ul>
      </div>
   
   </div>
   
   
   
   
   
   
   
   
   
   </div>
    
    
   
   <!-- second -->
   
   <div class='flex-1'>
   
   <div class="card">
   
   <div class='relative'>
   <img src="${allData.image_link[0]}" alt="">

      <div class='  absolute top-0 right-1 bg-orange-600 pr-6 text-white p-2 font-bold'>
      ${allData.accuracy.score}
      </div>
   </div>
      <h1>${allData.input_output_examples[0].input}</h1>
   <p>${allData.input_output_examples[0].output}</p>
   </div>
   
   </div>
   
   
   
   
   
   
   </div>


   <div class="modal-action">
   <!-- if there is a button in form, it will close the modal -->
   <button class="btn">Close</button>
</div>
 


`
        ;
        const loadingDetails=  document.getElementById('loadingDetails');

        loadingDetails.classList.add('hidden');

}











// search function




const searchBtn = () => {


    const field = document.getElementById("searchField");
    const fieldValue = field.value;


    AiData(fieldValue)

  
}


console.log(AiData())