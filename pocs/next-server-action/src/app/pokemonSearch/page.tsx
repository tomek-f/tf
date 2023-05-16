import PokemonList from './PokemonList';

export default function PokemonSearch() {
  async function search(searchStr: string) {
    'use server';

    console.log('searching for', searchStr);

    const pokemonRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const pokemonData = await pokemonRes.json();

    return pokemonData.results
      .filter((p: { name: string }) => p.name.toLowerCase().includes(searchStr.toLowerCase()))
      .map((p: { name: string }) => p.name)
      .slice(0, 50);
  }

  return (
    <main className="p-5">
      <PokemonList search={search} />
    </main>
  );
}
