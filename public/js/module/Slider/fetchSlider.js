const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/slider.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem=>{

                     if (elem.type ==="slideOne") {
                            return `
                                   <div class="carousel-inner">
                                          <div class="carousel-item active">
                                                 <img src=${elem.slideUrl} class="d-block w-100" alt=>
                                          </div>
                            `
                            
                     } else if (elem.type ==="slide") {
                            return `
                                          <div class="carousel-item">
                                                 <img src=${elem.slideUrl} class="d-block w-100" alt=>
                                          </div>
                                   </div>
                                   
                            `
                     }
                     
              }).join("")
              
              document.querySelector('#carouselExampleSlidesOnly').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData