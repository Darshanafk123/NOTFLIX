import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Notflix</h1>
      <div className="filters">
        <input className="filter-input" type="text" placeholder="Search some shit..." />
        <select className="filter-select">
          <option>All genres</option>
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
        </select>
        <select className="filter-select">
          <option>Any year</option>
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
        
      </div>
    </nav>
  )
}
