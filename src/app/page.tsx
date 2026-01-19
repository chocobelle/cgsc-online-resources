export default function MainEntry() {
  return (
    <>
      <nav className="flex justify-between items-center py-3 px-4 font-zalando border-b border-oliveGreen">
        {/* Logo on the left side, nav links on the right */}
        <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="site logo" className="w-8"/>
          <h1 className="font-fraunces text-2xl font-medium">
            CGSC Online Resources
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li className="dropdown-container">
            <p>Resources</p>
            <ul className="dropdown-content">
              <li>Sermons</li>
              <li>Divine Liturgy Guide</li>
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