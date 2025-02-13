

export default function Home() {


  const fetchPosts = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/{id or name}/`);
    const posts = await res.json();
    updatePost(posts)
  };

 
  return (
    <>
        <input
          type="radio"
          id="all-characters"
          name="category"
          value="all-characters"
          defaultChecked={true}
        />
        <label htmlFor="all-characters">全キャラクター</label>
      </div>

      <div>
        <input
          type="radio"
          id="demon-slayer-corps"
          name="category"
          value="demon-slayer-corps"
        />
        <label htmlFor="demon-slayer-corps">鬼殺隊</label>
      </div>

      <div>
        <input type="radio" id="demons" name="category" value="demons" />
        <label htmlFor="demons">鬼</label>
      </div>

      <div>
        <input type="radio" id="pillars" name="category" value="pillars" />
        <label htmlFor="pillars">柱</label>
      </div>
    </>
  );
}

   