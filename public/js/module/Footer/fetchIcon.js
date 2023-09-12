const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/icon.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem=>{


                     return `
                            <div class="w-auto">
                                   ${elem.title}
                            </div>
                            <div class="ax d-flex flex-row w-auto m-0 p-0">
                                   <a href="#" class="ax2">
                                          <img src=${elem.faceUlr} alt="1" class="img-fluid">
                                   </a>
                                   <a href="#" class="ax2">
                                          <img src=${elem.linkUrl} alt="2" class="img-fluid">
                                   </a>
                                   <a href="#" class="ax2">
                                          <img src=${elem.twUrl} alt="3" class="img-fluid">
                                   </a>
                            </div>
                                   
                            `
                            
                    
                     
              }).join("")
              
              document.querySelector('div.icon>div.row').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData