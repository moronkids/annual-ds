import React from 'react';

// libs
import { RectShape } from 'react-placeholder/lib/placeholders';

export default function Skeleton() {
  return (
    <div className="ds-section__partners-clients-list skeleton">
      <ul>
        {[...Array(8)].map((v, i) => (
          <li><RectShape></RectShape></li>
        ))}
      </ul>
      <ul>
        {[...Array(8)].map((v, i) => (
          <li><RectShape></RectShape></li>
        ))}
      </ul>
      <ul>
        {[...Array(8)].map((v, i) => (
          <li><RectShape></RectShape></li>
        ))}
      </ul>
      <ul>
        {[...Array(8)].map((v, i) => (
          <li><RectShape></RectShape></li>
        ))}
      </ul>
    </div>
  )
}
