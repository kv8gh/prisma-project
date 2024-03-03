export default function Post({id,title,content , authorName}){
    return(
        <div className="border border-black rounded px-4 py-2">
            <h2>{title}</h2>
            <p>ID: {id}</p>
            <h2>{authorName}</h2>
        </div>
    )
}