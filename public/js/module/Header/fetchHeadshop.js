const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/Headshop.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                     
                     <div class="cart mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom">
                     
                            <a class="nav-link d-flex flex-row gap-1" href="#">

                                   <span class="d-none d-xl-inline-block ">
                                          ${elem.crtTitle}
                                   </span>
       
                                   <img src=${elem.url} alt="cart">
       
                            </a>

                     </div>
                            
                     `

              }).join("")

              document.querySelector('div.right').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData