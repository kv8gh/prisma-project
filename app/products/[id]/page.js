import Navbar from '@/app/components/navbar';
import ProductDetailCard from "@/app/components/ProductDetailCard";

async function getProduct(id){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

export default async function page({params}){

    const item = await getProduct(params.id);
    console.log(item);
    return(
        <main>
            <Navbar />
            <ProductDetailCard 
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
            />
            {/* ID: {params.id}<br/> */}
        </main>
    )
}
