export async function PATCH(request, { params }) {
  const body  = await request.json()
  const index = comments.findIndex(c => c.id === parseInt(params.id))
  comments[index] = {
    // ...comments[index],
    name: body.name, 
  }
  return Response.json({
    message: "comment updated successfully",
    comments
  });
}

export async function DELETE(request, { params}) {
  const newComments = comments.filter(c => c.id !== parseInt(params.id))
  return Response.json({
    message: "comment deleted successfully",
    newComments
  })
}

const comments = [
  {
    id: 1,
    postId: 19,
    name: "Alvarez",
    email: "alvarez19@gmail.com",
  },
  {
    id: 2,
    postId: 8,
    name: "Enzo Fernandez",
    email: "enzofernandez@gmail.com",
  },
  {
    id: 3,
    postId: 8,
    name: "Pedri",
    email: "pedri8@gmail.com",
  },
];
