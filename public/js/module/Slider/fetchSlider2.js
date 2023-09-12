const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/slider2.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem=>{

                     if (elem.type ==="slideFirst") {
                            return `
                                   <div class="carousel-inner">
                                          <div class="carousel-item active">
                                                 <img src=${elem.slideUrl} class="d-block w-100" alt=>
                                          </div>
                            `
                            
                     } else if (elem.type ==="slideSecond") {
                            return `
                                          <div class="carousel-item">
                                                 <img src=${elem.slideUrl} class="d-block w-100" alt=>
                                          </div>
                                   </div>
                                   
                            `
                     }
                     
              }).join("")
              
              document.querySelector('#carouselExampleSlidesOnly1').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData