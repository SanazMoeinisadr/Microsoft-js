const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/footer.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem=>{


                     return `
                     <div class="ul d-flex flex-column">
                     
                            <span class="text-decoration-none fw-bold pb-1">
                                   ${elem.col[0].title}
                            </span>

                            ${elem.col.map(elem=>{

                                   if(elem.description){

                                          return `
                                          <a href="#" class="text-decoration-none py-2">
                                                 ${elem.description}
                                          </a>
                                          `

                                   }

                            }).join("")}

                     </div>`
                     
              }).join("")
              
              document.querySelector('footer > div.matn').innerHTML = output

       } catch (error) {

              throw error

       }
}

export default fetchData