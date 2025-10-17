export async function GET() {
  return Response.json(
    // message: "This is a sample response from the comments API"
    comments,
  {
    headers: {
      "Set-Cookie" : "theme=dark"
    }
  });
}

export async function POST(response) {
  const newComment = await response.json();
  comments.push({
    id: comments.length + 1,
    postId: newComment.postId,
    text: newComment.text,
  });
  return Response.json({
    message: "Comment added successfully",
    comments,
  });
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
