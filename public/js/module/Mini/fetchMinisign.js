const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/Minisign.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                                   <a class="matnsing d-flex flex-row gap-3 text-decoration-none">
         
                                          <span class="d-none d-xl-inline-block">
                                                 ${elem.title}
                                          </span>
         
                                          <img src=${elem.url} alt="">
         
                                   </a>
         
                           
                    
                     `

              }).join("")

              document.querySelector('div.signin1').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData