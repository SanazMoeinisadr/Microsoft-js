const fetchData = async ()=>{
      
       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/Headsearch.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            <div class="search mx-2 d-flex" data-bs-toggle="tooltip" data-bs-placement="bottom">

                                   <a class="nav-link d-flex flex-row gap-1" href="#">
         
                                          <span class="d-none d-xxl-inline-block">
                                                 ${elem.srchTitle}
                                          </span>
         
                                          <img src=${elem.url} alt="">
         
                                          <input type="text" name="search" id="search" placeholder="" />
         
                                   </a>
                            </div>
                     
                     `

              }).join("")

              document.querySelector('div.right').innerHTML += output

       } catch (error) {
              
       }
}

export default fetchData