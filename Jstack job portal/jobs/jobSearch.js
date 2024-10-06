const catageories = Array.from(jCatagory);
document.getElementById("searchbar").addEventListener("keyup",(e) =>
{
    const searchData= e.target.value.toLowerCase();
    const filterData = catageories.filter((item) =>
    
        item.title.toLowerCase().includes(searchData)
    );
    displayItems(filterData);
});
const displayItems = (items) => {
    const rootELement =document.getElementById("root")
    rootELement.innerHTML= "";
    items.forEach((item) => {
        const {index,image,title,rate,av} =item;
        const jList =document.createElement("div");
        jList.className ="jList";
        jList.innerHTML = `
    <img src="${image}" alt""> 
    <h3>${title}</h3> 
    <p>${rate}</p> 
    <span id="key">${av}</span>
`;
          rootELement.appendChild(jList);
        jList.addEventListener("click" ,()=>
        {
            window.location.href=`job-details.html?id=${index}`;
        });
    });
};
displayItems(catageories);