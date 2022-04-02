import * as React from "react";
import PeopleCards from "../components/PeopleCards";

const People = () => {
  interface INames {
    names: string[];
  }

  const [name, setName] = React.useState<INames>(null);

  let namesList: INames = {
    names: ["john", "Matt", "Landers", "Mike", "Michelle"],
  };

  let handleClick = () => {
    setName(namesList);
  };
  // React.useEffect(() => {

  // })

  if (!name) {
    return (
      <div>
        <button onClick={handleClick} className="btn btn-warning">
          load names
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>List of Peeps. still on the same page homie</h1>
      {name.names.map((val) => {
        return (
          <div key={val}>
            <PeopleCards nombre={val} />
          </div>
        );
      })}
    </div>
  );
};

export default People;
