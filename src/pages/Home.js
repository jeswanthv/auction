import React from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';

function Home({ teams }) {
  // const [teams, setTeams] = useState(null);

  // useEffect(() => {
  //   const fetchteams = async () => {
  //     const { teams } = await request(
  //       'https://api-ap-south-1.graphcms.com/v2/cl0dmxg5o0u9g01xsht880hhv/master',
  //       `
  //     {
  //       teams {
  //         id
  //         teamName
  //         teamBudget
  //         teamPhoto{
  //           id
  //           url
  //         }
  //       }
  //     }
  //   `
  //     );

  //     setTeams(teams);
  //   };

  //   fetchteams();
  // }, []);
  console.log(teams);
  return (
    <div className='App'>
      {!teams ? (
        'Loading'
      ) : (
        <>
          <NavBar />

          <div className='mx-auto max-w-4xl m-10 grid grid-cols-1 gap-5 lg:grid-cols-3'>
            {teams.map(({ id, teamName, teamBudget, teamPhoto }) => (
              <>
                <Card
                  name={teamName}
                  budget={teamBudget}
                  photo={teamPhoto.url}
                />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
