import { gql, GraphQLClient } from 'graphql-request';
import React, { useState } from 'react';

const TeamNames = [
  'choose',
  'Mumbai Indians',
  'Chennai Super kings',
  'Royal Challengers Bangalore',
  'Sunrises Hyderabad',
  'Kolkata Knight Riders',
  'Rajasthan Royals',
  'Punjab Kings',
  'Gujarat Titans',
  'Lucknow Super Giants',
];

function InputForm({ teams }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('');
  const changeTeamBudget = async () => {
    teams.forEach((team) => {
      if (team.teamName === name) {
        setBudget(parseInt(team.teamBudget - amount));
      }
    });
    const endpoint =
      'https://api-ap-south-1.graphcms.com/v2/cl0dmxg5o0u9g01xsht880hhv/master';
    const graphQLClient = new GraphQLClient(endpoint);
    const mutation = gql`
      mutation UpdateTeam($teamName: String!, $teambudget: Int!) {
        updateTeam(
          where: { teamName: $teamName }
          data: { teamBudget: $teambudget }
        ) {
          teamName
          teamBudget
        }
        publishTeam(where: { teamName: $teamName }, to: PUBLISHED) {
          id
        }
      }
    `;
    const variables = {
      teamName: name,
      teambudget: budget,
    };
    console.log(name, budget);
    await graphQLClient.request(mutation, variables);
    window.location.reload();
  };
  return (
    <div class='my-32 w-full max-w-xs mx-auto '>
      <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div class='mb-4'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            TeamName
          </label>
          <div class='inline-block relative w-64'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setName(e.target.value)}
            >
              {TeamNames.map((name) => (
                <option value={name}>{name}</option>
              ))}
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                class='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div class='mb-6'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='password'
          >
            Amount
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='TeamBudget'
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <div class='flex items-center justify-between'>
          <button
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={changeTeamBudget}
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
