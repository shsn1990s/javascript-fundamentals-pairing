const cohort = {
  name: 'May 2022',
  id: 1234,
  peer_group: ['Team 1', 'Team 2', 'Team 3', 'Team 4']
}

const print = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.peer_group.length}`);
}

print(cohort);
