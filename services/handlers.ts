import { NextRequest, NextResponse } from "next/server";

const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req: NextRequest, res: NextResponse) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        // case 'POST': {
        //     return addPost(req, res);
        // }

        // case 'PUT': {
        //     return updatePost(req, res);
        // }

        // case 'DELETE': {
        //     return deletePost(req, res);
        // }
    }
}

export async function getPosts(req: NextRequest, res: NextResponse){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let projects = await db
            .collection('projects')
            .find({})
            .toArray();
        // return the posts
        return NextResponse.json({
            data: JSON.parse(JSON.stringify(projects)),
            success: true,
        });
    } catch (error) {
        // return the error
        return NextResponse.json({
            // message: new Error(error).message,
            success: false,
        });
    }
}