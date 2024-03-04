// import prisma from "@/lib/prisma"
// import info from "./info/page";
// import Data from "@/app/components/data";
// import  { GetServerSideProps } from "next";
// import addPost from "./add-post/page";
// import Link from "next/link";
// import Post from "@/app/components/post";


// async function getName(){
//   const name = await  prisma.User.findMany();
//   console.log(name);
//   return name;
// }
// async function getName(){
//   const name = await  prisma.User.findMany();
//   console.log(name);
//   return name;
// }

// async function getPosts(){
//   const posts = await prisma.post.findMany({
//     include:{
//       author:{
//         select :{name: true}
//       }
//     }
//   })
//   return posts;
// }
// export default async function Home(){
//   const userNames =await getName();
//   const posts = await getPosts();
//   //console.log(posts);
//   // console.log(userNames)
//   return (

//   <div>
//     <h1>THIS IS OUR FIRST POSTGRES PROJECT!!!</h1>
//     <Link href={'/add-post'}>ADD POST</Link>
//     {
//       userNames.map((items,index)=>{
//         {/* console.log(typeof items); */}
//         return (<info  
//         key={index} 
//         name={items.name} 
//         id={items.id}/>);
//       })
//     }
//     {/*these 2 functions are for getting the data from bacend or database */}
//     {
//       userNames.map((use)=>{
//         {/* console.log(typeof items); */}
//         return (<Data  
//         key={use.id} 
//         name={use.name} 
//         id={use.id}
//         />
//         )
//       })
//     }
//     {
//       posts.map((post)=>{
//         return (
//           <Post
//           key={post.id} 
//           authorName={post.author.name} 
//           id={post.id}
//           title={post.title}
//           content={post.content}
//           />
//           )
//       })
//     }
//     {/* <info name={userNames[0].name} id={userNames}/> */}
//   </div>
  
//   )
// }


import Navbar from "./components/navbar"
import Card from "./components/card"

async function products(){
  const product = await  fetch('http://fakestoreapi.com/products');
  if(!product) {
    console.log('product error','error');
    return;
  }
  let data=await product.json();
  return data;
}

async function getCategory(){
  const  category = await fetch("https://fakestoreapi.com/products/categories");
  const catData = await category.json();
  if(!catData){
    console.log('category error','error');
    return;
  }
  return  catData;
}

export default async function Home(){
  const cardData = await products();
  return(
    <main>
      <Navbar />
      <section>
      {
        
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {
          cardData.map((item,index)=>{
            return(
              <Card 
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              rating={item.rating}
              />
            )
          })
        }
        </div>

      }
      </section>
    </main>
  )
}