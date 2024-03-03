export default function Data({name,id}){
    return(
        <div className="border border-black rounded px-4 py-2">
            <h2>{name}</h2>
            <p>ID: {id}</p>
        </div>
    )
}