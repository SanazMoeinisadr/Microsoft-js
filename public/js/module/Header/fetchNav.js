const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/nav.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                     
                                   <ul class="navbar-nav me-auto mt-2 mt-lg-0 d-lg-flex">
                                          <li class="nav-item">
                                                 <a class="nav-link active" href="#">
                                                        ${elem.title}
                                                 </a>
                     
                                          </li>
                                    </ul>
                          
                     
                     
                     `
              
              }).join("")

              document.querySelector('div.collapse').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData