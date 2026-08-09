import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="hero">
        <h1>तुमची नोकरी, तुमचे भविष्य</h1>

        <p>
          सरकारी नोकरी, निकाल, प्रवेशपत्र आणि नवीन भरतीची माहिती
          एका ठिकाणी.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="नोकरी शोधा... उदा. Railway, MPSC, SSC"
          />

          <button>Search</button>
        </div>
      </main>
      <section className="latest-jobs">

  <h2>Latest Government Jobs</h2>

  <div className="jobs-container">

    <div className="job-card">
      <h3>RRB ALP Recruitment 2026</h3>
      <p>Railway Recruitment Board</p>
      <p>Vacancies: 500+</p>
      <button>View Details</button>
    </div>

    <div className="job-card">
      <h3>SSC CGL Recruitment 2026</h3>
      <p>Staff Selection Commission</p>
      <p>Vacancies: 1200+</p>
      <button>View Details</button>
    </div>

    <div className="job-card">
      <h3>MPSC Recruitment 2026</h3>
      <p>Maharashtra Public Service Commission</p>
      <p>Vacancies: 250+</p>
      <button>View Details</button>
    </div>

  </div>

</section>
    </>
  );
}

export default App;