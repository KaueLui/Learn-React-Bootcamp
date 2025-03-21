import "./style.css"

function Title({children, color}){
    return(
        <div>
        <h1 style={{color: color}}>Olá {children}</h1>
        </div>
    )
}

export default Title;