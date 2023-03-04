export default async (request , context) => {
    return new Response("hello world! from the edge!", {
        headers: {
            "content-type": "text/html",
        },
    });
};