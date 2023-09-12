const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/post2.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                     
                            <div class="card border-0 rounded-0 mb-xl-0 mb-5">
                                   <img class="card-img-top w-100 rounded-0" 
                                   src=${elem.url} alt="Card image">

                                   <div class="card-body px-0">
                                          <h4 class="card-title fw-bold mb-4">
                                                 ${elem.title}
                                          </h4>
                                          <p class="card-text">
                                                 ${elem.description}
                                          </p>
                                          <a href="#" class="btn btn-primary">
                                                 ${elem.shBtn}
                                          </a>
                                   </div>
                            </div>
                            
                     `

              }).join("")

              document.querySelector('div.cart2>div.row').innerHTML += output

              
       } catch (error) {

              throw error

       }

}

export default fetchData