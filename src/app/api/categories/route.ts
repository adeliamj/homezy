import {NextResponse} from 'next/server';

export async function GET(){
    const data =[
        {
            icon : "buildings-1",
            title : "Studio",
            total: "100+ listings"
        },
        {
            icon : "building",
            title : "Apartement",
            total: "100+ listings"
        },
        {
            icon : "buildings-2",
            title : "Office",
            total: "100+ listings"
        },
    ];

    return NextResponse.json(data)
}
