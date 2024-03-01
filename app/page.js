import prisma from "@/lib/prisma"
import info from "./info/page";
import data from "@/app/components/data";
import  { GetServerSideProps } from "next";
import addPost from "./add-post/page";
import Link from "next/link";

async function getName(){
  const name = await  prisma.User.findMany();
  console.log(name);
  return name;
}

export default async function Home(){
  const userNames =await getName();
  // console.log(userNames)
  return (

  <div>
    <h1>THIS IS OUR FIRST POSTGRES PROJECT!!!</h1>
    <Link href={'/add-post'}>ADD POST</Link>
    {
      userNames.map((items,index)=>{
        console.log(typeof items);
        return (<info  
        key={index} 
        name={items.name} 
        id={items.id}/>);
      })
    }
    {/* <info name={userNames[0].name} id={userNames}/> */}
  </div>
  
  )
}