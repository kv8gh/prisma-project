import { NextResponse } from "next/server";

export async function POST(request){
    const data = await request.json()
    const {name, id} = data;
    console.log({data})

    const result = await prisma.User.create({
        data: {
            name: name,
            id: id
        }
    })
    return NextResponse.json({data: data})
}