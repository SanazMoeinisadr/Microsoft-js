const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api//Minishop.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                     
                            <a class="nav-link d-flex flex-row gap-1" href="#">

                                   <span class="d-none d-xl-inline-block ">
                                          ${elem.crtTitle}
                                   </span>
       
                                   <img src=${elem.url} alt="cart">
       
                            </a>
                            
                     `

              }).join("")

              document.querySelector('div.cart').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData