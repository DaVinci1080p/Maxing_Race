import React from 'react';
import '../css/SkillTable.css';

const id_dict = {
  0: 'attack',
  1: 'defence',
  2: 'strength',
  3: 'constitution',
  4: 'ranged',
  5: 'prayer',
  6: 'magic',
  7: 'cooking',
  8: 'woodcutting',
  9: 'fletching',
  10: 'fishing',
  11: 'firemaking',
  12: 'crafting',
  13: 'smithing',
  14: 'mining',
  15: 'herblore',
  16: 'agility',
  17: 'thieving',
  18: 'slayer',
  19: 'farming',
  20: 'runecrafting',
  21: 'hunter',
  22: 'construction',
  23: 'summoning',
  24: 'dungeoneering',
  25: 'divination',
  26: 'invention',
  27: 'archaeology'
};

function SkillTable({ player }) {
  const DisplayData = React.Children.toArray(
    player.map((info) => {
      return (
        <tr>
          <td>
            <img
              src={
                `../src/img/${id_dict[info.id]}.png` !== 'NULL'
                  ? `../src/img/${id_dict[info.id]}.png`
                  : 'https://via.placeholder.com/25'
              }
              alt={id_dict[info.id]}></img>
          </td>
          <td>{id_dict[info.id]}</td>
          <td>{info.level}</td>
          <td>{info.xp.toLocaleString('en-US')}</td>
          <td>{info.rank}</td>
        </tr>
      );
    })
  );

  return (
    <div className="skillTable">
      <table className="skillTable" striped="true" borderd="true" hover="true">
        <thead>
          <tr>
            <th></th>
            <th>Skill</th>
            <th>Level</th>
            <th>Xp</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SkillTable;
