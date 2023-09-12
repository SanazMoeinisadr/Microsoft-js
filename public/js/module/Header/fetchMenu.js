const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/menu.json")

              let jsonOut = await res.json()

              let dropOut = await jsonOut.map(elem=>{
                     if(elem.bigTitle){

                            return `
                            <a class="nav-link dropdown-toggle" a href="#" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
         
                                   ${elem.bigTitle}
         
                            </a>`

                     }
              }).join('')

              let output = await jsonOut.map(elem =>{


                     


                     return `
                            
                                   

                                          <div class="d-flex flex-column  p-0">

                                                 <div class="matnn text-decoration-none ps-4   fw-bold text-dark py-3">

                                                        ${elem.dropdown[0].title}
                                                 </div>

                                                        

                                                 ${elem.dropdown.map(elem=>{

                                                        if(elem.description){
                            
                                                               return `
                                                               <a href="#" class="text-decoration-none text-dark py-3 ps-4">

                                                                      ${elem.description}

                                                               </a>`
                            
                                                        }
                            
                                                 }).join("")}
                                                                      
                                          </div>
                     `
              }).join("")

              let akharOut = await jsonOut.map(elem=>{
                     if(elem.siteMap){
                            return `
                            <div class="akhar row m-0 p-0 justify-content-center align-items-center">
                                   <a href="#" class="text-decoration-none text-dark p-0 text-center">
                                          ${elem.siteMap}
                                   </a>
                            </div>`
                     }
              }).join('')

              document.querySelector('div.dropdown').innerHTML += dropOut
              document.querySelector('div.dropdown>div.safhe1>div.safhe').innerHTML += output
              document.querySelector('div.dropdown>div.safhe1').innerHTML += akharOut

       } catch (error) {

              throw error

       }
}

export default fetchData