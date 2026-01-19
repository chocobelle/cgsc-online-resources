export default function MainEntry() {
  return (
    <>
      <nav className="flex justify-between items-center py-3 px-4 font-zalando border-b border-oliveGreen">
        <div className="logoSide">
          <img src="/favicon.png" alt="site logo" className="w-8" />
          <h1 className="font-fraunces text-2xl font-medium">
            CGSC Online Resources
          </h1>
        </div>

        <ul className="flex items-center gap-6 mainNav">
          <li>Home</li>
          <li className="dropdown-container">
            <p>Resources</p>
            <ul className="dropdown-content">
              <li>Sermons</li>
              <li>Choir Music</li>
              <li>Divine Liturgy Guide</li>
            </ul>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header>
        <img src="/hg.png" alt="His Grace" className="left" />
        <img src="/leaf-1.png" alt="leaf graphic" className="right" />
        <h2>Welcome To CGSC Online Resources</h2>
        <p>
          An unofficial, volunteer-run website providing resources for followers
          of Christ the Good Shepherd Church across the world!
        </p>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}