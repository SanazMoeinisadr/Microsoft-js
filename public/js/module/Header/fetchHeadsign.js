const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/Headsign.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                            <div button type="button" class="signin mx-2" data-bs-toggle="modal" data-bs-target="#signin1">

                                   <a class="matnsing d-flex flex-row gap-3 text-decoration-none">
         
                                          <span class="d-none d-xl-inline-block">
                                                 ${elem.title}
                                          </span>
         
                                          <img src=${elem.url} alt="">
         
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