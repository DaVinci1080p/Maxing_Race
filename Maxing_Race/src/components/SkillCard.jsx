const id_dict = {
  0: 'Attack',
  1: 'Defence',
  2: 'Strength',
  3: 'Constitution',
  4: 'Ranged',
  5: 'Prayer',
  6: 'Magic',
  7: 'Cooking',
  8: 'Woodcutting',
  9: 'Fletching',
  10: 'Fishing',
  11: 'Firemaking',
  12: 'Crafting',
  13: 'Smithing',
  14: 'Mining',
  15: 'Herblore',
  16: 'Agility',
  17: 'Thieving',
  18: 'Slayer',
  19: 'Farming',
  20: 'Runecrafting',
  21: 'Hunter',
  22: 'Construction',
  23: 'Summoning',
  24: 'Dungeoneering',
  25: 'Divination',
  26: 'Invention',
  27: 'Archaeology'
};

const SkillCard = ({ Skills }) => {
  return (
    <div className="skills">
      <div>
        <p>Rank: {Skills.rank.toLocaleString('en-US')}</p>
      </div>
      <div>
        {/* <img
                    src={
                        `./img/${id_dict[Skills.id]}` == 'NULL'
                            ? `./img/${id_dict[Skills.id]}`
                            : 'https://via.placeholder.com/400'
                    }
                alt={id_dict[Skills.id]}></img>*/}
      </div>
      <div>
        <span>{id_dict[Skills.id]}</span>
        <h3>{Skills.level}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
