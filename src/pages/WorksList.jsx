import styled from 'styled-components';
import React from 'react';

export default function WorksList({ works }) {
  return (
    <ul>
      {works.map(work => (
        <Work work={work} />
      ))}
    </ul>
  );
}

function Work({ work }) {
  return (
    <li>
      <image src={work.workimage} />
      <h2>{work.worktitle}</h2>
      <p>{work.workdesc}</p>
    </li>
  );
}
