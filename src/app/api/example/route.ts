export async function GET() {
  const data = {
    message: "Hello World",
    status: 200,
  }
 
  return Response.json(data)
}
