export default function MainEntry() {
  return (
    <>
      <nav>
        {/* Logo on the left side, nav links on the right */}
        <div></div>

        <ul>
          <li>Home</li>
          <li className="dropdown-container">
            <p>Resources</p>
            <ul className="dropdown-content">
              <li>Sermons</li>
              <li>Guide to the Divine Liturgy</li>
              <li>Choir Music</li>
            </ul>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header></header>
      <main></main>
      <footer></footer>
    </>
  );
}