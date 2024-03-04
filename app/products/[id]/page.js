export default function page({params}){
    var newId = params.id
    console.log(newId);
    return(
        <main>
            {newId}
            ID: {params.id}<br/>
        </main>
    )
}