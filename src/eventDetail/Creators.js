import React, { PropTypes } from 'react';

const Creators = ({ creators }) => {
  const creatorsByRole = creators.reduce((memo, { role, name }) => {
    // the Marvel API often returns penciller missing an l
    if (role === 'penciler') {
      role = 'penciller';
    }

    if (!memo[role]) {
      memo[role] = [];
    }

    memo[role].push(name);
    return memo;
  }, {});
  const roles = Object.keys(creatorsByRole).sort();

  return (
    <section>
      <h4>Creators</h4>
      <ul className="event-detail-creators">
        {roles.map((role) => {
          return (
            <li key={role} className="event-detail-creator">
              <strong>{creatorsByRole[role].length > 1 ? `${role}s` : role}</strong>
              <span>{creatorsByRole[role].join(', ')}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Creators.propTypes = {
  creators: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
};

export default Creators;
