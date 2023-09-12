const fetchData = async ()=>{

       try {

              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/end.json")

              let jsonOut = await res.json()

              let output = await jsonOut.map(elem =>{

                     return `
                            
                            <a href="#" class="w-auto text-decoration-none p-0 ">
                                   ${elem.description}
                            </a>
                     `
              
              }).join("")

              document.querySelector('div.end>div.last').innerHTML += output

       } catch (error) {

              throw error

       }
}

export default fetchData