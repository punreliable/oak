import prettyName from '@/utilities/prettyName';

// interface Post {
//   id: string;
//   title?: string;
//   content?: string;
//   name: string;
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: Ability[];
// }

// interface Ability {
//   name: string;
//   url: string;
// }



interface Results {
  name: string;
  url: string;
}[];

interface AbilityListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results;
  // results: [{
  //   name:string;
  //   url: string;
  // }];
}



// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export async function generateStaticParams() {
  const abilityList: AbilityListResponse = await fetch(`https://pokeapi.co/api/v2/ability/`).then((res) => res.json());
  return abilityList.results.map((result) => ({
    name: String(result.name),
  }));
}

export default async function Page({ params }: { params: any }) {

  console.log('Hello World!');
  const { name } = await params;
  // const id = 1;

  console.log('ID: ', name)

  // const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) => res.json());
  const post: AbilityListResponse = await fetch(`https://pokeapi.co/api/v2/ability/${name}`).then((res) => res.json());
  // console.log('Post: ', post);
  console.log('Post: ', prettyName(post.name));
  return (
    <main className="App">
      <div className="row">
      <h1 className="darkest-green">Ability</h1></div>
      <div className="row">
        <div className="col-md-12">
          {post.name && <h1 className="darkest-green">Name: {prettyName(post.name)}</h1>}
          {post.content && <p className="darkest-green">Content: {post.content}</p>}
        </div>
      </div>
    </main>
  );
}
