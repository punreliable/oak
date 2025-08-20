
interface Post {
  id: string;
  title: string;
  content: string;
}

interface Ability {
  name: string;
  url: string;
}

interface AbilityListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ability[];
}



// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) => res.json());
  return posts.map((post) => ({
    name: String(post.id),
  }));
}

export default async function Page({ params }: { params: any }) {

  console.log('Hello World!');
  // const { id } = await params;
  const id = 1;

  console.log('ID: ', id)

  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) => res.json());
  console.log('Post: ', post);

  return (
    <main className="App">
      <div className="row">
        <div className="col-md-6">
          <h1 className="darkest-green">Hello</h1>
          <h2 className="darkest-green">Title:</h2>
          <p className="darkest-green">Content:</p>
        </div>
        <div className="col-md-6">
          {post.title && <h1 className="darkest-green">{post.title}</h1>}
          {post.content && <h1 className="darkest-green">{post.content}</h1>}
        </div>
      </div>
    </main>
  );
}
