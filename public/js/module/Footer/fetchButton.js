const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/button.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem=>{


                     return `
                            <a href="#start" class="btn  w-auto btn-secondary ">
                                   ${elem.title}
                            </a>
                                   
                            `
                     
              }).join("")
              
              document.querySelector('div.back>div.row').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData