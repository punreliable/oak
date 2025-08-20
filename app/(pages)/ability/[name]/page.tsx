/* eslint-disable-next-line */
import prettyName from '@/utilities/prettyName';

export interface Results {
  name: string;
  url: string;
}
export interface AbilityListResponse {
  content?: string;
  name?: string;
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
}

export const revalidate = 60;

export async function generateStaticParams() {
  const abilityList: AbilityListResponse = await fetch(`https://pokeapi.co/api/v2/ability/`).then(
    (res) => res.json(),
  );
  return abilityList.results.map((result) => ({
    name: String(result.name),
  }));
}

export default async function Page({ params }: { params: any }) {
  const { name } = await params;
  const post: AbilityListResponse = await fetch(`https://pokeapi.co/api/v2/ability/${name}`).then(
    (res) => res.json(),
  );
  const name: string | undefined = post.name;
  const prettyName: string = prettyName(name);

  return (
    <main className='App'>
      <div className='row'>
        <h1 className='darkest-green'>Ability</h1>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {post.name && <h1 className='darkest-green'>Name: {name}</h1>}
          {post.content && <p className='darkest-green'>Content: {post.content}</p>}
        </div>
      </div>
    </main>
  );
}
