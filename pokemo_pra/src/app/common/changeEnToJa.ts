async function changeEnToJa(
  enName: string,
  type: "name" | "text" | "type"
): Promise<string | undefined> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${enName}`
  );

  type Text = {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  };

  type Type ={
    genus: string;
    language: {
      name: string;
      url: string;
    }
  }

  const data = await res.json();

  const jaText: string | undefined = data?.flavor_text_entries?.find(
    (t: Text) => t.language.name === "ja"
  )?.flavor_text;
 
  const jaType = data?.genera?.find((t: Type) => {return  t.language.name === "ja"})?.genus;

  
  const jaName: string | undefined = data.names[0]?.name;

  if (jaName && type === "name") {
    return jaName;
  } else if (jaText && type === "text") {
    return jaText;
  } else if (jaType && type === "type") {
    return jaType;
  }
else {
    return undefined;
  }
}

export default changeEnToJa;
