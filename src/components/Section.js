import React from "react";

export default function Section({ id, title, text, subtext, list }) {
  return (
    <section className="card" id={id}>
      <h2 className="card-title">{title}</h2>
      {text && <p className="card-text">{text}</p>}
      {list && (
        <ul className="card-list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {subtext && <p className="card-subtext">{subtext}</p>}
    </section>
  );
}
