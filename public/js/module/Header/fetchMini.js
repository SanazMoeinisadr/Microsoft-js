const fetchData = async ()=>{

       try {
              
              let res = await fetch("https://sanazmoeinisadr.github.io/Microsoft-api/mini.json")

              let jsonOut = await res.json()

              let divRow = document.createElement('div')

              divRow.classList.add('row','m-0','flex-row','justify-content-center','align-items-center')

              document.querySelector('div.mini').appendChild(divRow)

              let output = await jsonOut.map(elem =>{

                     return `
                            
                     <div class="d-flex flex-column align-items-center w-auto mx-4 my-3 p-0">

                            <img src=${elem.url} alt="1" class="mini">

                            <a href="#">
                                   ${elem.title}
                            </a>

                     </div>
                            
                            
                     `

              }).join("")

              document.querySelector('div.mini>div.row').innerHTML += output
       
       }catch (error) {

              throw error

       }
              
}

export default fetchData