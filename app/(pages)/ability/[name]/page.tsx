/* eslint-disable-next-line */
import prettyName from '@/utilities/prettyName';

export interface Result {
  name: string;
  url: string;
}
export interface AbilityListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
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
  const post: Result = await fetch(`https://pokeapi.co/api/v2/ability/${name}`).then((res) =>
    res.json(),
  );

  return (
    <main className='App'>
      <div className='row'>
        <h1 className='darkest-green'>Ability</h1>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {post.name && <h1 className='darkest-green'>Name: {prettyName(post.name)}</h1>}
        </div>
      </div>
    </main>
  );
}
