export default function info({name,id}){
    console.log('ke',name);
    console.log(name);
    console.log(id);
    return(
        <div className="border border-black rounded px-4 py-2">
            <h1>{name}</h1>
            <p>ID: {id}</p>
        </div>
    )
}